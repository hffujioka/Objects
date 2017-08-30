var haylee = {
	name:"Haylee",
	age: 16,
	grade:12,
	friends: ["Jacob", "Macy", "Xiaolin"]
};

var jacob = {
	name:"Jacob",
	age: 17,
	grade:12,
	friends: ["Haylee", "Gianni", "Ian"]
};

var macy = {
	name:"Macy",
	age: 16,
	grade:12,
	friends: ["Dayton", "Menjam", "Anjelynn"]
};

var x = [haylee,jacob,macy];

window.alert(x[1].friends[0]);
//created arrays within an object and showed array values on screen//



var bankAccount = {};

bankAccount["name"] = "Haylee";

bankAccount["balance"] = 1000;

var withdrawal = prompt("How much are you withdrawing?");
  
bankAccount["balance"] -= withdrawal;

window.alert(bankAccount.balance);
//manipulated the value of a key in an object with a simple math function//
