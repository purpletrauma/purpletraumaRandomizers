/*
Daniel G. McLaughlin
Created on: 05/12/2016
*/
	// Same as the functions from theResults
function getFanart(theIndex) {
	var fanartList = ["My Little Pony", "Steven Universe", "Pokemon", "Adventure Time", "Dropsy", "Cave Story", "Eversion", "Borderlands", "Portal", "Psychonauts", "Transistor", "Kaiba", "Courage The Cowardly Dog", "Lego", "Jungle Wa Itsumo Hale Nochi Gu", "Gravity Falls", "Game Grumps", "Nightvale", "Rick and Morty"];
	shuffleArray(fanartList);
	if (theIndex == 5) {
		return "Crossover of: " + fanartList[0] + " and " + fanartList[1];
	}
	else {
		return "Fanart of: " + fanartList[0];
	}
}


/*
	// Searches for which result were received before, and finds characters
function getCharacters() {

}


function () {

}


function () {

}


function () {

}


function () {

}


function () {

}


function () {

}


function () {

}
*/