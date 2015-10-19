"use strict";

		//Author: Steven Van Sant. 
    	// Co-Author: None. 
        // Contributors: None.
        // Publication Date:  Unfinished.
    	// License: Not available yet. 


		// Dedicated to all the people who care for me, and have supported me and my pursuits. 


		// *** Please email the author at kipOmaha@gmail.com if you have any comments or suggestions. Send salutations to the author. ***


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
	display: document.getElementsByTagName("display"),

};

var target = {
	header: document.getElementById("header"), 
	content: document.getElementById("content"),
	footer: document.getElementById("footer"),

};


var memory = {
	bK: elemX.memory.item(0).getElementsByTagName("block"), 
	sVG: elemX.memory.item(0).getElementsByTagName("svg").item(0),
	rT: elemX.memory.item(0).getElementsByTagName("root"),

}; 

var rT = {
	directory: elemX.memory.item(0).getElementsByTagName("directory"),
	category: elemX.memory.item(0).getElementsByTagName("category"), 
}; 


			// regular expression object containers
	// letter and common charecter reg expressions


var cR = { 
	wG: /\w+/g, 
	wI: /\w/i, 
	wGI: /\w+/gi, 
	lNGL: /[a-z]+/g, 
	lNGU: /[A-Z]+/g, 
	lNGI: /[aA-zZ]+/g, 
};


	// number and number unit reg expressions


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


	// reserved words and symbols reg expressions


var rWd = {
	cWd: /directory|webEv/,
	dIMeWd: /\-featured|\-list|\-all|\-extend/,
	wEMeWd: /\-toggle|\-up|\-down|\-list|\-featured|\-extend/,
	eVTag: /button+(?=\()|get+(?=\()|target+(?=\()/g,
	eVSym: /\.+|\[|\]|\(+|\)+|\-+|\;+|\,+/g,

};

var sySign = {
	cOma:/\,+/g, 
	dOt: /\.+/g, 
	lBr: /\[+/g, 
	rBr: /\]+/g, 
	lCBr: /\{+/g, 
	rCBr: /\}+/g, 
	lPr: /\(+/g,
	semCo: /\;+/g,
	rPr: /\)+/g,
	sYSiWd: /\w+(?=\:)/g,

};

	// The instruct variable returns an object/objects.  
		// Object/Objects returned are based off of what  the event listeners retrieved. 


var instruct = {	
	cS: function(matchClassString,evTarget){
var dir = rWd.cWd.test(matchClassString) !== false ? matchClassString.match(cR.lNGI)[0] : "Please use a recgonized class.";


 	// The directory class intructructions


		if( dir.toString() === "directory" ){ 
var mThod = rWd.dIMeWd.test(matchClassString) !== false ? matchClassString.match(cR.lNGI)[1] : matchClassString.match(cR.lNGI);


	// methods for directory class. 


				if(mThod.toString() === "featured"){
var cSObjFeat = {
	xmlDirectory: document.getElementById( evTarget.getAttribute("data-directory") ),
	dirCat: evTarget.getAttribute("data-category"), 
	dirSubCat: evTarget.getAttribute("data-sub-category"),
	extEv: evTarget.getAttribute("data-ev-extend"), 
	tar: evTarget.getAttribute("data-target"),
};

var tAObjFeat = document.getElementById(cSObj.tar), tAObjEv = tAObj.getAttribute("data-directory-ev");

	instruct.eV(cSObj.xmlDir, cSObj.dirCat, cSObj.dirSubCat, tAObjFeat, tAObjFeatEv, evTarget);

	return cSObjFeat; 

				}

				else if(mThod.toString() === "extend"){
var cSObjExt = {
	xmlDirectory: document.getElementById( evTarget.getAttribute("data-directory") ),
	dirCat: evTarget.getAttribute("data-category"), 
	dirSubCat: evTarget.getAttribute("data-sub-category"),
	extEv: evTarget.getAttribute("data-ev-extend"), 
	tar: evTarget.getAttribute("data-target"),
};

	return cSObjExt; 

				}

				else if(mThod.toString() === "list"){
var cSObjList = {
	xmlDirectory: document.getElementById( evTarget.getAttribute("data-directory") ),
	dirCat: evTarget.getAttribute("data-category"), 
	dirSubCat: evTarget.getAttribute("data-sub-category"),
	extEv: evTarget.getAttribute("data-ev-extend"), 
	tar: evTarget.getAttribute("data-target"),
};

	return cSObjList; 

				}

				else if(mThod.toString() === "all"){
var cSObjAll = {
	xmlDirectory: document.getElementById( evTarget.getAttribute("data-directory") ),
	extEv: evTarget.getAttribute("data-ev-extend"), 
	tar: evTarget.getAttribute("data-target"),
};

	return cSObjAll; 

				}

				else{
var cSObj = {
	xmlDir: document.getElementById( evTarget.getAttribute("data-directory") ),
	dirCat: evTarget.getAttribute("data-category"), 
	dirSc: evTarget.getAttribute("data-sub-category"), 
	tar: evTarget.getAttribute("data-target"),
};

var tAObj = document.getElementById(cSObj.tar), tAObjEv = tAObj.getAttribute("data-directory-ev");

var arryC = instruct.dIRC(cSObj.dirCat); 
var arrySc = instruct.dIRC(cSObj.dirSc); 

var manDyar = [], urlarray = [], arSC = [], dirAr = []; 
 
					if(arryC[0] !== "all"){

						if(arrySc[0] !== "all"){

							for(var cN=0; cN < arryC.length; cN++){
var categy = cSObj.xmlDir.getElementsByClassName(arryC[cN]).item(0), 
	sCMa = categy.getAttribute("data-sc-i"); 	

								for(var sCN=0;sCN < sCMa; sCN++){
var subDire = categy.getAttribute("data-sc-"+(sCN+1)); 
var sCTitle = categy.getAttribute("data-sc-title-"+(sCN+1)); 

	arSC.push(subDire);
	arSC.push(sCTitle); 
								}
var urlstG = evTarget.getAttribute("data-directory")+"/"+categy.getAttribute("class")+"/";

	urlarray.push(urlstG); 
	arSC.push(categy.getAttribute("class")); 
	arSC.push(categy.getAttribute("data-title")); 
	dirAr.push(categy); 

					} 

var getSC = instruct.cMPr(arrySc, arSC); 

	manDyar.push(getSC);  

						}
						else{

							for(var cNm=0; cNm < arryC.length; cNm++){
var categoy = cSObj.xmlDir.getElementsByTagName("category").item(cin), 
	sCin = categoy.getAttribute("data-sc-i"); 

								for(var sCNu=0;sCNu < sCin; sCNu++){
var subDirec = categoy.getAttribute("data-sc-"+(sCNu+1)); 
var sCti = categoy.getAttribute("data-sc-title-+"+(sCNu+1)); 

	arSC.push(subDirec);
	arSC.push(sCti);  

								}
var urlstng = evTarget.getAttribute("data-directory")+"/"+categoy.getAttribute("class")+"/";

	urlarray.push(urlstng); 
	arSC.push(categoy.getAttribute("class")); 
	arSC.push(categoy.getAttribute("data-title"));
	dirAr.push(categoy);

							}  

	manDyar.push(arSC); 

						}

					}
					else{ 

						if(arrySc[0] !== "all"){

							for(var cin=0; cin < arryC.length; cin++){
var catey = cSObj.xmlDir.getElementsByTagName("category").item(cin), 
	sCi = catey.getAttribute("data-sc-i"); 	

								for(var cI=0;cI < sCi; cI++){
var subDiry = catey.getAttribute("data-sc-"+(cI+1)); 
var sTtl = catey.getAttribute("data-sc-title-"+(cI+1)); 

	arSC.push(subDiry); 
	arSC.push(sTtl); 

								}  

var urlstng = evTarget.getAttribute("data-directory")+"/"+catey.getAttribute("class")+"/";

	urlarray.push(urlstng); 
	arSC.push(catey.getAttribute("class"));
	arSC.push(catey.getAttribute("data-title"));
	dirAr.push(catey); 

							}
var geSC = instruct.cMPr(arrySc, arSC); 

	manDyar.push(geSC); 

						}
						else{

							for(var cIx=0; cIx < arryC.length; cIx++){
var catoy = cSObj.xmlDir.getElementsByTagName("category").item(cIx), 
	sCix = catoy.getAttribute("data-sc-i"); 

								for(var subIx=0;subIx < sCix; subIx++){
var subDiy = catoy.getAttribute("data-sc-"+(subIx+1)); 
var sCtit = catoy.getAttribute("data-sc-title-+"+(subIx+1)); 

	arSC.push(subDiy);
	arSC.push( sCtit);  

								}
var urlSg = evTarget.getAttribute("data-directory")+"/"+catoy.getAttribute("class")+"/";

	urlarray.push(urlSg); 
	arSC.push(catoy.getAttribute("class")); 
	arSC.push(catoy.getAttribute("data-title"));
	dirAr.push(catoy);

							}  

	manDyar.push(arSC); 

						}

					}


	// instruct.cS returns an object created from an event listener 


	return cSObj; 

			}

		}
		else if(dir.toString() === "webEvent"){
var mThodEv = rWd.eVSym.test(matchClassString) !== false ?  matchClassString.match(rWd.wEMeWd)  :  matchClassString.match(cR.lNGI); 

				if(mThodEv.toString() === "list"){
				}
				else if(mThodEv.toString() === "toggle"){
				}
				else if(mThodEv.toString() === "featured"){
				}
				else if(mThodEv.toString() === "up"){
				}
				else if(mThodEv.toString() === "down"){
				}
				else if(mThodEv.toString() === "extend"){
				}
				else{
				}

		}

	},
	dIRC: function(dStg){ 


	// Scans the data-category


var sCM = dStg.match(rWd.eVSym)||"", sEIndex = sCM.length;  	
var aRy = []; 

		for(var sEI=0; sEI < sEIndex; sEI++){
var sInd = sInd||0, classes = instruct.sYn(dStg,sInd); 
	sInd = Number(classes.match(nR.dG))+1;  

var strG = classes.match(sySign.sYSiWd);  
	aRy.push(strG); 

		}

	return aRy;

	},
	sYn: function(aStg,index){ 


	// The object method sYn is used to separate strings using a simple syntax


var aN = Number(index); 
		for(aN; aN<aStg.length; aN++){
var aStgCur = aStg[aN]; 
var curSt = curSt||""; 

			if(rWd.eVSym.test(aStgCur) !== false){
	return curSt+":"+aN+" "+aStgCur; 
 
 			}
			else if(aStgCur === ";"){
	return curSt+":"+aN+" "+aStgCur; 
 
 			}
			else{ 
	curSt = curSt + aStgCur; 

			}


		}

	},
	cMPr: function(tru, cOmparison){

	},

};


			// Event listeners for the document 


	document.addEventListener("mousedown",function(event){
var target = event.target, wHEv = event.which, targetClass = target.getAttribute("class"); 

			if(wHEv === 1){ 
var classObject = instruct.cS(targetClass,target);     

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
