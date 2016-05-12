/*
Daniel G. McLaughlin
05/11/2016
*/



function getVerb () {
	// List of action verbs.
	var actionVerbList = ["jumping", "eating", "talking", "dancing", "shouting", "cooking", "thinking", "wanting", "wondering", "delivering", "competing", "writing", "giving", "judging", "inspecting", "showing", "reporting", "performing", "serving", "recording", "organizing", "repairing", "searching", "studying", "supporting", "solving", "tutoring", "succeeding", "failing"];
	shuffleArray(actionVerbList);
	return actionVerbList[0];
}



function getGenre(theSetting) {
	// List of genres to run with.
	var genreList = ["Sci-Fi", "Fantasy", "Action", "Western", "Nonsense", "Romance", "Tragedy", "Drama", "Comedy", "Mystery", "Crime", "Horror", "Paranormal", "Superhero"];
	shuffleArray(genreList);
	
	// Less standard genres.
	var genreListExtreme = ["Lovecraftian", "Steampunk", "Splatterpunk", "Cyberpunk", "David Lynch"];
	shuffleArray(genreListExtreme);
	
	
	// Sort based on index, which is received if genre options chosen.
	if (theSetting == 1) {
		// Return dual genre.
		return "Mix of: " + genreList[0] + " and " + genreList[1];
	}
	else if(theSetting == 2) {
		// Three genres.
		return "Mix of: " + genreList[0] + " and " + genreList[1] + " and " + genreList[2];
	}
	else if(theSetting == 3) {
		// Unusual genre.
		return "Genre: " + genreListExtreme[0];
	}
	else {
		// Default to one genre.
		return "Genre: " + genreList[0];
	}
}



function getMeme () {
	// List of unusual style themes to go with.
	var memeRulesList = ["Killing grandpa", "I'M GONNA DUMP!", "Dickbutt.", "I'M LIKE A GIGOLO, READY TO BURST!", "You're making me angry. And when I get angry, I get horny. And I will be forced to have sex with you.", "My tits are broiling right now.", "You pizza shit!", "If you see something, say nothing, and drink to forget.", "If I had to do it all over again, I'd do it all over you.", "Exactly, exictly, and exoctly, in that order.", "They're fast asleep. Hand me the skull mallet; hold the teeth bucket in front of his cake hole.", "Just as I anticipated; I don't know what it is.", "My house burned down and I lost everything, again. It feels better every time.", "Unrequited love is a waste of time. Just walk it off. There. I said it.","I would have guessed that Dracula was the more realistic book, but we have to protect our families. If it sparkles, we can kill it.","For my birthday I bought myself a plan ticket to a whole new life, while someone else's friends crowded in the dark, waiting for the surprise.","The lake creature knows we are hunting her, but she also knows we are the first in years.","You can still back out before anyone gets hurt, but I did pack these lunches for bank robbers only.","Man, if I had tits I'd never leave the house, looking in a mirror all day, wishing I were prettier.","I used my one wish to make myself smarter. Smart enough to wish I was more kind.","My mom's buried out in these woods. She wanted her ashes scattered at sea, but it's like she always said 'No.'","What kind of person talks trash during a chess game? Someone looking to get shot.","I was sure the apocalypse would be awesome. But babies the size of cities? That is unsettling.","Maybe next year is the year. Maybe last year.","I wonder if the ugly duckling felt stupid when he realized being pretty didn't magically solve all his problems.","All my dreams came true. I just didn't think them through.","We broke every mirror trying to climb into a world where the car got hit by them.","I think most people find a lot of different things sexy. Why don't you go bug them?","Well, you're not wrong."];
	shuffleArray(memeRulesList);
	return memeRulesList[0];
}



function getExpression(expressionNumber) {
	// List of expressions to run with.
	var expressionList = ["Happy", "Sad", "Pleased", "Angry", "Confused", "Tired", "Shocked/Surprised", "Irritated", "WTF?!", "Triumph", "Fear", "Bereft", "Flirty", "Serious", "Silly", "hollow/blank", "incredulous", "confident", "fierce", "despondent/pouty", "drunk", "rage", "sarcastic", "disgusted", "ill/nauseous"];
	shuffleArray(expressionList);
	var expressionAnswer = "";
	for (var i = 0; i <= expressionNumber; i++) {
		expressionAnswer = expressionAnswer + "Expression #" + (i + 1) + ": " + expressionList[0] + "<br>";
		shuffleArray(expressionList);
	}
	return expressionAnswer;

}



function getCreatures(isWeird) {
	var speciesList = ["Fairy", "Drider", "Naga", "Harpy", "Mermaids", "Dullahan", "Insect", "Scylia", "Ghost", "Cat"];
	shuffleArray(speciesList);
	
	var speciesSociety = ["Militant", "Casual", "Seductive"];
	shuffleArray(speciesSociety);
	
	var speciesFeature = ["Zombie", "Robot", "Pirate", "Ninja", "Pirateninja", "Cyborg"];
	shuffleArray(speciesFeature);	
	
	
	// If it just wants a regular species type.
	if (isWeird = 0) {
		return speciesList[0] + " people.";
	}
	else if (isWeird = 1) {
		// If they have a specific societal tint.

		return speciesSociety[0] + " " + speciesList[0] + " people.";
	}
	else if (isWeird = 2) {
		// Some nonsense extra.
		return speciesFeature[0] + " " + speciesList[0] + " people.";
	}
	else {
		//Both tint and extra.
		return speciesSociety[0] + " " + speciesFeature[0] + " " + speciesList[0] + " people.";
	}
}



function getTheBall() {
	var theMythicAnswer = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it", "Yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don\'t count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"];
	shuffleArray(theMythicAnswer);
	return theMythicAnswer[0];
}



function getFacts() {
	var theTruth = ["The fact sphere is a good sphere with many friends.", 
"The Fact Sphere is not defective; its facts are wholly accurate and very interesting.", 
"In Victorian England a commoner was not allowed to look directly at the queen due to a belief at the time that the poor had the ability to steal thoughts. Science now believes that less than 4% of poor people are able to do this.", 
"In 1862, Abraham Lincoln signed the Emancipation Proclamation, freeing the slaves. Like everything he did, Lincoln freed the slaves while sleep walking, and later had no memory of the event.", 
"In 1948 at the request of a dying boy, baseball legend Babe Ruth ate 75 hot dogs, then died of hot dog poisoning.", 
"The automobile break was not invented until 1895. Before this, someone had to remain in the car at all times driving in circles until passengers returned from their errands.", 
"Edmond Hillary, the first person to climb Mt. Everest, did so accidentally while chasing a bird.", 
"Contrary to popular belief, Eskimos do not have over one hundred words for snow. They do, however, have over two hundred thirty four words for fudge.", 
"William Shakespeare did not exist; his plays were masterminded in 1589 by Francis Bacon who used a Ouija board to enslave play writing ghosts.", 
"Before the invention of scrambled eggs in 1912, the typical breakfast was either whole eggs still in the shell, or scrambled rocks.", 
"Whales are twice as intelligent, and three times as delicious as humans.", 
"Diamonds are made when coal is put under intense pressure. Diamonds put under intense pressure become foam pellets commonly used today as packing material.", 
"At some point in their lives, one in six children will be abducted by the Dutch.", 
"According to most advanced algorithms, the worlds best name is Craig.", 
"To make a photocopier, simply photocopy a mirror.", 
"Dreams are the subconscious minds way of reminding people to go to school naked, and have your teeth fall out.", 
"While the submarine is vastly superior to the boat in every way, over 97% of people still use boats for aquatic transportation.", 
"Pants were invented by sailors in the 16th century to avoid Poseidon's wrath. It was believed that the sight of naked sailors angered the sea god.", 
"89% of magic tricks are not magic. Technically they are sorcery.", 
"An Ostrich's eye is bigger than its brain.", 
"Humans can survive underwater, but not for very long.", 
"Iguanas can stay under water for 28.7 minutes.", 
"The atomic weight of germanium is 72.64.", 
"Cellular phones will not give you cancer; only hepatitis.", 
"The square root of rope is string.", 
"The Schrodinger's cat paradox outlines a situation in which a cat in a box must be considered, for all intents and purposes, simultaneously alive and dead. Schrodinger created this paradox as a justification for killing cats.", 
"The billionth digit of Pi is 9.", 
"In Greek myth, the craftsman Daedalus invented human flight so a group of minotaurs would stop teasing him about it.", 
"The plural of Surgeon General is Surgeons General.", 
"The past tense of Surgeons General is Surgeonst General.", 
"Human tape worms can grow up to 22.9 meters.", 
"A gallon of water weighs 8.34 pounds.", 
"Every square inch of the human body has 32 million bacteria on it.", 
"The sun is 330,330 times larger than Earth.", 
"Avocados have the highest fiber and calories of any fruit.", 
"The moon orbits the Earth every 27.32 days.", 
"If you have trouble counting, use the following mnemonic device: one comes before two, comes before sixty, comes after twelve, comes before six trillion, comes after five hundred and four. This will make your earlier counting difficulties seem like no big deal.", 
"A nano second lasts one billionth of a second.", 
"Volcanoologists are experts in the study of volcanoes.", 
"The average life expectancy of a rhinoceros in captivity is fifteen years.", 
"Before the Wright Brothers invented the airplane, anyone wanting to fly anywhere was required to eat 200 pounds of helium.", 
"During the Great Depression, the Tennessee Valley Authority outlawed pet rabbits, forcing many to hot glue-gun long ears onto their pet mice.", 
"Marie Curie invented the theory of radioactivity, the treatment of radioactivity, and dying of radioactivity.", 
"China produces the worlds second largest crop of soy beans.", 
"Tungsten has the highest melting point of any metal at 3,410 degrees Celsius.", 
"Resheph, the Semitic god of war and plague had a gazelle growing out of his forehead.", 
"Hot water freezes quicker than cold water.", 
"Honey does not spoil.", 
"The average adult body contains half a pound of salt.", 
"According to Norse legend, thunder god Thor's chariot was pulled across the sky by two goats.", 
"Gently cleaning the tongue twice a day is the most effective way of fighting bad breath.", 
"Roman toothpaste was made with human urine. Urine as an ingredient in toothpaste continued to be used up until the 18th century.", 
"The value of pi is the ratio of any circle circumference to its diameter in euclidean space.", 
"At the end of The Seagull by Anton Chekhov, Constantine kills himself.", 
"It is incorrectly noted that Thomas Edison invented push-ups in 1878. Nikolai Tesla had in fact patented the activity 3 years earlier under the name Teslasize.", 
"The most poisonous fish in the world is the Orange Ruffy. Everything but its eyes are made of a deadly poison. The Ruffy's eyes are composed of a less harmful deadly poison.", 
"The occupation of court jester was invented accidentally when a vassal's epilepsy was mistaken for capering.", 
"Haley's Comet can be viewed orbiting Earth every 76 years. For the other 75 it retreats to the heart of Sun, where it hibernates undisturbed.", 
"The first commercial airline flight was in 1914; everyone involved screamed the entire way.", 
"In Greek myth Prometheus stole fire from the gods and gave it to humankind. The jewelry he kept for himself.", 
"The first person to prove that cow's milk was drinkable was very, very thirsty.", ];
	shuffleArray(theTruth)
	return theTruth[0];
}



function getEnvironment(sizeVar) {
	// Getting types of environments.


	// 1 means small location.
	if (sizeVar == 1) {
		var locationSmall = ["Living Room", "Kitchen", "Backyard", "Attic", "Basement", "Laboratory"];
		shuffleArray(locationSmall);
		return locationSmall[0];
	}
	else if (sizeVar == 2) {
		
		// 2 means big location
		var locationBig = ["Temple", "Amusement Park", "Train Station", "Shrine", "Graveyard"];
		shuffleArray(locationBig);
		return locationBig[0];
	} 
	else if (sizeVar == 3) {
		// 3 means huge location.

		var locationHuge = ["City", "Underground City", "space station"];
		shuffleArray(locationHuge);
		return locationHuge[0];
	} 
	else {
		// 0 defaults to natural location.
		var locationNatural = ["Forest", "Desert",];
		shuffleArray(locationNatural);
		return locationNatural[0];
	}
}


/*
function getTheme() {
	var theTheme = ["meta", "surreal", "cheery", "adorable", "creepy", "grimdark", "boring", "colorful", "candy", "dystopian"];
	
	shuffleArray(theTheme);
	return theTheme[0];
}
*/