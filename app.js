
// ALTERNATE

var Items = ["X","O","X","O","X","O","X","O","X"];
var Item = " ";


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

function alternate(cell){

	Item = Items.shift();
	element = "movement" + cell;
	var camilo = window[element];
	camilo.innerHTML = Item;
	if (Items.length > 0){
	} else {
	setTimeout(function(){alert("Game Over")},500);
		
	}
}




// Create the variable movement# by putting together the string and the parametter -->
// Convert the string into a variable -->
// apply the innerHTML to the variable created previously