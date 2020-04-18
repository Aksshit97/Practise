/*function checkDriverAge() {
	var age = prompt("What is your age?");

	if (Number(age) < 18) {
		alert("Sorry, you are too yound to drive this car. Powering off");
	} else if (Number(age) > 18) {
		alert("Powering On. Enjoy the ride!");
	} else if (Number(age) === 18) {
		alert("Congratulations on your first year of driving. Enjoy the ride!");
	}
}

var myarray = ["Banana", "Apple", "oranges", "Blueberries"];



var database = [
		{ username : "akki",
		  password: "akki"
		},
		{
			username : "mishi",
			password : "mishi"
		},
		{
			username : "bhanu",
			password : "bhanu"
		}
	];

var newsfeed = [
	{
		username : "mansha",
		timeline : "my love is you"
	},
	{
		username : "bhaavesh",
		timeline : "i love weed"

	},
	{
		username : "aksshit",
		timeline : "i love mishu"
	}
];

var promtUser = prompt("what is your username");
var promtPass = prompt("what is your password");

function signIn (user, pass) {

	if(isUserValid(user, pass)) {
		console.log(newsfeed);
	} else {
		alert("sorry the credentials are wrong");
			}
}
function isUserValid (user, pass) {
	for (var i=0; i<database.length; i++){
		if(user===database[i].username && 
			pass===database[i].password) {
			return true;
		}
	}
	return false;
}

signIn(promtUser, promtPass);
*/

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() { 
	body.style.background = 
		"linear-gradient(to right,"
		 + color1.value
		 + ", "
		 + color2.value
		 +  ")";	 
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);