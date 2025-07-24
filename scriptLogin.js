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
// demo function
function validateForm() {
  const userId = document.getElementById('userid').value.trim();
  const password = document.getElementById('password').value;

  if (userId === "" || password === "") {
    alert("Please fill in both User ID and Password.");
    return false;
  }
    if(userId === "	ALPHIA2025_01" && password === "KLE@7123")
    {
        window.location.href = "form.html";
    return false;
   
}

  // Disable right-click
  document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
  });

  // Disable Ctrl+U, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+S, F12
  document.addEventListener('keydown', function (e) {
    // F12
    if (e.key === "F12") {
      e.preventDefault();
    }
    // Ctrl+Shift+I or Ctrl+Shift+J or Ctrl+U or Ctrl+S
    if ((e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J')) ||
        (e.ctrlKey && (e.key === 'U' || e.key === 'S'))) {
      e.preventDefault();
    }
  });



