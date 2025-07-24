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

