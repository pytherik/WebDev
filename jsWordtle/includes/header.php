<?php
include("includes/maunual.php");
?>

<html lang="de">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link href="css/style.css" rel="stylesheet" type="text/css">
	<link href="images/icons/favicon/favicon.ico" rel="icon">
	<title>jsWordtle</title>
</head>
<body>
	<nav class="navbar">
		<div class="nav-items">
			<a href="statistics.php" ><img class="nav-icon-bg" src="images/icons/stats.png" alt=""></a>
		</div>
		<div class="nav-items">
			<ul class="link">
				<li class="score"><a href="highscore.php"><img class="nav-icon" src="images/icons/score.png" alt=""></a></li>
				<li><a href="index.php"><img class="nav-icon" src="images/icons/refresh.png" alt=""></a></li>
				<li id="manual"><img class="nav-icon" src="images/icons/help.png" alt=""></li>
			</ul>
		</div>
		<div class="nav-items logout">
			<img class="nav-icon-bg" src="images/icons/logout.png" alt="">
		</div>
	</nav>

