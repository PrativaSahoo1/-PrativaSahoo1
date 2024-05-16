<?php
// Process your form data here
$username = $_POST['name']; // Make sure to sanitize and validate all inputs
$email = $_POST['email'];

// Example: Save data to database, send email, etc.

// After processing, redirect to another page
header('Location: assets/php/thank_you.php'); // Redirect to a thank you page or another URL
exit; // Don't forget to call exit after header()
?>