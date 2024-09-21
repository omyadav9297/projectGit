document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  // Check if username and password match
  if (username === "admin" && password === "admin123") {
    // Redirect to dashboard or do something else
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("message").textContent = "Invalid username or password.";
  }
});
