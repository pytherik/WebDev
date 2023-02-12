<?php
include("../includes/dbConn.php");

if ( isset($_POST['setScore'])) {
	$datetime = new DateTime();
	$timezone = new DateTimeZone("Europe/Berlin");
	$datetime->setTimezone($timezone);
	
	$date = $datetime->format("D, d.m.Y G:i:s");
	$score = $_POST['setScore'];
	$tries = $_POST['tries'];
	$word = $_POST['word'];

	$user = $_SESSION['username'];
	$userQuery = mysqli_query($con, "SELECT * FROM users WHERE username='$user'");
	
	$row = mysqli_fetch_array($userQuery);
	$id = $row['id'];
	
	$query = mysqli_query($con, "UPDATE users SET total_score=total_score+'$score', total_plays=total_plays+1 WHERE id='$id'");

	$scoreQuery = mysqli_query($con, "INSERT score VALUES( NULL, '$id', '$score', '$tries', '$word', '$date')");
}

?>
