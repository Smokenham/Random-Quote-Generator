

$(document).ready(function() {	
		var quoteLibrary = ["Kia ora", "Get stuffed", "What an egg", "Faaaaaaaar out", "Having a pash", "Chur", "Don't be a dickhead", "Sweet as", "Ka pai", "Choice",
		"Yeah Right", "Bugger", "Squiz", "Mean as", "Getting munted", "She'll be right", "Stoaked as", "Aotearoa" , "Aroha", "Bach", "Beaut", "Bloke", "Bludge", "Boot",
		"Boy racer", "Bog", "Crook", "Dole", "Dodgy", "Let's get a feed", "Fella", "Stink fella", "Flatties", "Flash as", "Good as gold","Heaps", "Hard yakka", "Hissy fit", "Can't handle the jandal", "Kai", "Bloody knackered",
		"Kumara", "Pissing around", "Getting pissed", "It's pissing down", "Oh true" ,"That's primo", "Packing a sad", "He's a scab", "Just a smidgen", "Spit the dummy", "Stuffed up", "Tinny", "Waka",
		"Throwing a wobbly", "Wop wops", "What a sad guy", "It's been yonks", "Yeah , Nah, Yeah"];
	var numOfQuotes = quoteLibrary.length;
	
	
	document.getElementById("quoteButton").addEventListener("click", function(){
	var result = Math.floor((Math.random() * numOfQuotes));
	
	
    document.getElementById("generated-quote").innerHTML = quoteLibrary[result];
});
	



	
	
	
   
});