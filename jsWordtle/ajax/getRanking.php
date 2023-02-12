<?php
include("../includes/dbConn.php");


$query = mysqli_query($con, "SELECT ROW_NUMBER() OVER (ORDER BY total_score DESC) row_num, username, total_score from users");

$result = array();

while ($row = mysqli_fetch_array($query)) {
	array_push($result, $row);
}

echo json_encode($result);

?>
