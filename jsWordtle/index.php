<?php
include("includes/dbConn.php");
include("includes/header.php");
include("includes/footer.php");
include("includes/success.php");
if (!isset($_SESSION["username"])) {
	header("Location: register.php");
}

?>
	<div class="container">
		<h3 class="player"><?= $_SESSION['username'] ?></h3>
		<div class="row">
			<div class="letter-box lb1 letter0"></div>
			<div class="letter-box lb1 letter1"></div>
			<div class="letter-box lb1 letter2"></div>
			<div class="letter-box lb1 letter3"></div>
			<div class="letter-box lb1 letter4"></div>
			<div class="letter-box lb1 letter5"></div>
			<div class="letter-box lb1 letter6"></div>
			<div class="letter-box lb1 letter7"></div>
		</div>
		<div class="row">
			<div class="letter-box lb2 letter0"></div>
			<div class="letter-box lb2 letter1"></div>
			<div class="letter-box lb2 letter2"></div>
			<div class="letter-box lb2 letter3"></div>
			<div class="letter-box lb2 letter4"></div>
			<div class="letter-box lb2 letter5"></div>
			<div class="letter-box lb2 letter6"></div>
			<div class="letter-box lb2 letter7"></div>
		</div>
		<div class="row">
			<div class="letter-box lb3 letter0"></div>
			<div class="letter-box lb3 letter1"></div>
			<div class="letter-box lb3 letter2"></div>
			<div class="letter-box lb3 letter3"></div>
			<div class="letter-box lb3 letter4"></div>
			<div class="letter-box lb3 letter5"></div>
			<div class="letter-box lb3 letter6"></div>
			<div class="letter-box lb3 letter7"></div>
		</div>
		<div class="row">
			<div class="letter-box lb4 letter0"></div>
			<div class="letter-box lb4 letter1"></div>
			<div class="letter-box lb4 letter2"></div>
			<div class="letter-box lb4 letter3"></div>
			<div class="letter-box lb4 letter4"></div>
			<div class="letter-box lb4 letter5"></div>
			<div class="letter-box lb4 letter6"></div>
			<div class="letter-box lb4 letter7"></div>
		</div>
		<div class="row">
			<div class="letter-box lb5 letter0"></div>
			<div class="letter-box lb5 letter1"></div>
			<div class="letter-box lb5 letter2"></div>
			<div class="letter-box lb5 letter3"></div>
			<div class="letter-box lb5 letter4"></div>
			<div class="letter-box lb5 letter5"></div>
			<div class="letter-box lb5 letter6"></div>
			<div class="letter-box lb5 letter7"></div>
		</div>
		<div class="row">
			<div class="letter-box lb6 letter0"></div>
			<div class="letter-box lb6 letter1"></div>
			<div class="letter-box lb6 letter2"></div>
			<div class="letter-box lb6 letter3"></div>
			<div class="letter-box lb6 letter4"></div>
			<div class="letter-box lb6 letter5"></div>
			<div class="letter-box lb6 letter6"></div>
			<div class="letter-box lb6 letter7"></div>
		</div>
		<div class="keyboard-container">
			<div class="row">
				<div class="letter-box abc q">Q</div>
				<div class="letter-box abc w">W</div>
				<div class="letter-box abc e">E</div>
				<div class="letter-box abc r">R</div>
				<div class="letter-box abc t">T</div>
				<div class="letter-box abc z">Z</div>
				<div class="letter-box abc u">U</div>
				<div class="letter-box abc i">I</div>
				<div class="letter-box abc o">O</div>
				<div class="letter-box abc p">P</div>
				<div class="letter-box abc ü">Ü</div>
			</div>
			<div class="row">
				<div class="letter-box abc a">A</div>
				<div class="letter-box abc s">S</div>
				<div class="letter-box abc d">D</div>
				<div class="letter-box abc f">F</div>
				<div class="letter-box abc g">G</div>
				<div class="letter-box abc h">H</div>
				<div class="letter-box abc j">J</div>
				<div class="letter-box abc k">K</div>
				<div class="letter-box abc l">L</div>
				<div class="letter-box abc ö">Ö</div>
				<div class="letter-box abc ä">Ä</div>
			</div>
			<div class="row">
				<div class="letter-box abc back"><img src="images/icons/back1.png" alt=""></div>
				<div class="letter-box abc y">Y</div>
				<div class="letter-box abc x">X</div>
				<div class="letter-box abc c">C</div>
				<div class="letter-box abc v">V</div>
				<div class="letter-box abc b">B</div>
				<div class="letter-box abc n">N</div>
				<div class="letter-box abc m">M</div>
				<div class="letter-box abc enter"><img src="images/icons/enter.png" alt=""></div>
			</div>
		</div>
	</div>
