<?php 
include("../includes/dbConn.php");

if (isset($_POST["word"])) {
	$guess = $_POST["word"];
  $query = mysqli_query($con, "SELECT * FROM words2 WHERE word='$guess'");

	$row = mysqli_fetch_array($query);

	if ($row) {
		$result = array("isIn" => true);
	} else {
		$result = array("isIn" => false);
	}
	echo json_encode($result);
}
?>
