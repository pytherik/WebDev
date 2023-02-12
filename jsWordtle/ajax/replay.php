<?php
$username = $_SESSION["username"];
$_SESSION["username"] = $username;
header("Location: index.php");

?>

