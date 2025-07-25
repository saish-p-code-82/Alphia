
  // Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyC84DTXsKFOd99YlHrh44w4z5AZBHgbgP8",
  authDomain: "alphia-login.firebaseapp.com",
  databaseURL: "https://alphia-login-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "alphia-login",
  storageBucket: "alphia-login.firebasestorage.app",
  messagingSenderId: "1092964695051",
  appId: "1:1092964695051:web:57a03a84d97c85479d5b0e"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.database();

  function login(event) {
    event.preventDefault();

    const userId = document.getElementById("userid").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMessage = document.getElementById("error-message");

    // Reference to that specific user in DB
    const userRef = db.ref("users/" + userId);

    userRef.once("value")
      .then(snapshot => {
        if (snapshot.exists()) {
          const storedPassword = snapshot.val().password;
          if (storedPassword === password) {
            window.location.href = "form.html";
          } else {
            errorMessage.textContent = "Incorrect password.";
          }
        } else {
          errorMessage.textContent = "User ID not found.";
        }
      })
      .catch(error => {
        console.error("Error reading from Firebase:", error);
        errorMessage.textContent = "Login error. Please try again.";
      });
  }
  // Disable Right Click
  document.addEventListener('contextmenu', e => e.preventDefault());

  // Disable DevTools Shortcuts
  document.addEventListener('keydown', e => {
    if (
      e.ctrlKey && ['u', 'U', 's', 'S', 'c', 'C'].includes(e.key) || // Ctrl+U / Ctrl+S / Ctrl+C
      e.key === 'F12' || // F12
      (e.ctrlKey && e.shiftKey && ['I', 'i', 'C', 'c', 'J', 'j'].includes(e.key)) // Ctrl+Shift+I/J/C
    ) {
      e.preventDefault();
      alert('DevTools is disabled.');
    }
  });
