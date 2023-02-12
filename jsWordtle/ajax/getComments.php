<?php
include("../includes/dbConn.php");

$query = mysqli_query($con, "SELECT * FROM comments ORDER BY RAND() LIMIT 2");

$result = array();

while($row = mysqli_fetch_array($query)) {
	array_push($result, $row);
}

echo json_encode($result);

?>
