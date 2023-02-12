<?php
include("includes/dbConn.php");
include("includes/classes/Constants.php");
include("includes/classes/Account.php");
$account = new Account($con);
include("includes/handlers/registerHandler.php");
include("includes/handlers/loginHandler.php");


?>

<html>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link href="css/register.css" rel="stylesheet" type="text/css">
	<link href="favicon.ico" rel="icon">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
	 <body>
<?php

if (isset($_POST["playNow"])) {
	session_start();
	$query = mysqli_query($con, "SELECT * FROM users ORDER BY RAND() LIMIT 1");
	$row = mysqli_fetch_array($query);
	$player = $row["username"];

	$_SESSION["username"] = $player;

	/* $_SESSION["username"] = "Anonymous"; */
	header("Location: index.php");
} 

if (!isset($_POST["registerButton"])) {
	echo 
	'<script>
	$(document).ready(function() {
	$("#login").show();
	$("#register").hide();
	});
</script>';
} else {
	echo
'<script>
		$(document).ready(function() {
		$("#register").show();
		$("#login").hide();
	});
</script>';
}

function getInputValue($name) {
	if (isset($_POST[$name])) {
		echo $_POST[$name];
	}
}

?>
		<div class="container">
			<div class="row-top">
				<form id="playNow" method="POST">
					<button class="btn" type="submit" name="playNow">anonym spielen</button>
				</form>
			</div>


			<div id="login" class="row">
				<h2>Log dich ein</h2>
				<form method="POST">
					<p>
						<label class="log" for="loginName">Spielername</label>
						<input id="loginName" type="text" name="username" placeholder="Spielername" autofocus>
					</p>
					<p>
						<label class="log" for="loginPassword">Passwort</label>
						<input id="loginPassword" type="password" name="password" placeholder="Passwort">
					</p>
					<button class="btn" type="submit" name="loginButton">LOGIN</button>
					<p class="hasAccount">
						<span id="hideLogin">noch nicht Registriert?</span>
					</p>
				</form>
			</div>


			<div id="register" class="row">
				<h2>Melde dich an</h2>
				<form method="POST">
					<p>
						<label class="log" for="registerName">Spielername</label>
						<span class="errorMessage">
							<?php 
							echo $account->getError(Constants::$check["username"]); 
							echo $account->getError(Constants::$check["uNameExists"]); 
							?>
						</span>
						<input id="registerName" type="text" name="username" 
						 placeholder="Spielername" value="<?php getInputValue('username') ?>" 
						 autofocus>
					</p>
					<p>
						<label class="log" for="vorname">Vorname</label>
						<span class="errorMessage">
							<?php 
							echo $account->getError(Constants::$check["firstName"]); 
							?>
						</span>
						<input id="vorname" type="text" name="vorname" 
						 placeholder="Vorname" value="<?php getInputValue('vorname') ?>" >
					</p>
					<p>
						<label class="log" for="name">Nachname</label>
						<span class="errorMessage">
							<?php 
							echo $account->getError(Constants::$check["lastName"]); 
							?>
						</span>
						<input id="name" type="text" name="name" 
						 placeholder="Nachname"value="<?php getInputValue('name') ?>" >
					</p>
						<label class="log" for="password1">Passwort</label>
						<span class="errorMessage">
							<?php 
							echo $account->getError(Constants::$check["passMatch"]); 
							echo $account->getError(Constants::$check["passUpper"]); 
							echo $account->getError(Constants::$check["passLower"]); 
							echo $account->getError(Constants::$check["passDigit"]); 
							?>
						</span>
						<input id="password1" type="password" name="password1" placeholder="Passwort">
					</p>
					<p>
						<label class="log" for="password2">wiederholen</label>
						<input id="password2" type="password" name="password2" placeholder="Passwort">
					</p>
					<button class="btn" type="submit" name="registerButton">REGISTRIEREN</button>
					<p class="hasAccount">
						<span id="hideRegister">Ich bin schon registriert!</span>
					</p>
				</form>
			</div>
		</div>
	<script src="js/register.js"></script>
	</body>
</html>	
