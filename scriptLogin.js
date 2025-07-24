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
    else if(userId === "ALPHIA2025_02" && password === "KLS@8374")
    {
      window.location.herf = "form.html";
    return false;
    }
     else if(userId === "ALPHIA2025_03" && password ==="DP@6249")
    {
      window.location.herf = "form.html";
    return false;
    }
    else if(userId === "ALPHIA2025_04" && password ==="STP@5120")
    {
      window.location.herf = "form.html";
    return false;
    }
    else if(userId === "ALPHIA2025_05" && password ==="SG@2891")
    {
      window.location.herf = "form.html";
    return false;
    }
     else if(userId === "ALPHIA2025_06" && password ==="BB@6743")
    {
      window.location.herf = "form.html";
    return false;
    }
      else if(userId === "ALPHIA2025_07" && password ==="ANG@9340")
    {
      window.location.herf = "form.html";
    return false;
    }
       else if(userId === "ALPHIA2025_08" && password ==="PB@1912")
    {
      window.location.herf = "form.html";
    return false;
    }
        else if(userId === "ALPHIA2025_09" && password ==="LS@4538")
    {
      window.location.herf = "form.html";
    return false;
    }
         else if(userId === "	ALPHIA2025_10" && password ==="JH@8250")
    {
      window.location.herf = "form.html";
    return false;
    }
          else if(userId === "ALPHIA2025_11" && password ==="HERD@3801")
    {
      window.location.herf = "form.html";
    return false;
    }
           else if(userId === "ALPHIA2025_12" && password ==="BHA@2647")
    {
      window.location.herf = "form.html";
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

