/*
Daniel G. McLaughlin
Created on: 05/11/2016
*/
function themeRandomizer() {

	// Make sure everything is empty first.
	document.getElementById("genreStyle").innerHTML = "";
	document.getElementById("environmentTheme").innerHTML = "";	
	document.getElementById("actionVerb").innerHTML = "";
	document.getElementById("unusualTheme").innerHTML = "";
	document.getElementById("expressions").innerHTML = "";
	
	
var extraTheme = "";
	// Add extra theme if requested.
	if (document.getElementById("extraTheme").checked) {
		extraTheme = getTheme() + " themed ";
	}	

	// Return fanart results, if requested, otherwise a genre.
	var settingIndex = document.getElementById("fanart").selectedIndex;
	if (settingIndex < 4) {
		// Genre x2 option in pageChanger code.
		document.getElementById("genreStyle").innerHTML = "Genre: " + extraTheme + getGenre(settingIndex) + " Setting" + "<br>";
	}
	else {
		// Fanart or crossover.
		document.getElementById("genreStyle").innerHTML = "Fanart: " + extraTheme + getFanart(settingIndex) + " Setting" + "<br>";
	}
	

		
	
	// Give environment, based on index choice.
		var environmentIndex = document.getElementById("locationMenu").selectedIndex;
	document.getElementById("environmentTheme").innerHTML = "Location: " +  getEnvironment(environmentIndex);
	
	// Give Verb
	document.getElementById("actionVerb").innerHTML = "Action: " + getVerb();
	
	// Return unusualTheme results, if requested.
	if (document.getElementById("unusualBox").checked) {
		document.getElementById("unusualTheme").innerHTML = "--Interpret this as you wish.--" + "<br>" + "Unusual inspiration: " + getMeme() + "<br>";
	}

	//Prepare for the loop.
	var i = 0;	
	
	// character expression outputs.
	var indexNumber = document.getElementById("expressionNumber").selectedIndex;
	theParagraph = document.getElementById("expressions");

	// Get expressions, based on number requested, and in a way that allows duplicates.
	theParagraph.innerHTML = getExpression(indexNumber);

}


function theMythicBall() {
	// Ensure it is empty.
	document.getElementById("mythicalAnswers").innerHTML = "";
	// Give the answer.
	document.getElementById("mythicalAnswers").innerHTML = "The 8-ball decrees: " + getTheBall();
}


function factSphereFacts() {
	// Ensure it is empty.
	document.getElementById("trueStatements").innerHTML = "";
	// Give the answer.
	document.getElementById("trueStatements").innerHTML = "Fact Sphere says: " + getFacts();

}










/**
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 */
function shuffleArray(array) { 
	for (var i = array.length - 1; i > 0; i--) {
		var j = Math.floor(Math.random() * (i + 1));
		var temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
	return array;
}
