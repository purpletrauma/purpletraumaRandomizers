/*
Daniel G. McLaughlin
05/11/2016
*/
function drawingRandomizer() {
	
	var theDiv = document.getElementById("mainBody");

	theDiv.innerHTML = '	<p>' +
'			<form>' + 
'				Fanart?:' + 
'				<select id="fanart">' + 
'					<option>No</option>' + 
'					<option>Yes</option>' + 
'					<option>Cross</option>' + 
'				</select>' + 
'				<br>' + 
'				Unusual theme? (Interpret however you wish.):' + 
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
'		<p id="genreTheme"> </p>' + 
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