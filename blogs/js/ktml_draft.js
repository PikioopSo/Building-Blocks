"use strict";

			//Author: Steven Van Sant. 
    	// Co-Author: None. 
        // Contributors: None.
        // Publication Date:  Unfinished.
    	// License: Not available yet. 

		// *** Please email the author at kipOmaha@gmail.com if you have any comments or suggestions. ***


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
	// The first object contains literal reg exp objects. 
	// The second object contains instructions for the document.

	//	** Needs to match other instances of the ktml js file.


var dML = {
	dot: /\w+(?=\.)/g,
	lP: /\(+/g,
};

var instruct = {	
	cS: function(matchClassString){
var cSObject = {
	cSMain: matchClassString.match(cR.lNGI)[0], 
	cSMatch: matchClassString.match(cR.lNGI), 
};
	return cSObject; 

	},
	dDa: function(evTarget){
var dDaObject = { 
	dDir: evTarget.getAttribute("data-directory"), 
	dCat: evTarget.getAttribute("data-category"), 
	dTar: evTarget.getAttribute("data-target"),  
	dAInd: evTarget.getAttribute("data-action-i"), 
	dId: evTarget.getAttribute("id"),
};

	return dDaObject;

	},
};

var dADiCa = function dADiCa(directory,category){
	this.directory = document.getElementById(directory);
	this.category = this.directory.getElementsByClassName(category); 
}; 

var action = function action(classObject,evtTgt,dirId,num){ 

	for(var cN=0;cN<classMatch.cSMatch.length;cN++){
var dirObject = document.getElementById(dirId); 
var classObject = dirObject.getElementsByClassName(classObject.cSMatch[cN]).item(0); 

		for(var dN=0;dN<num;dN++){
var currentIndex = dN+1; 
var actionString = evtTgt.getAttribute("data-action-"+currentIndex); 
var cMad = letter(actionString); 
		}

	}

};

var letter = function letter(stg){
var dMLDot = stg.match(/\w+(?=\.)/g);
}; 

			// Event listeners for the document 


	document.addEventListener("mousedown",function(event){
var target = event.target, wHEv = event.which, targetClass = target.getAttribute("class"); 

			if(wHEv === 1){ 
var cSStg = instruct.cS(targetClass);  

				if(cSStg.cSMain.toString() === "directory"){
var dData = instruct.dDa(target); 

					if(dData.dCat === "all"){

					}
					else{
var catCsMatch = instruct.cS(dData.dCat); 
var dObj = new dADiCa(dData.dDir,dData.dCat); 

var snippet = action(catCsMatch,target,dData.dDir,dData.dAInd); 

					}

				}
				else if(cSStg.cSMain === "interface"){ 

				}

			}

			else if(wHEv === 2){
			}
			else if(wHEv === 3){

			}

		});

	document.addEventListener("mouseup",function(event){

		});

	document.addEventListener("touchstart",function(event){

		});

	document.addEventListener("touchend",function(event){

		});

	document.addEventListener("touchcancel",function(event){

		});

	document.addEventListener("touchmove",function(event){

		});
