
function one(dice = 0) {
    document.querySelectorAll(".seven")[dice].classList.add("show");
}
function two(dice = 0) {
    document.querySelectorAll(".one")[dice].classList.add("show");
    document.querySelectorAll(".six")[dice].classList.add("show");
}
function four(dice = 0) {
    document.querySelectorAll(".one")[dice].classList.add("show");
    document.querySelectorAll(".two")[dice].classList.add("show");
    document.querySelectorAll(".five")[dice].classList.add("show");
    document.querySelectorAll(".six")[dice].classList.add("show");    
}
function six(dice = 0) {
    document.querySelectorAll(".one")[dice].classList.add("show");
    document.querySelectorAll(".two")[dice].classList.add("show");
    document.querySelectorAll(".three")[dice].classList.add("show");
    document.querySelectorAll(".four")[dice].classList.add("show");
    document.querySelectorAll(".five")[dice].classList.add("show");
    document.querySelectorAll(".six")[dice].classList.add("show");    
}
function show(iacta, dice=0) {
    if (iacta == 1){
        one(dice);
    } else if (iacta == 2) {
        two(dice);
    } else if (iacta == 3) {
        one(dice);
        two(dice);
    } else if (iacta == 4) {
        four(dice);
    } else if (iacta == 5) {
        four(dice);
        one(dice);
    } else if (iacta == 6) {
        six(dice);
    }
}
function main() {
		let diceA = Math.ceil(Math.random() * 6)
		let diceB = Math.ceil(Math.random() * 6)

		show(diceA);
		show(diceB, 1);
		
		if (diceA > diceB) {
			document.querySelectorAll(".success")[0].textContent="win";
			document.querySelectorAll(".success")[1].textContent="lose";
			document.querySelectorAll(".success")[1].classList.add("lose");
		} else if (diceA < diceB) {
			document.querySelectorAll(".success")[1].textContent="win";
			document.querySelectorAll(".success")[0].textContent="lose";
			document.querySelectorAll(".success")[0].classList.add("lose");
		} else if (diceA == diceB) {
			document.querySelectorAll(".success")[0].textContent="deuce";
			document.querySelectorAll(".success")[1].textContent="deuce";
		}
}
