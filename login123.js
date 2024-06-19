// JavaScript for form validation
document.getElementById('login-form').addEventListener('submit', function(event) {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  if (!username || !password) {
    alert('Please enter both username/email and password.');
    event.preventDefault();
  }

  if (username = 'Cool' || username = 'Cool') {
    document.location.href="/home.html";;
    event.preventDefault();
  }
});

document.getElementById('signup-form').addEventListener('submit', function(event) {
  var newUsername = document.getElementById('new-username').value;
  var newPassword = document.getElementById('new-password').value;
  var confirmPassword = document.getElementById('confirm-password').value;

  if (!newUsername || !newPassword || !confirmPassword) {
    alert('Please fill in all fields.');
    event.preventDefault();
  } else if (newPassword !== confirmPassword) {
    alert('Passwords do not match.');
    event.preventDefault();
  }
});
