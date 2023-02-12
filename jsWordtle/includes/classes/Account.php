<?php

class Account {
	private $con;
	private $messages;

	public function __construct($con) {
		$this->con = $con;
		$this->messages = array();
	}

	public function login($un, $pw) {
		$query = mysqli_query($this->con, "SELECT * FROM users WHERE username='$un' AND password='$pw'");
		if ( mysqli_num_rows($query) == 1 ) {
			return true;
		} else {
			array_push($this->messages, Constants::$check["loginErr"]);
			return false;
		}
	}

	
	public function register($un, $vn, $n, $pw1, $pw2) {
		$this->checkUsername($un);
		$this->checkVorname($vn);
		$this->checkName($n);
		$this->checkPasswords($pw1, $pw2);

		if (empty($this->messages)) {
			return $this->insertNewUser($un, $vn, $n, $pw1);
		}	else {
			return false;
		}
	}

	public function getError($error) {
		if (!in_array($error, $this->messages)) {
			$error = "";
		}
		return "<span class='errorMessage'>$error</span>";
	}

	private function insertNewUser($un, $vn, $n, $pw) {
		$datetime = new DateTime();
		$timezone = new DateTimeZone("Europe/Berlin");
		$datetime->setTimezone($timezone);
		
		$date = $datetime->format("D, d.m.Y G:i:s");

		$result = mysqli_query($this->con, "INSERT users VALUES(NULL, '$un', '$vn', '$n', '$pw','0', '0', '$date')");
		return $result;
	}

	private function checkUsername($un) {
		if (strlen($un) < 4 || strlen($un) > 25) {
			array_push($this->messages, Constants::$check["username"]);
			return;
		}
		$query = mysqli_query($this->con, "SELECT * FROM users WHERE username = '$un'");
		if (mysqli_num_rows($query) != 0) {
			array_push($this->messages, Constants::$check["uNameExists"]);
			return;
		}
	}

	private function checkVorname($vn) {
		if (strlen($vn) < 3 || strlen($vn) > 25) {
			array_push($this->messages, Constants::$check["firstName"]);
			return;
		}
	}
	
	private function checkName($n) {
		if (strlen($n) < 3 || strlen($n) > 25) {
			array_push($this->messages, Constants::$check["lastName"]);
			return;
		}
	}

	private function checkPasswords($pw1, $pw2) {
		if ( $pw1 != $pw2 ) {
			array_push($this->messages, Constants::$check["passMatch"]);
			return;
		}
		if ( preg_match("/[A-ZÄÖÜ]/", $pw1) != 1 ) {
			array_push($this->messages, Constants::$check["passUpper"]);
			return;
		}
		if ( preg_match("/[a-zäöüß]/", $pw1) != 1 ) {
			array_push($this->messages, Constants::$check["passLower"]);
			return;
		}
		if ( preg_match("/[\d]/", $pw1) != 1 ) {
			array_push($this->messages, Constants::$check["passDigit"]);
			return;
		}
	}
}

