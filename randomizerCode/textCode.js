/*
Daniel G. McLaughlin
05/11/2016
*/
function artThemeRandomizer() {

	// Make sure everything is empty first.
	document.getElementById("genreTheme").innerHTML = "";
	document.getElementById("environmentTheme").innerHTML = "";	
	document.getElementById("actionVerb").innerHTML = "";
	document.getElementById("unusualTheme").innerHTML = "";
	document.getElementById("expressions").innerHTML = "";

	// Return fanart results, if requested, otherwise a genre.
	var indexNumber = document.getElementById("fanart").selectedIndex;
	if (indexNumber == 1) {
		document.getElementById("genreTheme").innerHTML = "Fanart of: " + getFanart() + "<br>";
	}
	else if (indexNumber == 2) {
		document.getElementById("genreTheme").innerHTML = "Fanart of: " + getFanart() + " crossed with " + getFanart() + "<br>";
	}
	else {
		// Give genre if no fanart.
		document.getElementById("genreTheme").innerHTML = "Genre: " + getGenre();	
	}
	
	// Give environment.
	document.getElementById("environmentTheme").innerHTML = "Location: " +  getEnvironment();
	
	// Give Verb
	document.getElementById("actionVerb").innerHTML = "Action: " + getVerb();
	
	// Return unusualTheme results, if requested.
	var indexNumber = document.getElementById("unusualMenu").selectedIndex;
	if (indexNumber == 1) {
		document.getElementById("unusualTheme").innerHTML = "Unusual theme: " + getMeme() + "<br>";
	}
	else {}

	//Prepare for the loop.
	var i = 0;	
	
	// character expression outputs.
	indexNumber = +document.getElementById("expressionNumber").value;
	theParagraph = document.getElementById("expressions");
	
	//Make sure it's empty from previous clicks.
	theParagraph.innerHTML = "";

	while (i < indexNumber) {
		theParagraph.innerHTML += "Expression #" + (i+1) + ": " + getExpression() + "<br>";
		i++;
	}
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
