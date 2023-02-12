<?php 
do {
$joke = file_get_contents("https://api.chucknorris.io/jokes/random");
$result = json_encode($joke);
$jsonJoke = json_decode($joke);
} while (strlen($jsonJoke->value) > 60);
?>

<html lang="de">
<head>
	<meta charset="UTF-8">
	<title></title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link href="css/style.css" rel="stylesheet" type="text/css">
</head>
<body>
<div class="container">
<div class="row0"></div>
<div class="row1"></div>
<div class="row2"></div>
<div class="row3"></div>
</div>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
	<script>
		let result = JSON.parse(<?php echo $result; ?>);
		let joke = result.value;
		joke = joke.split("");
		let i = 0, j = 0;
		joke.forEach((val, index) => {
		if (i > 15) {
			i = 0;
			j++;
		}
		$(".row"+j).append(`<span class='letter'>${val}<span>`);
		i++;
		});

	</script>
</body>
</html>
