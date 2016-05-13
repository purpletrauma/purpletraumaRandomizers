/*
Daniel G. McLaughlin
Created on: 05/12/2016
*/
	// Same as the functions from theResults
function getFanart(theIndex) {
	var fanartList = ["My Little Pony", "Steven Universe", "Pokemon", "Adventure Time", "Dropsy", "Cave Story", "Eversion", "Borderlands", "Portal", "Psychonauts", "Transistor", "Kaiba", "Courage The Cowardly Dog", "Jungle Wa Itsumo Hale Nochi Gu", "Gravity Falls", "Game Grumps", "Nightvale", "Rick and Morty"];
	shuffleArray(fanartList);
	if (theIndex == 5) {
		return fanartList[0] + " and " + fanartList[1];
	}
	else {
		return fanartList[0];
	}
}


/*
	// Searches for which result were received before, and finds characters
function getCharacters() {

}


function getMyLittlePony() {

}


function getStevenUniverse() {

}


function getPokemon() {

}


function getAdventureTime() {

}


function getDropsy() {

}


function getCaveStory() {

}


function getEversion() {

}


function getBorderlands() {

}


function getPortal() {

}


function getPsychonauts() {

}


function getTransistor() {

}


function getKaiba() {

}


function getCourageTheCowardlyDog() {

}


function getJungleWaItsumoHaleNochiGuu() {

}


function getGravityFalls() {

}


function getGameGrumps() {

}


function getNightvale() {

}


function getRickandMorty() {

}


function () {

}
*/