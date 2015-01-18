
// ALTERNATE


var movement1 = document.getElementById("c1");
movement1.addEventListener("click", function(){alternate(1);});

var movement2 = document.getElementById("c2");
movement2.addEventListener("click", function(){alternate(2);});

var movement3 = document.getElementById("c3");
movement3.addEventListener("click", function(){alternate(3);});

var movement4 = document.getElementById("c4");
movement4.addEventListener("click", function(){alternate(4);});

var movement5 = document.getElementById("c5");
movement5.addEventListener("click", function(){alternate(5);});

var movement6 = document.getElementById("c6");
movement6.addEventListener("click", function(){alternate(6);});

var movement7 = document.getElementById("c7");
movement7.addEventListener("click", function(){alternate(7);});

var movement8 = document.getElementById("c8");
movement8.addEventListener("click", function(){alternate(8);});

var movement9 = document.getElementById("c9");
movement9.addEventListener("click", function(){alternate(9);});

// var reset = document.getElementsByClassName("btn");
// reset.addEventListener("click", delete);

var Items = ["X","O","X","O","X","O","X","O","X"];
var Item = " ";

function alternate(cell){

	if (Items.length === 0){
		setTimeout(function(){alert("Game Over");},500);
		
	} else {

		element = "movement" + cell;
		var movement = window[element];
			
		if (movement.innerHTML === "") {
			Item = Items.shift();	
			movement.innerHTML = Item;
		
			if (Item === "X"){
				event.target.setAttribute("class","colors1");
			}else {
				event.target.setAttribute("class","colors2");
			}
		} //if 

	} //else
			

} //Function alternate

// function delete (){

// 	var allCells = document.getElementsByClassName("cells");
// 	for (var i = 0; i < allCells.length; i++) {
// 		allCells[i].setAttribute("class", "resetclass");
// 	};
// }



// Create the variable movement# by putting together the string and the parametter -->
// Convert the string into a variable -->
// apply the innerHTML to the variable created previously