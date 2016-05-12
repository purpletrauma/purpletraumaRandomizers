/*
Daniel G. McLaughlin
Created on: 05/11/2016
*/
function artThemeRandomizer() {

	// Make sure everything is empty first.
	document.getElementById("genreStyle").innerHTML = "";
	document.getElementById("environmentTheme").innerHTML = "";	
	document.getElementById("actionVerb").innerHTML = "";
	document.getElementById("unusualTheme").innerHTML = "";
	document.getElementById("expressions").innerHTML = "";

	// Return fanart results, if requested, otherwise a genre.
	var settingIndex = document.getElementById("fanart").selectedIndex;
	if (settingIndex < 4) {
		// Genre x2 option in pageChanger code.
		document.getElementById("genreStyle").innerHTML = getGenre(settingIndex);
	}
	else if (settingIndex == 4) {
		// Fanart.
		document.getElementById("genreStyle").innerHTML = getFanart(settingIndex) + "<br>";
	}
	else if (settingIndex == 5) {
		// Crossover
		document.getElementById("genreStyle").innerHTML = getFanart(settingIndex) + "<br>";
	}
	
	// Give environment, based on index choice.
		var environmentIndex = document.getElementById("locationMenu").selectedIndex;
	document.getElementById("environmentTheme").innerHTML = "Location: " +  getEnvironment(environmentIndex);
	
	// Give Verb
	document.getElementById("actionVerb").innerHTML = "Action: " + getVerb();
	
	// Return unusualTheme results, if requested.
	var indexNumber = document.getElementById("unusualMenu").selectedIndex;
	if (indexNumber == 1) {
		document.getElementById("unusualTheme").innerHTML = "--Interpret this as you wish.--" + "<br>" + "Unusual inspiration: " + getMeme() + "<br>";
	}
	else {}

	//Prepare for the loop.
	var i = 0;	
	
	// character expression outputs.
	indexNumber = document.getElementById("expressionNumber").selectedIndex;
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
