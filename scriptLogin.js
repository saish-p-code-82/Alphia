import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase, ref, get, child } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
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
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Login form handler
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const userIdInput = document.getElementById("userid").value.trim();
  const passwordInput = document.getElementById("password").value.trim();
  const statusMsg = document.getElementById("statusMsg");

  const dbRef = ref(database);

  get(child(dbRef, "users"))
    .then((snapshot) => {
      if (snapshot.exists()) {
        const usersObj = snapshot.val(); // {0: {...}, 1: {...}, ...}
        const usersArray = Object.values(usersObj); // Convert to array

        const matchedUser = usersArray.find(user =>
          user.userid === userIdInput && user.password === passwordInput
        );

        if (matchedUser) {
          window.location.href = "form.html";
        } else {
          statusMsg.textContent = "Invalid User ID or Password.";
        }
      } else {
        statusMsg.textContent = "No users found.";
      }
    })
    .catch((error) => {
      console.error("Database error:", error);
      statusMsg.textContent = "Error connecting to database.";
    });
});
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
