var myApp = angular.module('mainPage', ["ngSanitize"]);

myApp.controller('randomizers', function($scope) {
	
	//Function for finding "true facts".

    $scope.theTruth = function() {
	   $scope.aTruth = "";
    	$scope.aTruth = "Fact Sphere says: " + getFacts();
    };
    
    
    // Function for getting a yes/no answer.
    $scope.mythicAnswer = "";
    $scope.mythicSecret = function() {
    	$scope.mythicAnswer = "The 8-ball decrees: " + getTheBall();
    };

	// The dropbox choices for themeRandomizer function.
	// (The function works more easily if they're set here.)
	 $scope.genres = [
      {name:'none', value:0},
      {name:'1genre', value:1},
      {name:'2genres', value:2},
      {name:'3genres', value:3},
      {name:'unusualGenre', value:4}
    ];
	
    $scope.fanthemes = [
      {name:'none', value:0},
      {name:'fanwork', value:1},
      {name:'crossover', value:2}
    ];
	
    $scope.locations = [
      {name:'none', value:0},
      {name:'natural', value:1},
      {name:'small', value:2},
      {name:'large', value:3},
      {name:'huge', value:4},
      {name:'any', value:5}
    ];
    
    $scope.expressions = [
      {name:'0', value:0},
      {name:'1', value:1},
      {name:'2', value:2},
      {name:'3', value:3},
      {name:'4', value:4}
    ];
	
	//The themeRandomizer function.
    $scope.themeRandomizer = function(a, b, c, d, themeBox, actionBox, unusualBox) {
	   $scope.gotGenre = false;
	   $scope.gotTheme = false;
	   $scope.gotFantheme = false;
 	   $scope.gotLocation = false;
 	   $scope.gotAction = false;
 	   $scope.gotExpression = false;
 	   $scope.gotUnusual = false;
 	   
 	   
    	if (a != $scope.genres[0]) {
    		$scope.gotGenre = true;
			$scope.theGenre = getGenre(a.value);
		};
		
		if (b != $scope.fanthemes[0]) {
    		$scope.gotFantheme = true;
			$scope.theFantheme = getFantheme(b.value);
		};
		
		if (themeBox == true) {
    		$scope.gotTheme = true;
			$scope.theTheme = getTheme();
		};

		if (c != $scope.locations[0]) {
    		$scope.gotLocation = true;
			$scope.theLocation = getLocation(c.value);
		};
		
		if (actionBox == true) {
    		$scope.gotAction = true;
			$scope.theAction = getAction();
		};

		if (d != $scope.expressions[0]) {
    		$scope.gotExpression = true;
			$scope.theExpression = getExpression(d.value);
		};

		if (unusualBox == true) {
    		$scope.gotUnusual = true;
			$scope.theUnusual = getUnusual();
		};
		
    };
});
