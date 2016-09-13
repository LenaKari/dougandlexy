<?php

$name = $_POST['nameInput'];
$guest = $_POST['guestInput'];
$attending = $_POST['attending'];
$declined = $_POST['declined'];
$comments = $_POST['comments'];

// Create the email and send the message
$to = 'dpr980@gmail.com';
$email_subject = "Website Contact Form: $name";
$email_body = "You have received a new message from your RSVP form.\n\n"."Here are the details:\n\nAttendee name: $name\n\nGuest: $guest\n\n$attending\n\n$declined\n\n--------------------\n\nComments: $comments\n\n";
$headers = "From: noreply@hermes-synchron.de\n";
$headers .= "Reply-To: $email_address";
mail($to,$email_subject,$email_body,$headers);
return true;
?>
