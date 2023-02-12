<?php

function sanitizeForm($inputText, $uc = false) {
	$inputText = strip_tags($inputText);
	$inputText = str_replace(" ", "_", $inputText);
	$inputText = str_replace("'", "''", $inputText);
	if ( $uc == true ) {
		$inputText = ucfirst(strtolower($inputText));
	}
	return $inputText;
}

if ( isset ($_POST["registerButton"])) {
	$username = sanitizeForm($_POST["username"]);
	$vorname = sanitizeForm($_POST["vorname"]);
	$name = sanitizeForm($_POST["name"]);
	$password1 = sanitizeForm($_POST["password1"]);
	$password2 = sanitizeForm($_POST["password2"]);

	$success = $account->register($username, $vorname, $name, $password1, $password2);

	if ($success) {
		$_SESSION["username"] = $username;
		header("Location: index.php");
	}
}

?>
