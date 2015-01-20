
var movement1 = document.getElementById("c1");
movement1.addEventListener("click", function(){playTurn(1);});
var movement2 = document.getElementById("c2");
movement2.addEventListener("click", function(){playTurn(2);});
var movement3 = document.getElementById("c3");
movement3.addEventListener("click", function(){playTurn(3);});
var movement4 = document.getElementById("c4");
movement4.addEventListener("click", function(){playTurn(4);});
var movement5 = document.getElementById("c5");
movement5.addEventListener("click", function(){playTurn(5);});
var movement6 = document.getElementById("c6");
movement6.addEventListener("click", function(){playTurn(6);});
var movement7 = document.getElementById("c7");
movement7.addEventListener("click", function(){playTurn(7);});
var movement8 = document.getElementById("c8");
movement8.addEventListener("click", function(){playTurn(8);});
var movement9 = document.getElementById("c9");
movement9.addEventListener("click", function(){playTurn(9);});

var Items = ["X","O","X","O","X","O","X","O","X"];
var Item = " ";

function playTurn(cell){
	if (Items.length === 0){
		setTimeout(function(){alert("Game Over. Click RESET to play again.");},300);
	} else {
				
		element = "movement" + cell;
		var movement = window[element];
		
		if (movement.innerHTML === "") {
			Item = Items.shift();	
			movement.innerHTML = Item;
			changeColor();
			turnOfPlayerMessage();
			// checkWinner();
			checkWinner2();
		} 
	}
} 

var contItem = 0;
function turnOfPlayerMessage (){
	contItem++;
			var message = document.getElementById("messageText");
		if (contItem % 2 === 0) {
			message.innerHTML = "Turn of player \"X\"";
		} else {
			message.innerHTML = "Turn of player \"O\"";
		}
}

function winnerMessage(line, number){
	var message = document.getElementById("winner");
	alert(message.innerHTML = "The winner is " + "\""+ Item +"\" --> " + line + ": " + number);
	counterWinner();
}

var xContWins = 0;
var cContWins = 0;
function counterWinner (){
	
	if (Item === "X") {
		xContWins++;
		var message = document.getElementById("counter");
		message.innerHTML = "Counter: " + xContWins;
		cContWins = 0;	
	} else {
		cContWins++;
		xContWins = 0;
		var message2 = document.getElementById("counter");
		message2.innerHTML = "Counter: " + cContWins;
		
	}	
	if (cContWins === 3 || xContWins ===3) {
		alert("CONGRATULATIONS!! 3 WINS IN A ROW!");
	}
	Items = [];
}

function changeColor(){
	if (Item === "X"){
		event.target.setAttribute("class","colors1");
	} else {
		event.target.setAttribute("class","colors2");
	}
}

function checkWinner2 () {
	var contTieGame = 0;
	// checks for winner in a column
	for (var i = 1; i < 4; i++) {
		
		col1 = "movement" + i;
		col4 = "movement" + (i + 3);
		col7 = "movement" + (i + 6);
		var cPilda1 = window[col1];
		var cPilda4 = window[col4];	
		var cPilda7 = window[col7];	
		
		if (cPilda1.innerHTML === cPilda4.innerHTML && cPilda1.innerHTML === cPilda7.innerHTML && cPilda1.innerHTML !== "") {
			// lineWinner(i); 
			contTieGame++;
			winnerMessage("column",i); 
			
			}
	} 
	// Checks for winner in a row
	var cont = 1;
	for (var a = 1; a < 8; a = a + 3) {
		row1 = "movement" + a;
		row2 = "movement" + (a + 1);
		row3 = "movement" + (a + 2);
		var rPilda1 = window[row1];
		var rPilda2 = window[row2];
		var rPilda3 = window[row3];
	
		
		if (rPilda1.innerHTML === rPilda2.innerHTML && rPilda1.innerHTML === rPilda3.innerHTML && rPilda1.innerHTML !== "") {
			contTieGame++;
			winnerMessage("row",cont);
			 
		}else {
			// It counts winner row: It's neccesary because the loop adds 3 to a, so the next count only adds 1.
			cont++;
			contTieGame++;
		}

	}
	// Checks for winner in a diagonal left to right
	for (var b = 1; b < 2; b++) {
		diagl1 = "movement" + b;
		diagl5 = "movement" + (b + 4);
		diagl9 = "movement" + (b + 8);
		var dlPilda1 = window[diagl1];
		var dlPilda5 = window[diagl5];
		var dlPilda9 = window[diagl9];

		if (dlPilda1.innerHTML === dlPilda9.innerHTML && dlPilda1.innerHTML === dlPilda5.innerHTML && dlPilda1.innerHTML !== "") {
			contTieGame++;
			winnerMessage("diagonal Left to Right",""); 
			
		}
	}	

	// Checks for winner in a diagonal rigth to left
	for (var c = 3; c < 4; c++) {
		diagr3 = "movement" + c;
		diagr5 = "movement" + (c + 2);
		diagr7 = "movement" + (c + 4);
		var drPilda3 = window[diagr3];
		var drPilda5 = window[diagr5];
		var drPilda7 = window[diagr7];

		if (drPilda3.innerHTML === drPilda5.innerHTML && drPilda3.innerHTML === drPilda7.innerHTML && drPilda3.innerHTML !== "") {
			contTieGame++;
			winnerMessage("diagonal Right to Left",""); 
			
		}
	}

	if (Items.length === 0 && contTieGame === 0) {
		alert("Tie Game, Click RESET to play again. ");
	}
}

function resetGame (){
	 
	var allCells = document.getElementsByTagName("td");
	for (var i = 0; i < allCells.length; i++) {
		allCells[i].setAttribute("class","resetclass");
		allCells[i].innerHTML = "";
		// Next: Resets Turn of player
		contItem = 0;
		var messageReset = document.getElementById("messageText");
		messageReset.innerHTML = "Turn of player \"X\"";
	}
	Items = ["X","O","X","O","X","O","X","O","X"];
}


// Draws a line on winner board
// function lineWinner(i){
// 	var lineWin = document.getElementById("line");
	
// 	if (i === 1) {
// 		lineWin.setAttribute("id","lineColOne");		 		
// 	} else if (i === 2) {
// 		lineWin.setAttribute("id","lineColTwo");	
				
// 	}
// }


// function checkWinner (){
// 	if (movement1.innerHTML === movement2.innerHTML && movement1.innerHTML === movement3.innerHTML && movement1.innerHTML !== "") {
// 		winnerMessage("row",1);
// 	}else if (movement4.innerHTML === movement5.innerHTML && movement4.innerHTML === movement6.innerHTML && movement4.innerHTML !== ""){
// 		winnerMessage("row",2);
// 	} else if (movement7.innerHTML === movement8.innerHTML && movement7.innerHTML === movement9.innerHTML && movement7.innerHTML !== ""){
// 		winnerMessage("row",3);
// 	} else if (movement1.innerHTML === movement4.innerHTML && movement1.innerHTML === movement7.innerHTML && movement1.innerHTML !== "") {
// 		winnerMessage("column",1);
// 	} else if (movement2.innerHTML === movement5.innerHTML && movement2.innerHTML === movement8.innerHTML && movement2.innerHTML !== "") {
// 		winnerMessage("column",2);
// 	} else if (movement3.innerHTML === movement6.innerHTML && movement3.innerHTML === movement9.innerHTML && movement3.innerHTML !== "") {
// 		winnerMessage("column",3);
// 	} else if (movement1.innerHTML === movement5.innerHTML && movement1.innerHTML === movement9.innerHTML && movement1.innerHTML !== "") {
// 		winnerMessage("Diagonal","Left to Right");	
// 	} else if (movement3.innerHTML === movement5.innerHTML && movement3.innerHTML === movement7.innerHTML && movement3.innerHTML !== "") {
// 		winnerMessage("Diagonal","Right to Left");	
// 	} 
// }

