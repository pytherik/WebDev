<?php
include("includes/dbConn.php");
include("includes/header.php");
include("includes/footer.php");

?>

<div id="statistics" class="container statistics-container">
	<div class="text-row head-row">
		<div class="head-item">
			<h1 class="big-header"></h1>
			<span class="entry_date"></span>
		</div>
		<div class="head-item">
			<h2 class="big-header2"></h2>
			<h2 class="plays"></h2>
		</div>
	</div>
	<div class="rank">
		<div class="head-item">
			<h1 id="rank" class="big-header"></h1>
		</div>
	</div>

	<div class="tries-container">

		<div class="tries-bar">
			<div class="perc percentage1">xyz%</div>
			<div class="try">
				<div class="progress try1"></div>
			</div>
			<div class="numTries">
				<div class="num number1"></div>
				<small>1.Vers.</small>
			</div>
		</div>

		<div class="tries-bar">
			<div class="perc percentage2">xyz%</div>
			<div class="try">
				<div class="progress try2"></div>
			</div>
			<div class="numTries">
				<div class="num number2"></div>
				<small>2.Vers.</small>
			</div>
		</div>

		<div class="tries-bar">
			<div class="perc percentage3">xyz%</div>
			<div class="try">
				<div class="progress try3"></div>
			</div>
			<div class="numTries">
				<div class="num number3"></div>
				<small>3.Vers.</small>
			</div>
		</div>

		<div class="tries-bar">
			<div class="perc percentage4">xyz%</div>
			<div class="try">
				<div class="progress try4"></div>
			</div>
			<div class="numTries">
				<div class="num number4"></div>
				<small>4.Vers.</small>
			</div>
		</div>

		<div class="tries-bar">
			<div class="perc percentage5">xyz%</div>
			<div class="try">
				<div class="progress try5"></div>
			</div>
			<div class="numTries">
				<div class="num number5"></div>
				<small>5.Vers.</small>
			</div>
		</div>
		
		<div class="tries-bar">
			<div class="perc percentage6">xyz%</div>
			<div class="try">
				<div class="progress try6"></div>
			</div>
			<div class="numTries">
				<div class="num number6"></div>
				<small>6.Vers.</small>
			</div>
		</div>
	

		<div id="total-tries" class="tries-bar-total">
			<div class="perc percentage7">xyz%</div>
			<div class="try-total">
				<div class="progress try7"></div>
			</div>
			<div>	
				<div class="numTries">
					<button type="submit" id="show-words" class="toggle-wordlist">Gesamt</button>
				</div>
				<small class="number7"></small>
			</div>
		</div>

		<div id="all-words" class="tries-bar-total">
			<button type="submit" id="show-total" class="toggle-wordlist liste">Wortliste</button>
		</div>	
	</div>
</div>
