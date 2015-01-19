
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
		setTimeout(function(){alert("Game Over");},300);
	} else {
		turnOfPlayerMessage();		
		element = "movement" + cell;
		var movement = window[element];
		if (movement.innerHTML === "") {
			Item = Items.shift();	
			movement.innerHTML = Item;
			changeColor();
			winnerCheck();
		} 
	}
} 


var contItem = 0;
function turnOfPlayerMessage (){
	contItem++
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
	
	counterWins();
}


var xContWins = 0;
var cContWins = 0;
function counterWins (){
	
	if (Item === "X") {
		xContWins++;
		var message = document.getElementById("counter");
		message.innerHTML = "Counter: " + xContWins;
		cContWins = 0;	
	} else {
		cContWins++;
		xContWins = 0;
		var message = document.getElementById("counter");
		message.innerHTML = "Counter: " + cContWins;
		console.log(cContWins);
	}	
	if (cContWins === 3 || xContWins ===3) {
		alert("CONGRATULATIONS!! 3 WINS IN A ROW!");
	};
	Items = [];
}



function changeColor(){
	if (Item === "X"){
		event.target.setAttribute("class","colors1");
	} else {
		event.target.setAttribute("class","colors2");
	}
}

function winnerCheck (){
	if (movement1.innerHTML === movement2.innerHTML && movement1.innerHTML === movement3.innerHTML && movement1.innerHTML !== "") {
		winnerMessage("row",1);
	}else if (movement4.innerHTML === movement5.innerHTML && movement4.innerHTML === movement6.innerHTML && movement4.innerHTML !== ""){
		winnerMessage("row",2);
	} else if (movement7.innerHTML === movement8.innerHTML && movement7.innerHTML === movement9.innerHTML && movement7.innerHTML !== ""){
		winnerMessage("row",3);

	} else if (movement1.innerHTML === movement4.innerHTML && movement1.innerHTML === movement7.innerHTML && movement1.innerHTML !== "") {
		winnerMessage("column",1);
	} else if (movement2.innerHTML === movement5.innerHTML && movement2.innerHTML === movement8.innerHTML && movement2.innerHTML !== "") {
		winnerMessage("column",2);
	} else if (movement3.innerHTML === movement6.innerHTML && movement3.innerHTML === movement9.innerHTML && movement3.innerHTML !== "") {
		winnerMessage("column",3);

	} else if (movement1.innerHTML === movement5.innerHTML && movement1.innerHTML === movement9.innerHTML && movement1.innerHTML !== "") {
		winnerMessage("Diagonal","Left to Right");	
	} else if (movement3.innerHTML === movement5.innerHTML && movement3.innerHTML === movement7.innerHTML && movement3.innerHTML !== "") {
		winnerMessage("Diagonal","Right to Left");	
	} 
}


function resetGame (){
	var allCells = document.getElementsByTagName("td");
	for (var i = 0; i < allCells.length; i++) {
		allCells[i].setAttribute("class","resetclass");
		allCells[i].innerHTML = "";
	};
	Items = ["X","O","X","O","X","O","X","O","X"];
	
}



// Create the variable movement# by putting together the string and the parametter -->
// Convert the string into a variable -->
// apply the innerHTML to the variable created previously