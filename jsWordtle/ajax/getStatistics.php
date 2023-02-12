<?php 
include("../includes/dbConn.php");

$result = array();

if ( isset($_POST["username"])) {
	$un = $_POST["username"];
} else {
	$un = $_SESSION["username"];
}

/* $query = mysqli_query($con, "SELECT * FROM users  WHERE username='$un'"); */
$query = mysqli_query($con, "SELECT * FROM users JOIN score ON score.user_id = users.id WHERE users.username='$un'");

while ($row = mysqli_fetch_array($query)) {
	array_push($result, $row);
}

echo json_encode($result);

?>
