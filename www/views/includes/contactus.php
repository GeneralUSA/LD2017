<!--  source: http://www.freecontactform.com/email_form.php -->


<?php

if(isset($_POST['email'])) {
	
	// next 2 lines my email & subject
    $recipient="4saleitems@outlook.com";
    $subject="Lawyer's Devotional Feedback email message";
	
	function died($error) {
		echo "We found the following errors in your form.";
		echo $error."<br />";
		echo "Please fix these errors before proceeding.<br />";
		die();
	}
		
	// validation expected
	if(!isset($_POST['name']) ||
	   !isset($_POST['email']) ||
	   !isset($_POST['message'])
	   ) {
		died('We found the following errors in your form.');
	}
		
    $name=$_POST["name"];	// required
    $email_from=$_POST["email"];	// required
    $msg=$_POST["message"];	// required
	
	$error_message = "";
	$email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-0.-]+\.[A-Za-z]{2,4}$/';
	
	if(!preg_match($email_exp.$email_from)) {
		$error_message .= 'The Email Address you entered does not appear to be valid.<br />';
	}
	
	$string_exp = "/^[A-Za-z .'-]+$/";
	
	if(!preg_match($string_exp,$name)) {
		$error_message .= 'The Name you entered does not appear to be valid.<br />';
	}

	if(strlen($message) <2) {
		$error_message .= 'The Comments you entered do not appear to be valid.<br />';
	}
	
	if(strlen($error_message) >0) {
		died('error_message');
	}
	
	$email_message = "Form details below. \n\n";
	
	function clean_string($string) {
		$bad = array("content-type", "bcc:","to:","cc:","href");
		return str_replace($bad,"",$string);
	}
	
	$email_message .= "Name: " .clean_string($name)."\n";
	$email_message .= "Email: " .clean_string($email_from)."\n";
	$email_message .= "Comments: " .clean_string($message)."\n";
	
	// create email headers
	$headers = 'From: ' .$email_from."\r\n".
		'Reply-To: '.$email_from."\r\n" .
		'X-Mailer: PHP/' .phpversion();
	@mail($email_to, $email_subject, $email_message, $headers);
	>?
		
		<!--  this is where I include my own success html here -->
		
		Thank you for contacting us. Will will look into this and be in touch with you if necessary.
			
	<?php
			
	}
?>