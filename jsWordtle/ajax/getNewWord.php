<?php 
include("../includes/dbConn.php");

$query = mysqli_query($con, "SELECT * FROM words2 ORDER BY RAND() LIMIT 1");
$row = mysqli_fetch_array($query);
echo json_encode($row);

?>

