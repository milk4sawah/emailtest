<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  // Add your email address here
  $to = "sawahmina@gmail.com";

  // Email subject
  $subject = "Subject of your email";

  // Email content
  $message = "Content of your email";

  // Additional headers
  $headers = "From: your-website@example.com\r\n";
  $headers .= "Reply-To: ".$_POST["email"]."\r\n";

  // Send email
  if (mail($to, $subject, $message, $headers)) {
    // Email sent successfully
    http_response_code(200);
  } else {
    // Failed to send email
    http_response_code(500);
  }
} else {
  // Invalid request
  http_response_code(400);
}
?>
