"use strict";


	// The tagName object contains pointers to tags that are modified by javascript


var elem = {
	target: document.getElementsByTagName("target"),	
	content: document.getElementsByTagName("content"), 	
	memory: document.getElementsByTagName("memory"), 	
};

var target = {
	header: document.getElementById("header"), 
	content: document.getElementById("content"),
	footer: document.getElementById("footer"),
};

var charMat = /\w+/g;

var numberMatch = /\.\d+|\d+\.\d+|\d+/g, indexUnitMatch = /\d+px|\.\d+|\d+\.\d+|\d+cm|\.\d+|\d+\.\d+|\d+in/g;


	// --dML (Data Markup Language)	
		// A set of two objects that allow you to navigate and retrieve files using the xmlHttpRequest object	
		// The set of objects contains literal reg exp objects
		//	Needs the html document to get updated before any serious changes can be made.
		//	Needs to match other instances of the ktml js file.


var dML = {	  
	"getData": /\w+(?=\|)/g,	
	"getObject": /\{\w+\(\w+\)/g,		
	"getPart": /\w+(?=\.|\()/g,	
	"getPath": /\{\w+(?=\()/g,	
	"getElement": /\w+(?=\))/g,	
};
