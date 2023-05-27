document.getElementById("sendEmailBtn").addEventListener("click", function() {
  // Make an AJAX request to your server-side script
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "sendEmail.php", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        // Email sent successfully
        alert("Email sent!");
      } else {
        // Email sending failed
        alert("Failed to send email. Please try again later.");
      }
    }
  };
  xhr.send("sawahmina@gmail.com"); // Replace with the desired email address
});
