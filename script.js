document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    // Example: Replace with actual authentication logic
    if (username === "st_peters" && password === "hellostudent") {
        // Redirect to another page or show success message
        window.location.href = "dashboard.html";
    } else {
        document.getElementById("message").textContent = "Invalid username or password.";
    }
});
