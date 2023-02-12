var text = "";
var j = 1;

$.post("ajax/getNewWord.php", function(data) {
	result = JSON.parse(data);
	const word = result["word"];


	var limit = word.length;
	checkLimit(limit);

	function checkLimit(limit) {
		if (limit < 8) {
			for (let i = 0; i < (8 - limit); i++) {
				$(".letter" + (7 - i)).css("display", "none");
			};
		};
	};

	$(document).on("keydown", function(e) {
		insertLetter(e.key);
	});

	$(".abc").on("click", function() {
		if (this.innerHTML.slice(23,28) === "enter") {
			let key = "Enter";
			insertLetter(key)
		} else if (this.innerHTML.slice(23, 27) === "back") { 
			let key = "Backspace"
			insertLetter(key)
		} else {
			let key = this.innerHTML;
			insertLetter(key)
		}
	});

	function insertLetter(key) {
		if (text.length < limit && (key).match(/^[a-zA-ZäöüÄÖÜ]$/)) {
			var i = text.length % limit;
			text += key;
			$(".lb"+j+".letter" + i).text(key.toUpperCase());
		} else if (key === "Backspace" && text.length > 0) {
			text = text.slice(0, -1);
			i = (text.length) % limit;
			$(".lb" + j + ".letter" + i).text("");
		} else if (text.length === limit && key === "Enter") {
			isInWordlist(text);
			text = ""
			i = 0;
			j++
		}
	}
		
	function isInWordlist(text) {
		text = text[0].toUpperCase() + text.slice(1).toLowerCase();
		if (text != word) {
			$.post("ajax/isInWordlist.php", {word: text}, 
				function(data) {
					var result = JSON.parse(data);
					if (result["isIn"]) {
						if ( j === 7) {
							lastRound(text);
						}	else {
							showSuccess(text);
							}
					} else {
						for (let k = 0; k < limit; k++) {
							$(".lb" + (j-1) + ".letter" + k).text("")
								.fadeOut(400).fadeIn(400);
						}
						j--;
						console.log("is nicht im Wörterbuch!");
					};
				});
		} else {
			for (let i = 0; i < word.length; i++) { 
				$(".lb" + j + ".letter" + i).slideUp(250)
					.addClass("checked exact").slideDown(250);
			}
			newScore = word.length * (7-j);
			score(newScore, j);
		};
	};

	function time(ms) {
		return new Promise((resolve, reject) => {
			setTimeout(resolve, ms);
		});
	}

	async function showSuccess(guess) {
		let guessL = guess.toLowerCase().split("");
		let guessLength = guess.length;
		let green = [];
		let yellow =[];
			for (let i = 0; i < guessLength; i++) {
				let regExLetter = new RegExp(guess[i], 'ig');
				if (guessL[i] === word[i].toLowerCase()) {
					$(".lb" + (j-1) + ".letter" + i).slideUp(300)
						.addClass("checked exact").slideDown(300);
					$("." + guessL[i]).css("backgroundColor", "#6d8874");
					green.push(guessL[i]);
					await time(550);
					continue;
				} else if (word.match(regExLetter)) {
						let gLength = countOccurency(guessL, guessL[i]);
						let wLength = word.match(regExLetter).length;

						if ( gLength < wLength || gLength === wLength ) {	
							$(".lb" + (j-1) + ".letter" + i).slideUp(300)
								.addClass("checked okay").slideDown(300);
							if (!green.includes(guessL[i])) {
								$("." + guessL[i]).css("backgroundColor", "#d7a86e");
								yellow.push(guessL[i]);
							}
							await time(550);
							continue;
						} else {
								$(".lb" + (j-1) + ".letter" + i).slideUp(300)
								.addClass("checked nope").slideDown(300);
							if (!green.includes(guessL[i]) && !yellow.includes(guessL[i])) {
									$("." + guessL[i]).css("backgroundColor", "#444");
							}
							guessL[i] = "-";	
						}
				} else {
						$(".lb" + (j-1) + ".letter" + i).slideUp(300)
						.addClass("checked nope").slideDown(300);
						$("." + guessL[i]).css("backgroundColor", "#444");
				};
				await time(550);
			};
	};

	function lastRound(guess) {
		let guessL = guess.toLowerCase().split("");
		let guessLength = guess.length;

		for (let i = 0; i < guessLength; i++) {
			if (guessL[i] === word[i].toLowerCase()) {
				$(".lb" + (j-1) + ".letter" + i).addClass("exact");
				$("." + guessL[i]).css("backgroundColor", "#6d8874");
				continue;
			} else {
				$(".lb" + (j-1) + ".letter" + i).text(word[i].toUpperCase());
				$(".lb" + (j-1) + ".letter" + i).addClass("lose");
			}
		};
		score(-guessLength, j);
	};

	function countOccurency(word, letter) {
		let num = 0;
		for (item in word) {
			if (word[item] === letter) {
				num++;
			}
		}
		return num;
	};

//              G A M E   O V E R

	function score(points, tries) {
		if ( points > 0 ) {
			$(".success-container.win").slideDown(800);
			$.post("ajax/getComments.php", function(data) {
				comments = JSON.parse(data);
				comment = comments[0][3];
				console.log(comments);
				$(".keyboard-container").css("visibility", "hidden");
				$("#win").text(comment);
				$("#plus").text(`${points} Punkte für dich!`);
			});
		} else {
			$(".success-container.lose").slideDown(800);
			$.post("ajax/getComments.php", function(data) {
				comments = JSON.parse(data);
				comment = comments[0][2];
				console.log(comments);
				$(".keyboard-container").css("visibility", "hidden");
				$("#lose").text(comment);
				$("#minus").text(`Dir werden ${Math.abs(points)} Punkte abgezogen!`);
			});
		}
		$.post("ajax/setNewScore.php", {
			setScore: points, 
			tries: tries, 
			word: word
		});
		$(".success-container").click(() => {location.href = "index.php";});
		$(document).on("keydown", function() {
			location.href = "index.php";
		});
	}
});



//         M A N U A L   S H O W   H I D E



$("#manual").click( function() {
	console.log("click");

	if ($(".manual-container").css("display") === "none") {
		$(".manual-container").slideDown();
		// $(".manual-container").css("display","flex");
		$(".manual-container").click(() => {
			$(".manual-container").css("display","none");
		});
	} else {
		$(".manual-container").css("display","none");
	}
	console.log($(".manual-container").css("display"));
});




//                 S C O R I N G



$("#scoring").onload = getScore();

	
function getScore() {
	$.post("ajax/highscore.php", function(data) {
		result = JSON.parse(data);
		for (let i = 0; i < result.length; i++) {

			$(".rank" + (i + 1)).append("<div class='l'>" + 
				(i + 1) + ".</div><div class='m'>" + result[i].username + 
				"</div><div class='r'>" + result[i].total_score + 
				" <small>(" + result[i].total_plays + ")</small></div>");
		}
	});
};



//               S T A T I S T I C S


$("#statistics").onload = getStatistics();

function getStatistics() {
	$.post("ajax/getStatistics.php", function(data) {
		result = JSON.parse(data);
		
		const allTries = [
			{tries: []}, 
			{tries: []},
			{tries: []},
			{tries: []},
			{tries: []},
			{tries: []},
			{tries: []}
		];

		var maxTries = 0;
		var vers;

		result.forEach((key, index) => {
			allTries[key.tries -1].tries.push(key.word);
			if (allTries[key.tries -1].tries.length > maxTries) {
				maxTries = allTries[key.tries -1].tries.length;
			}
			if (result[index].tries == 7) {
				vers = "x";
			} else {
				vers = result[index].tries;
			}
			$("#show-total").after("<div class='wordlist'><div>" + 
				result[index].word + "</div><div class='smaller'>" + 
				result[index].date.slice(5,15) + 
				" (" + vers + ")</div></div>");
		});

		var username = result[0].username;
		let total = result[0].total_plays;
		let score = result[0].total_score;
		let lose = allTries[6].tries.length;
		let win = total - lose;
		let actualTries = result[result.length -1].tries;
		var factor = total / maxTries;
	
		$(".big-header").text(result[0].username);
		$(".entry_date").text(result[0].date.slice(5,15));

		$(".big-header2").text(score + " Punkte");
		$(".plays").text(total + " Spiele");

		$(".try" + actualTries).css("backgroundColor", "#5FD068");

		allTries.forEach((key, index) => {
			if (index === 6) {
				let perc7 = (lose * 100 / total).toFixed(1);
				$(".try7").animate({height: 100-perc7+"%"}, 1000);
				$(".percentage7").text( 100- perc7+"%");
				$(".number7").text(total - lose + " Gewonnen");
			} else {

				let perc = (key.tries.length * 100 / total).toFixed(1);
				let i =  (index +1).toString(); 
				$(".try" + i).animate({height: factor * perc + "%"}, 1000);
				$(".number" + i).text(perc + "%");
				$(".percentage" + i).text(key.tries.length);
			}
		});
		getRanking(username);
	});

	function getRanking(name) {
		$.post("ajax/getRanking.php", function(data) {
			rankResult = JSON.parse(data);
			for (let i = 0; i < rankResult.length; i++) {
				let un = rankResult[i].username;
				if (un === name) {
					$("#rank").text(rankResult[i].row_num + ". Platz");
				}
			}
		});
	
		$("#show-words").mouseover(function() {
			$("#show-words").text("Liste");
		});

		$("#show-words").mouseout(function() {
			$("#show-words").text("Gesamt");
		});

		$("#show-total").mouseover(function() {
			$("#show-total").text("Total");
		});

		$("#show-total").mouseout(function() {
			$("#show-total").text("Wortliste");
		});

		$("#total-tries").show();
		$("#all-words").hide();

		$("#show-words").click(function() {
			$("#total-tries").hide();
			$("#all-words").show();
		});

		$("#show-total").click(function() {
			$("#total-tries").show();
			$("#all-words").hide();
		});
	};
};

$(".logout").click(function() {
	$.post("ajax/logout.php", function() {
		location.href = "register.php";
	});
});

