"use strict";


			// The elemX object 
	// elemX is the object container for xhtml tags that javascript modifies. 
	// certain elemX items have their own ojects defined. 
	// the items that have their own object containers,  
	// follow right below the elemX object in the order 
	// that they appear in the elemX object. 


var elemX = {
	target: document.getElementsByTagName("target"),	
	content: document.getElementsByTagName("content"), 
	widget: document.getElementsByTagName("widget"), 	
	memory: document.getElementsByTagName("memory"), 
	text: document.getElementsByTagName("text"), 
	textline: document.getElementsByTagName("textline"), 
	
};

var target = {
	header: document.getElementById("header"), 
	content: document.getElementById("content"),
	footer: document.getElementById("footer"),
};


	// The rT item contains sub nodes


var memory = {
	bK: elemX.memory.item(0).getElementsByTagName("block"), 
	sVG: elemX.memory.item(0).getElementsByTagName("svg").item(0),
	rT: elemX.memory.item(0).getElementsByTagName("root"),
}; 

var rT = {
	directory: elemX.memory.item(0).getElementsByTagName("directory"),
	category: elemX.memory.item(0).getElementsByTagName("category"), 
}; 


			// regular expression objct containers
	// this js file has reqular expressions for use in styling and reading 
	// inline attributes.


var cR = { 
	wG: /\w+/g, 
	wI: /\w/i, 
	wGI: /\w+/gi, 
	lNGL: /[a-z]+/g, 
	lNGU: /[A-Z]+/g, 
	lNGI: /[aA-zZ]+/g, 
};

var nR = {
	dG: /\d+/g,
	dRG: /\d+\.\d+|\.\d+|\d+/g, 
	dPxG: /\d+\.\d+px|\.\d+px|\d+px/g, 
	dPtG: /\d+\.\d+pt|\.\d+pt|\d+pt/g,
	dPcG: /\d+\.\d+pc|\.\d+pc|\d+pc/g,
	dCmG: /\d+\.\d+cm|\.\d+cm|\d+cmx/g,
	dMmG: /\d+\.\d+mm|\.\d+mm|\d+mm/g,
	dInG: /\d+\.\d+in|\.\d+in|\d+in/g,
}; 


			// --dML (Data Markup Language)	
	// A set of two objects that allow you to navigate and retrieve files using the xmlHttpRequest object	
	// The set of objects contains literal reg exp objects
	//	Needs the html document to get updated before any serious changes can be made.
	//	Needs to match other instances of the ktml js file.


var dML = {	
};
