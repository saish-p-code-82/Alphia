document.addEventListener("DOMContentLoaded", function () {
  // COUNTDOWN
  const targetDate = new Date("2025-08-11T08:30:00").getTime();
  setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      document.getElementById("countdown").innerHTML = "<span class='text-success'>🎉 Event Started!</span>";
      return;
    }
    console.log("Countdown running...");
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
  }, 1000);

  // CORRUPTION MODE
  const corruptionTime = new Date("2025-08-14T00:00:00");
  function corruptPage() {
    const normal = document.getElementById("normalContent");
    const corrupt = document.getElementById("corruptContent");

    if (normal) normal.style.display = "none";
    if (corrupt) {
      corrupt.style.display = "flex";
      corrupt.style.justifyContent = "center";
      corrupt.style.alignItems = "center";
      corrupt.style.flexDirection = "column";
      corrupt.style.height = "100vh";
    }

    document.body.style.backgroundImage = "none";
    document.body.style.backgroundColor = "rgba(0, 7, 4, 1)";
  }

  function checkCorruptionTime() {
    const now = new Date();
    if (now >= corruptionTime) {
      corruptPage();
      clearInterval(timer);
    }
  }
  const timer = setInterval(checkCorruptionTime, 1000);

  // REGISTRATION CLOSURE
  const hideRegistrationTime = new Date("2025-08-12T00:00:00");
  function updateRegistrationStatus() {
    const now = new Date();
    const openBlock = document.getElementById("registrationOpen");
    const closedBlock = document.getElementById("registrationClosed");

    if (now >= hideRegistrationTime) {
      if (openBlock) openBlock.style.display = "none";
      if (closedBlock) closedBlock.style.display = "block";
    }
  }
  updateRegistrationStatus();
  setInterval(updateRegistrationStatus, 1000);

  // FIREBASE LINKS FETCH
  db.collection('links').doc('current').get().then((doc) => {
    if (doc.exists) {
      const data = doc.data();
      console.log("Fetched data:", data);
      document.getElementById('flipbook-link').src = data.flipbook;
      document.getElementById('download1').href = data.download1;
      document.getElementById('download2').href = data.download2;
    } else {
      console.error("No such document!");
    }
  }).catch((error) => {
    console.error("Error fetching document:", error);
  });
});



// Disable right-click and devtools shortcuts
document.addEventListener('contextmenu', e => e.preventDefault());

document.addEventListener('keydown', e => {
  if (
    e.ctrlKey && ['u', 'U', 's', 'S', 'c', 'C'].includes(e.key) ||
    e.key === 'F12' ||
    (e.ctrlKey && e.shiftKey && ['I', 'i', 'C', 'c', 'J', 'j'].includes(e.key))
  ) {
    e.preventDefault();
    alert('DevTools is disabled.');
  }
});
