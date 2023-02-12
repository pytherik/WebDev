<?php

include("../includes/dbConn.php");

$query = mysqli_query($con, "SELECT * FROM users ORDER BY total_score DESC LIMIT 10");

$result = array();
while( $row = mysqli_fetch_array($query)){
	array_push($result, $row);
}

echo json_encode($result);

?>

