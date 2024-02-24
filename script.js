document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  checkLogin();
});
function checkLogin() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (username == "H4CK3R" && password == "you'llneverguessit123852") {
    alert("Login successful, redirecting...");
    window.location = "success.html";
  } else {
    alert("Login failed");
  }
}
