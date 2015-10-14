// JavaScript 
"use strict";
var charMat = /\w+/g;
var numberMatch = /\.\d+|\d+\.\d+|\d+/g, indexUnitMatch = /\d+px|\.\d+|\d+\.\d+|\d+cm|\.\d+|\d+\.\d+|\d+in/g;


// --dML (Data Markup Language)
	// A set of two objects that allow you to navigate and retrieve files using the xmlHttpRequest object
	// The set of objects contains literal reg exp objects

//	Needs the html document to get updated before any serious changes can be made.
//	Needs to match other instances of the ktml js file.


var dML = {	// dML  
	"getData": /\w+(?=\|)/g,	// getData 
	"getObject": /\{\w+\(\w+\)/g,	// getObject 
	"getPart": /\w+(?=\.|\()/g,	// getPart 
	"getPath": /\{\w+(?=\()/g,	// getPath 
	"getElement": /\w+(?=\))/g	// getElement 
}; 

var tML = {
	"getXR": /\{\-\w+\-\}/g,
	"getTemplate": /\}\w+(?=\.)/g, 
	"getPart": /\.\w+(?=\[)/g, 
	"getVersion": /\w+(?=\])/g
}; 

var xr = new window.XMLHttpRequest(), xmlp = new DOMParser(); 

var dMLFunc = function dMLFunc(a,b){ 
var getObject = a.match(dML.getObject), getData = a.match(dML.getData);
	if(getData.toString()==="create"){ 
var getPart = a.match(dML.getPart), getElement = a.match(dML.getElement);
var getTypePart = b.match(tML.getPart), getTypeVersion = b.match(tML.getVersion), getTypeXR = b.match(tML.getXR); 
var rootObj = document.getElementById(getTypeXR[0].toString().match(charMat)), rootCatObj = rootObj.getElementsByClassName(getTypePart.toString().match(charMat)).item(0); 
var catData = document.getElementById("sub_cat_target").getAttribute("data"); 
	document.getElementById("sub_cat_target").innerHTML = ""; 
	document.getElementById("sub_cat_target").setAttribute("data",getTypePart.toString().match(charMat)); 
			if(getTypeXR.toString().match(charMat).toString()==="blogs"){ 
var scI = rootCatObj.getAttribute("sc-i"); 
				for(var z=0;z<scI;z++){ 
var btnString = rootCatObj.getAttribute("sc-"+(z+1)).replace(/_/g," "); 
var btnStgCap = btnString.toString().replace(/\w/,function(btnStgCap){return btnStgCap.toUpperCase();}); 
var btnStgCapB = btnStgCap.toString().replace(/\s\w/,function(btnStgCapB){return btnStgCapB.toUpperCase();}); 
var createElem = "<button type='{-blogs-}."+rootCatObj.getAttribute("sc-"+(z+1)).toString()+"[all]' data='list|reader_selection(button)' onclick='getReaderList(this)'>"+ btnStgCapB +"</button>"; 
	document.getElementById("sub_cat_target").innerHTML += createElem; 
				} 
			}
	} 
	else if(getData.toString()==="print"){ 
var directory = document.getElementsByTagName("directory").item(0), articles = directory.getElementsByTagName("article");
var printSelection = document.getElementById("print_selection");
	if(printSelection.getElementsByTagName("*").length<=1){ 
	for(var z=0;z<articles.length;z++){ 
var nameAtt = articles.item(z).getAttribute("name"), pubAtt = articles.item(z).getAttribute("pub"), hrefAtt = articles.item(z).getAttribute("file-href");
var dataString = nameAtt+"/"+pubAtt+"/"+hrefAtt;
	printSelection.innerHTML += "<input type='checkbox' data='"+dataString+"'> "+articles.item(z).innerHTML+"<br>"; 
	}}} 
}; 

var directory = function directory(a){ 
var dataAtt = a.getAttribute("data"), typeAtt = a.getAttribute("type"), catString = typeAtt.match(tML.getPart).toString().match(charMat).toString(); 
var currentCat = document.getElementById("sub_cat_target").getAttribute("data"); 
var currentCatMat = currentCat.match(catString); 
	document.getElementById("sub_cat_target").setAttribute("data",catString); 
	if(!currentCatMat){ 
	dMLFunc(dataAtt,typeAtt);
	} 

};

var getSearchValue = function getSearchValue(a,b){ 
var destination = a.getAttribute("target-destination"), directoryAtt = a.getAttribute("target-directory"); 
var directory = document.getElementById(directoryAtt), articles = directory.getElementsByTagName("article");
var string = a.value, articleNumber = articles.length;
var replaceSpaceInput = String(string).replace(/\s/g,""); 
var currentString  = String(replaceSpaceInput).replace(/\w/g,function(currentString){ return currentString.toLowerCase(); });
var key = b.keyCode;  
	if(key===16||key===17||key===18||key===36||key===37||key===39||key===40){ /* shiftkey,ctlkey,altkey,d-pad: exclude from search */ }
	else if(key===8){ // instructions for backspace keyboard button
		for(var z=0;z<articles.length;z++){
var letterString = articles.item(z).getAttribute("letter-string"); 
	articles.item(z).setAttribute("letter-string",string); 
		}
	}
	else if(key===13){ // instructions for return keyboard button
	document.getElementById(destination).innerHTML = titleSearch(a,currentString,a.value); 
	}
	else if(key===32){ // instruction space bar keyboard button 
	}
	else{ 
	document.getElementById(destination).innerHTML = titleSearch(a,currentString,a.value);
	}
}; 

var titleSearch = function titleSearch(a,b,c){ 
var noMatch = "No matches found for: "+c; 
var directoryAtt = a.getAttribute("target-directory"), destinationAtt = a.getAttribute("target-destination"); 
var directory = document.getElementById(directoryAtt), articles = directory.getElementsByTagName("article"); 
var bTest = String(b), x = bTest.length; 
 	for(var y=0;y<x;y++){ 
		if(y>0){ var articleText=""; }
		for(var z=0;z<articles.length;z++){
var testInput = bTest[y]; 
var articleString = String(articles.item(z).innerHTML);
var replaceSpace = String(articleString).replace(/\s/g,""); 
var currentTest = String(replaceSpace[y]).replace(/\w/g,function(currentTest){ return currentTest.toLowerCase(); });
		if(y>0){ 
var letterString = articles.item(z).getAttribute("letter-string"); 
	articles.item(z).setAttribute("letter-string",letterString+currentTest);
var text = articles.item(z).getAttribute("letter-string");  
		}
		else{
	articles.item(z).setAttribute("letter-string",currentTest);
var text = articles.item(z).getAttribute("letter-string"); 
		} 
		if(currentTest.toString()===testInput.toString()&&text.toString()===bTest.toString()){ 
var dataString = articles.item(z).getAttribute("name")+"/"+articles.item(z).getAttribute("pub")+"/"+articles.item(z).getAttribute("file-href"); 
var articleText = articleText||""; 
var articleText = articleText+"<button data='"+dataString+"' onclick='getArticle(this)'>"+articles.item(z).innerHTML+"</button><br>"; 
		}
		else{
		} 
	}}
	if(!articleText){ return noMatch; }
	else{ return articleText; }
	
};

var getArticle = function getArticle(a){ 
	xr.open("get",a.getAttribute("data"),false); xr.send(); 
var string = xr.responseText; var stringToDom = xmlp.parseFromString(string,"text/html"); 
	document.getElementById("target_blog_display").innerHTML = stringToDom.getElementsByTagName("div").item(0).innerHTML; 
	document.getElementById("font_color_change").click();
	document.getElementById("background_color_change").click(); 
}; 

var getReaderList = function getReaderList(a){ 
var category = document.getElementsByTagName("category"), i = category.length; 
var dataAtt = a.getAttribute("data"), typeAtt = a.getAttribute("type"); 
var getPart = typeAtt.match(tML.getPart); 
	if(document.getElementById("reader_selection").getAttribute("data")!=getPart.toString().match(charMat).toString()){
	document.getElementById("reader_selection").innerHTML = ""; 
	document.getElementById("reader_selection").setAttribute("data",getPart.toString().match(charMat).toString())
		for(var z=0;z<i;z++){
var articles = category.item(z).getElementsByTagName("article"), articleI = articles.length; 
			for(var y=0;y<articleI;y++){ 
var getPartTest = typeAtt.match(tML.getPart); 
var catClass = articles.item(y).getAttribute("class"); 
				if(catClass.toString()===getPartTest.toString().match(charMat).toString()){ 
var artName = articles.item(y).innerHTML; 
var byAuthor = articles.item(y).getAttribute("author"), onDate = articles.item(y).getAttribute("pub"); 
var pubString = onDate.replace(/_/g, " ")
var authorString = "<br><details><summary>Bibliographical Information: </summary><br><text>By "+byAuthor+"</text><br><text>Published on "+pubString+".</text></details><br>";
var clickstring = articles.item(y).getAttribute('name')+"/"+articles.item(y).getAttribute('pub')+"/"+articles.item(y).getAttribute('file-href'); 
var string = "<button onclick='getArticle(this)' data='"+clickstring+"'>"+artName+"</button>"; 
	document.getElementById("reader_selection").innerHTML += string+authorString; 
				}
				else{null;}
			}
		}
	} 
	if(document.getElementById("reader_selection").innerHTML !== ""){}
	else{ document.getElementById("reader_selection").innerHTML = "There are no files on record" }
};

var getFeaturedStories = function getFeaturedStories(a){ 
var dataAtt = a.getAttribute("data"), typeAtt = a.getAttribute("type"); 
var directory = document.getElementById(typeAtt).getElementsByTagName("article"); 
var destination = document.getElementById(dataAtt); 
	destination.setAttribute("data","featured");
	if(document.getElementById("sub_cat_target").getAttribute("data")!="featured"){ 
	document.getElementById(a.getAttribute("target-destination")).innerHTML = "Featured Stories";
	document.getElementById(a.getAttribute("target-destination")).setAttribute("data","featured");  
	destination.innerHTML = ""; 
		for(var z=0;z<directory.length;z++){ 
var catZ = directory.item(z), getFeatured = catZ.getAttribute("featured"); 
			if(getFeatured==="true"){ 
var byAuthor = directory.item(z).getAttribute("author"), onDate = directory.item(z).getAttribute("pub"); 
var dateUnderScore = onDate.replace(/\_/g," ");
var authorString = "<br><details><summary>Bibliographical Information</summary><br><text>By "+byAuthor+"</text><br><text>Published on "+dateUnderScore+".</text</details><br>";
var urlCat = catZ.getAttribute("name"), urlDate = catZ.getAttribute("pub"), urlHref = catZ.getAttribute("file-href"); 
var urlString = urlCat+"/"+urlDate+"/"+urlHref;
var crtBtn = "<button data='"+urlString+"' onclick='getArticle(this)'>"+directory.item(z).innerHTML+"</button>" +authorString; 
	destination.innerHTML += crtBtn; 
			}else{ null; } 
		} 
	}else{ null; } 

};

var allSubCategories = function allSubCategories(a){ 
var dataAtt = a.getAttribute("data"), typeAtt = a.getAttribute("type");
var directory = document.getElementById(typeAtt).getElementsByTagName("category");  
var destination = document.getElementById(dataAtt);
	if(destination.getAttribute("data")!=="all"){
	destination.setAttribute("data","all"); 
	destination.innerHTML = ""; 
		for(var z=0;z<directory.length;z++){ 
var catZ = directory.item(z), scI = catZ.getAttribute("sc-i");
			for(var y=0;y<scI;y++){ 
var string = catZ.getAttribute("sc-"+(y+1)), underscoreReplace = string.replace(/\_/g," "); 
var btnStgCap = underscoreReplace.toString().replace(/\w/,function(btnStgCap){return btnStgCap.toUpperCase();}); 
var btnStgCapB = btnStgCap.toString().replace(/\s\w/,function(btnStgCapB){return btnStgCapB.toUpperCase();}); 
var crtBtn = "<button type='{-blogs-}."+string+"[all]' data='list|reader_selection(button)' onclick='getReaderList(this)'>"+btnStgCapB+"</button>"; 
	destination.innerHTML += crtBtn; 
			} 
		} 
	}else{ null; } 	
}; 

var getDirectory = function getDirectory(a){ 
var directoryAtt = a.getAttribute("target-directory"), directoryMatch = directoryAtt.match(charMat); 
var root = document.getElementById(directoryMatch[0]), category = root.getElementsByTagName("category"); 
var targetObject = a.getAttribute("target-object") , obj = document.getElementById(targetObject); 
var directory = root.getElementsByTagName("directory"); 
	obj.innerHTML = "<button onclick='closeWindow(this)'>close</button>"; 
	for(var x=0;x<directory.length;x++){ 
		if(directory.item(x).getAttribute("id").toString()===directoryMatch[1].toString()){
			for(var z=0;z<category.length;z++){ 
var catName = category.item(z).getAttribute("title"), subCatI = category.item(z).getAttribute("sc-i"); 
	obj.innerHTML += "<br><h3>"+catName+"</h3><br>"; 
				for(var y=0;y<subCatI;y++){ 
var subCatName = category.item(z).getAttribute("sc-title-"+(y+1)), subCatTest = category.item(z).getAttribute("sc-"+(y+1)); 
var subCatString = "<li>"+subCatName+"</li>"; 
	obj.innerHTML += subCatString;
var articles = category.item(z).getElementsByTagName("article"); 
					for(var w=0;w<articles.length;w++){
var articlesClass = articles.item(w).getAttribute("class"), author = articles.item(w).getAttribute("author"), publish = articles.item(w).getAttribute("pub"); 
						if(articlesClass.toString()===subCatTest.toString()){
var dataString = articles.item(w).getAttribute("name")+"/"+publish+"/"+articles.item(w).getAttribute("file-href"); 
	obj.innerHTML += " <button onclick='getArticle(this)' data='"+dataString+"'><b>-</b> "+articles.item(w).innerHTML+" </button> "+"<br><text> Author "+author+" || Date of publish "+publish.replace(/\_/g," ")+"</text><br>";
						}
						else{}
					}
				}
	obj.innerHTML += "<hr>";
			}
		}
	}
	document.body.appendChild(obj); 
}; 

var next = function next(a){
var dataAtt = a.getAttribute("target"), destination = document.getElementById(dataAtt); 
var typeAtt = a.getAttribute("data"), readList = document.getElementById(typeAtt); 
var curInd = readList.getAttribute("current-index"); 
var contentList = readList.getElementsByTagName("button"), listLength = contentList.length; 
	if(Number(curInd)>=listLength){ 
	readList.setAttribute("current-index","1"); 
	contentList.item(0).click(); 
	} 
	else{ 
	readList.setAttribute("current-index",Number(curInd)+1); 
	contentList.item(Number(curInd)).click(); 
	} 
}; 
	
var previous = function previous(a){ 
var dataAtt = a.getAttribute("target"), destination = document.getElementById(dataAtt); 
var typeAtt = a.getAttribute("data"), readList = document.getElementById(typeAtt); 
var curInd = readList.getAttribute("current-index"); 
var contentList = readList.getElementsByTagName("button"), listLength = contentList.length; 
	if(Number(curInd)<=1){ 
	readList.setAttribute("current-index",listLength); 
	contentList.item(listLength-1).click(); 
	} 
	else{ 
	readList.setAttribute("current-index",Number(curInd)-1); 
	contentList.item(Number(curInd)-2).click(); 
	} 
}; 

var toggle = function toggle(a){
var targetObject = a.getAttribute("target-object"), targetDestination = a.getAttribute("target-destination"); 
var desObj = document.getElementById(targetDestination);

			if(desObj.innerHTML!=""){ 
var tar = document.createElement("block");
	tar.setAttribute("id",targetObject);
	tar.innerHTML = desObj.innerHTML;
	document.getElementsByTagName("memory").item(0).appendChild(tar); 
	collapseTarget(a,desObj.getAttribute("dimension-start"));
			} 
			else{ 
var tar = document.getElementById(targetObject)||""; 
	desObj.innerHTML = tar.innerHTML||"<br>"; tar.innerHTML = ""; tar.outerHTML = ""; 
	expandTarget(a,desObj.getAttribute("dimension-end"));  
			} 
};

var expandTarget = function expandTarget(a,b){ 
var targetAtt = a.getAttribute("target-destination"); 
var dimensions = b.match(indexUnitMatch), width = dimensions[0], height = dimensions[1]; 
var obj = document.getElementById(targetAtt); 

	obj.style.height = height, obj.style.width = width;
};

var collapseTarget = function collapseTarget(a,b){
var targetAtt = a.getAttribute("target-destination"); 
var dimensions = b.match(indexUnitMatch), width = dimensions[0], height = dimensions[1]; 
var obj = document.getElementById(targetAtt); 

	obj.style.height = height, obj.style.width = width, obj.innerHTML = ""; 
 
}

var toggleClassWindow = function toggleClassWindow(a){ 
var dataAtt = a.getAttribute("data"), windowObject = document.getElementById(dataAtt); 
var targetAtt = a.getAttribute("target"), destination = document.getElementById(targetAtt); 
var typeAtt = a.getAttribute("type"), classObj = destination.getElementsByClassName(typeAtt); 

	destination.appendChild(windowObject); 

	if(classObj.length>=2){ document.getElementsByTagName("memory").item(0).appendChild(classObj.item(0)); } 
	else{ null; } 

var parentTypeAtt = windowObject.getAttribute("type"); 
var typeDataMatch = parentTypeAtt.match(dML.getData); 

	dMLFunc(parentTypeAtt,windowObject);  

}; 

var closeWindow = function closeWindow(a){
	document.getElementsByTagName("memory").item(0).appendChild(a.parentNode);
};

var getPrintJobs = function getPrintJobs(a){
var parentObj = a.parentNode, checkBox = parentObj.getElementsByTagName("input");
	for(var z=0;z<checkBox.length;z++){ 
var printTest = checkBox.item(z).checked; 
		if(printTest===true){
var href = checkBox.item(z).getAttribute("data");  
	xr.open("get",href,false); xr.send();
var xrResponseText = xr.responseText;
var dataAtt = checkBox.item(z).getAttribute("data"); 
var printWindow = window.open(); 
	printWindow.document.write(xrResponseText); 
	printWindow.print(); 
	printWindow.close(); 
		} 
	} 
} 

var getArticleWindow = function getArticleWindow(a){ 
var targetAtt = a.getAttribute("target-object"), obj =  document.getElementById(targetAtt); 
var readerWindow =  window.open()
	readerWindow.document.body.innerHTML = obj.innerHTML;
};
