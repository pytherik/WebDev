<?php

if ( isset($_POST["loginButton"]) ) {
	$username = $_POST["username"];
	$password = $_POST["password"];

	$success = $account->login($username, $password);

	if ($success) {
		$_SESSION["username"] = $username;
		header("Location: index.php");
	}
}

?>
