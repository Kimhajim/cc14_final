document.addEventListener("DOMContentLoaded", function () {
    // Toggle password visibility
    const togglePassword = document.querySelector(".toggle-password");
    const passwordInput = document.getElementById("password");

    togglePassword.addEventListener("click", function () {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            togglePassword.classList.replace("fa-eye-slash", "fa-eye");
        } else {
            passwordInput.type = "password";
            togglePassword.classList.replace("fa-eye", "fa-eye-slash");
        }
    });

    // Form submission (prevent default for now)
    document.getElementById("loginForm").addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Login functionality is not yet implemented!");
    });
});
