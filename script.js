function checkStrength() {

    let password = document.getElementById("password").value;

    let strength = 0;

    if(password.length >= 8)
        strength++;

    if(/[A-Z]/.test(password))
        strength++;

    if(/[a-z]/.test(password))
        strength++;

    if(/[0-9]/.test(password))
        strength++;

    if(/[@$!%*?&]/.test(password))
        strength++;

    let result = document.getElementById("result");

    if(strength <= 2) {
        result.innerHTML = "Weak Password";
        result.style.color = "red";
    }
    else if(strength <= 4) {
        result.innerHTML = "Medium Password";
        result.style.color = "orange";
    }
    else {
        result.innerHTML = "Strong Password";
        result.style.color = "lightgreen";
    }
}