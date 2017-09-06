var classroom = {
  classnumber: "F103",
  teacher: "Mr. Kam",
  students: 18
  }; //created an object with values//
  
var userInput = prompt("classnumber or students?");
var lowerCase = userInput.toLowerCase(); //sets userInput to all lowercase letters//

if ((lowerCase === "classnumber") || (lowerCase === "students")) {
	window.alert(classroom[lowerCase]);
} //

else { //if input is invalid, the loop runs again//
	for(i = 0; i<3; i++) {
  	var userInput = prompt("classnumber or students?");
		var lowerCase = userInput.toLowerCase();

	if ((lowerCase === "classnumber") || (lowerCase === "students")) {
    	   i = 3;
	   window.alert(classroom[lowerCase]); //loops ends if valid input is entered//
  	}
   }
}

