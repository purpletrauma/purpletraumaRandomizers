/*
Daniel G. McLaughlin
05/11/2016
*/
function drawingRandomizer() {
	
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
'				Location Type?:' + 
'				<select id="locationMenu">' + 
'					<option>Natural</option>' + 
'					<option>Small</option>' + 
'					<option>Large</option>' + 
'					<option>Huge</option>' + 
'				</select>' + 
'				<br>' +
'				Unusual inspiration?:' + 
'				<select id="unusualMenu">' + 
'					<option>No</option>' + 
'					<option>Yes</option>' + 
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
'				<input type="button" onclick="artThemeRandomizer()" ' + 
'				value="Randomize!">' + 
'			</form>' + 
'		</p>' + 
'		<br><br>' + 
'		<p id="genreStyle"> </p>' + 
'		<p id="environmentTheme"> </p>' + 
'		<p id="actionVerb"> </p>' + 
'		<p id="unusualTheme"> </p>' + 
'		<p id="expressions"> </p>';
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