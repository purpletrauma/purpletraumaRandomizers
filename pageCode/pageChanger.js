/*
Daniel G. McLaughlin
Created on: 05/11/2016
*/
function openThemeRandomizer() {
	
	var theDiv = document.getElementById("mainBody");

	theDiv.innerHTML = '	<p>' +
'Started as an "art theme randomizer" but became more a general theme randomizer.' + 
'<br>' + 
'			<form>' + 
'				Genre style:' + 
'				<select id="fanart">' + 
'					<option>genre</option>' + 
'					<option>genre x2</option>' + 
'					<option>genre x3</option>' + 
'					<option>unusualGenre</option>' + 
'					<option>Fanart</option>' + 
'					<option>Crossover</option>' + 
'				</select>' + 
'				<br>' + 
'				Extra theme?: <input type="checkbox" id="extraTheme">' + 
'				<br>' +
'				Location Type?:' + 
'				<select id="locationMenu">' + 
'					<option>Natural</option>' + 
'					<option>Small</option>' + 
'					<option>Large</option>' + 
'					<option>Huge</option>' + 
'				</select>' + 
'				<br>' + 
'				Number of expressions:' + 
'				<select id="expressionNumber">' + 
'					<option>1</option>' + 
'					<option>2</option>' + 
'					<option>3</option>' + 
'					<option>4</option>' + 
'				</select>' + 
'				<br>' + 
'				Unusual inspiration?: <input type="checkbox" id="unusualBox">' + 
'				<br>' + 
'				<input type="button" onclick="themeRandomizer()" ' + 
'				value="Randomize!">' + 
'			</form>' + 
'		</p>' + 
'		<br><br>' + 
'		<p id="genreStyle"> </p>' + 
'		<p id="extraThemeDiv"> </p>' +
'		<p id="environmentTheme"> </p>' + 
'		<p id="actionVerb"> </p>' + 
'		<p id="expressions"> </p>' +
'		<p id="unusualTheme"> </p>';
}

function theBall() {
	var theDiv = document.getElementById("mainBody");

	theDiv.innerHTML = '	<p>' +
'				<input type="button" onclick="theMythicBall()" ' + 
'				value="Tell me my fortune!">' + 
'		</p>' + 
'		<br><br>' + 
'		<p id="mythicalAnswers"> </p>';
}

function factSphere() {
	var theDiv = document.getElementById("mainBody");

	theDiv.innerHTML = '	<p>' +
'				<input type="button" onclick="factSphereFacts()" ' + 
'				value="Tell me a fact!">' + 
'		</p>' + 
'		<br><br>' + 
'		<p id="trueStatements"> </p>';
}

/*
function buildingType() {
	
}

function () {
	
}

function () {
	
}

function () {
	
}
*/