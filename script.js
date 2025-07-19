
 
  const corruptionTime = new Date("2025-08-14T00:00:00"); // 15 Aug 2025 at 12:00 AM

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
    document.body.style.backgroundColor = "rgba(0, 7, 4, 1)"; // Optional: hard reset background
  }

  function checkCorruptionTime() {
    const now = new Date();
    if (now >= corruptionTime) {
      corruptPage();
      clearInterval(timer);
    }
  }

  const timer = setInterval(checkCorruptionTime, 1000);
    //registration closed
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

  // Run at load and every second to ensure accuracy
  updateRegistrationStatus();
  setInterval(updateRegistrationStatus, 1000);

  // Countdown logic
  const targetDate = new Date("2025-08-11T08:30:00").getTime();
  setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      document.getElementById("countdown").innerHTML = "<span class='text-success'>🎉 Event Started!</span>";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
  }, 1000);
     document.addEventListener('contextmenu', event => event.preventDefault());

function togglePassword() {
  const passwordInput = document.getElementById('password');
  const toggle = document.querySelector('.toggle-password');
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    toggle.textContent = '🙈';
  } else {
    passwordInput.type = 'password';
    toggle.textContent = '👁️';
  }
}

function validateForm() {
  const userId = document.getElementById('userid').value.trim();
  const password = document.getElementById('password').value;

  if (userId === "" || password === "") {
    alert("Please fill in both User ID and Password.");
    return false;
  }
    if(userId === "dpm" && password === "dpmop")
    {
        window.location.href = "form.html";
    return false;

    }
    else
    {
        alert("Invalid User ID or Password.");
        return false;
    }
  // Optional: Add more custom validation
  return true; // proceed with form submission
}
