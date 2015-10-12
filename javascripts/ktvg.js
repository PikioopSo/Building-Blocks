// string search and regExp
"use strict"; 
var numberMatch = /\d+\.\d+|\.\d+|\d+/g;
var charMat = /\w+/g; 
// svg Graphics

var ktvg = document.getElementsByClassName("ktvg"), articles = document.getElementsByTagName("article");

var matches = { 
	func:/\w+\(\w+\,\d+\)/g, 
	incTest : /\+/g,
	decTest : /\-/g,
	dataTest : /pointsQ/g,
	lineColor : /lineColor/g, 
	strokeWidth : /strokeWidth/g, 
	fillColor : /fillColor/g, 
	lineColorEnd : /\-color/g,
	lineStrokeEnd : /-width/g,
	fillColorEnd : /\*color/g,
	endCommand : /\;/g,
	pointData : /\|\d+\.\d+\||\|\.\d+\||\|\d+\|/g,
	incrementData : /\+\d+\.\d+|\+\.\d+|\+\d+|\-\d+\.\d+|\-\.\d+|\-\d+/g,
	decrementData : /\-\d+\.\d+|\-\.\d+|\-\d+/g
};

var instuctSearch = function instuctSearch(inlineString){ 
	if(funcType === "draw"  &&  svgType === "path"){ 
var pathData = inlineString.toString().search(matches.dataTest), endPathData = inlineString.toString().search(matches.endCommand); 
		for(var stringLength=pathData;stringLength<endPathData;stringLength++){ 
var commandLetter = inlineString[stringLength]; 
var commandString = commandString||""; 
var commandString = commandString+commandLetter; 
		} 
	return commandString; 
	}
	else if(funcType === "draw" && svgType === "ellipse"){ 
var xrad = inlineString.toString().search(/xrad/g), yrad = inlineString.toString().search(/yrad/g); 
var centerX = inlineString.toString().search(/centerX/g), centerY = inlineString.toString().search(/centerY/g); 
var radXEnd = inlineString.toString().search(/_xR/g), radYEnd = inlineString.toString().search(/_yR/g); 
var cenXEnd = inlineString.toString().search(/_cX/g), cenYEnd = inlineString.toString().search(/_cY/g); 

		for(var cenXNum=centerX; cenXNum<cenXEnd; cenXNum++){ 
var centerXLetter = inlineString[cenXNum]; 
var centerXString = centerXString||"";
var centerXString = centerXString+centerXLetter;
		} 

		for(var cenYNum=centerY; cenYNum<cenYEnd; cenYNum++){ 
var centerYLetter = inlineString[cenYNum]; 
var centerYString = centerYString||"";
var centerYString = centerYString+centerYLetter;
		} 

		for(var radXNum=xrad; radXNum<radXEnd; radXNum++){ 
var radXLetter = inlineString[radXNum]; 
var radXString = radXString||"";
var radXString = radXString+radXLetter;
		} 

		for(var radYNum=yrad; radYNum<radYEnd; radYNum++){ 
var radYLetter = inlineString[radYNum]; 
var radYString = radYString||"";
var radYString = radYString+radYLetter;
		} 

var ellipseString = radXString+";"+radYString+";"+centerXString+";"+centerYString; 
	return "ellipse{"+ellipseString+"}"; 
	}
};

var fillSearch = function fillSearch(inlineString){ 
var fillMatch = inlineString.search(matches.fillColor), fillMatchEnd = inlineString.search(matches.fillColorEnd) 

	for(var fillNum=fillMatch; fillNum<fillMatchEnd; fillNum++){
var fillLetter = inlineString[fillNum]; 
var fillString = fillString||""; 
var fillString = fillString+fillLetter;
	} 
	return fillString; 
};

var strokeColorSearch = function strokeColorSearch(inlineString){ 
var strokeColor = inlineString.search(matches.lineColor), strokeColorEnd = inlineString.search(matches.lineColorEnd);
	
	for(var strokeColorNum=strokeColor; strokeColorNum<strokeColorEnd; strokeColorNum++){
var strokeColorLetter = inlineString[strokeColorNum]; 
var strokeColorString = strokeColorString||""; 
var strokeColorString = strokeColorString+strokeColorLetter; 
	} 
	return strokeColorString; 
}; 

var strokeSearch = function strokeSearch(inlineString){ 
var stroke = inlineString.search(matches.strokeWidth), strokeEnd = inlineString.search(matches.lineStrokeEnd);
	
	for(var strokeNum=stroke; strokeNum<strokeEnd; strokeNum++){
var strokeLetter = inlineString[strokeNum]; 
var strokeString = strokeString||""; 
var strokeString = strokeString+strokeLetter; 
	}
	return strokeString; 
}; 

var pointCalc = function pointCalc(numberString, multiple){ 
var deltaNum = numberString.toString().match(/\+\d+\.\d+|\+\.\d+|\+\d+|\-\d+\.\d+|\-\.\d+|\-\d+/g); 
var pointNum = numberString.toString().match(matches.pointData); 
var comNum = pointNum.length/2; 
	for(var ptNum=0;ptNum<comNum;ptNum++){ 
var deltaTestA = deltaNum[ptNum*2].toString().match(/\+|\-/), deltaTestB = deltaNum[ptNum*2+1].toString().match(/\+|\-/); 
		if(deltaTestA.toString() === "+" && deltaTestB.toString() === "+"){ 
var deltaNumCalcA = Number(deltaNum[ptNum*2].toString().match(numberMatch))*Number(multiple)+Number(pointNum[ptNum*2].toString().match(numberMatch)); 
var deltaNumCalcB = Number(deltaNum[ptNum*2+1].toString().match(numberMatch))*Number(multiple)+Number(pointNum[ptNum*2+1].toString().match(numberMatch)); 
var coord = deltaNumCalcA+","+deltaNumCalcB, coordString = coord.toString().replace(/\|/g,""); 
var pointString = pointString||"_"; 
var pointString = pointString+coordString+" "; 
		} 
		else if(deltaTestA.toString() === "+" && deltaTestB.toString() === "-"){
var deltaNumCalcA = Number(deltaNum[ptNum*2].toString().match(numberMatch))*Number(multiple)+Number(pointNum[ptNum*2].toString().match(numberMatch)); 
var deltaNumCalcB = -1*Number(deltaNum[ptNum*2+1].toString().match(numberMatch))*Number(multiple)+Number(pointNum[ptNum*2+1].toString().match(numberMatch)); 
var coord = deltaNumCalcA+","+deltaNumCalcB, coordString = coord.toString().replace(/\|/g,""); 
var pointString = pointString||"_"; 
var pointString = pointString+coordString+" "; 
		} 
		else if(deltaTestA.toString() === "-" && deltaTestB.toString() === "+"){
var deltaNumCalcA = -1*Number(deltaNum[ptNum*2].toString().match(numberMatch))*Number(multiple)+Number(pointNum[ptNum*2].toString().match(numberMatch)); 
var deltaNumCalcB = Number(deltaNum[ptNum*2+1].toString().match(numberMatch))*Number(multiple)+Number(pointNum[ptNum*2+1].toString().match(numberMatch)); 
var coord = deltaNumCalcA+","+deltaNumCalcB, coordString = coord.toString().replace(/\|/g,""); 
var pointString = pointString||"_"; 
var pointString = pointString+coordString+" "; 
		} 
		else if(deltaTestA.toString() === "-" && deltaTestB.toString() === "-"){
var deltaNumCalcA = -1*Number(deltaNum[ptNum*2].toString().match(numberMatch))*Number(multiple)+Number(pointNum[ptNum*2].toString().match(numberMatch)); 
var deltaNumCalcB = -1*Number(deltaNum[ptNum*2+1].toString().match(numberMatch))*Number(multiple)+Number(pointNum[ptNum*2+1].toString().match(numberMatch)); 
var coord = deltaNumCalcA+","+deltaNumCalcB, coordString = coord.toString().replace(/\|/g,""); 
var pointString = pointString||"_"; 
var pointString = pointString+coordString+" "; 
		}
	} 
var pointString = pointString.replace("_","M"); 
var pointString = pointString.replace(" ","Q"); 
	return pointString; 
};

var colorCalc = function colorCalc(numberString, multiple){
var deltaColorNum = numberString.toString().match(/\+\d+\.\d+|\+\.\d+|\+\d+|\-\d+\.\d+|\-\.\d+|\-\d+/g);  
var pointColorNum = numberString.toString().match(matches.pointData);  
	for(var colorNum=0; colorNum<4; colorNum++){
var deltaColorNumTest = deltaColorNum[colorNum].toString().match(/\+|\-/);
var dataColorCalc = Number(deltaColorNum[colorNum].toString().match(numberMatch))*Number(multiple)+Number(pointColorNum[colorNum].toString().match(numberMatch)); 
		if(colorNum < 3){
			if(deltaColorNumTest.toString() === "+"){ 
				if(Number(dataColorCalc)<=255){
var rgbaString = rgbaString||"rgba("; 
var rgbaString = rgbaString+" "+dataColorCalc; 
				}
				else{
var dataColorRatio = Number(dataColorCalc)/255; 
var overCalcMutliple = Number(dataColorRatio.toString().match(/\d+(?=\.)/g));  
var dataColorCalc = Number(dataColorCalc)-(255*overCalcMutliple)*overCalcMutliple; 
var rgbaString = rgbaString||"rgba("; 
var rgbaString = rgbaString+" "+dataColorCalc; 
				}
			} 
			else if(deltaColorNumTest.toString() === "-"){  
var dataColorCalc = Number(pointColorNum[colorNum].toString().match(numberMatch)); 
var dataColorCalc = Number(dataColorCalc)-Number(deltaColorNum[colorNum].toString().match(numberMatch))*Number(multiple);
				if(Number(dataColorCalc)>=0){ 
var rgbaString = rgbaString||"rgba("; 
var rgbaString = rgbaString+" "+dataColorCalc;
				}
				else{ 
var dataColorCalc = -1*Number(dataColorCalc); 
var rgbaString = rgbaString||"rgba("; 
var rgbaString = rgbaString+" "+dataColorCalc;
				}
			} 
		}
		else{
			if(deltaColorNumTest.toString() === "+"){ 
				if(Number(dataColorCalc)<=1){
var rgbaString = rgbaString||"rgba("; 
var rgbaString = rgbaString+" "+dataColorCalc;
				}
				else{ 
var dataColorCalcOver = Number(dataColorCalc)-Number(dataColorCalc.toString().match(/\d+(?=\.)/g));
var rgbaString = rgbaString||"rgba("; 
var rgbaString = rgbaString+" "+dataColorCalcOver;
				}
			} 
			else if(deltaColorNumTest.toString() === "-"){
				if(Number(dataColorCalc)>=0){
var dataColorCalcOver = -1*Number(dataColorCalc)+Number(deltaColorNum[colorNum].toString().match(numberMatch))*Number(multiple); 
var rgbaString = rgbaString||"rgba("; 
var rgbaString = rgbaString+" "+dataColorCalc;
				}
				else{
var dataColorCalcOver = (-1*Number(dataColorCalc))-Number(dataColorCalc.toString().match(/\d+(?=\.)/g));
var rgbaString = rgbaString||"rgba("; 
var rgbaString = rgbaString+" "+dataColorCalcOver;
				}
			}
		}
	} 

var rgbaString = rgbaString.toString().replace(" ","");
var rgbaString = rgbaString.toString().replace(/\s/g,","); 
	return rgbaString+")";
};

var dimensionCalc = function dimensionCalc(numberString, multiple){
var deltaDimNum = numberString.toString().match(/\+\d+\.\d+|\+\.\d+|\+\d+|\-\d+\.\d+|\-\.\d+|\-\d+/g);  
var pointDimNum = numberString.toString().match(matches.pointData); 
var deltaDimNumTest = deltaDimNum[0].toString().match(/\+|\-/);
	if(deltaDimNumTest.toString() === "+"){ 
var calcDim = Number(deltaDimNum.toString().match(numberMatch))*Number(multiple)+Number(pointDimNum.toString().match(numberMatch));
	}
	else if(deltaDimNumTest === "-"){ 
var calcDim = -1*Number(deltaDimNum.toString().match(numberMatch))*Number(multiple)+Number(pointDimNum.toString().match(numberMatch));
	}
	return calcDim; 
}; 

var cloneSvg = function cloneSvg(points, linewidth, linecolor, fill, target, svgIndex){ 
	for(var svgNum=0; svgNum<svgIndex; svgNum++){ 
var cloneObject = document.getElementById(svgType).cloneNode(false); 
var pointsStringTest = points.match(/ellipse|pointsQ/); 

		if(pointsStringTest.toString() === "pointsQ"){ 
	cloneObject.setAttribute("d",pointCalc(points,svgNum));
		}
		else if(pointsStringTest.toString() === "ellipse"){ 
var ellNumMatch = points.toString().match(numberMatch), deltaTest = points.toString().match(/\+|\-/g); 
var xradNum = Number(ellNumMatch[1]), xradDelta = Number(ellNumMatch[0]), yradNum = Number(ellNumMatch[3]), yradDelta = Number(ellNumMatch[2]); 
var xcentNum = Number(ellNumMatch[5]), xcentDelta = Number(ellNumMatch[4]), ycentNum = Number(ellNumMatch[7]), ycentDelta = Number(ellNumMatch[6]); 
	
	for(var ellNum=0; ellNum<4; ellNum++){ 
		if(deltaTest[ellNum].toString() === "+"){ 
var calcRadX = xradNum+xradDelta*Number(svgNum), calcRadY = yradNum+yradDelta*Number(svgNum), calCentX = xcentNum+xcentDelta*Number(svgNum), calCentY = ycentNum+ycentDelta*Number(svgNum); 
		}
		else if(deltaTest[ellNum].toString() === "-"){ 
var calcRadX = xradNum+xradDelta*-1*Number(svgNum), calcRadY = yradNum+yradDelta*-1*Number(svgNum), calCentX = xcentNum+xcentDelta*-1*Number(svgNum), calCentY = ycentNum+ycentDelta*-1*Number(svgNum); 
		}
	cloneObject.setAttribute("cx",calCentX); 
	cloneObject.setAttribute("cy",calCentY);
	cloneObject.setAttribute("rx",calcRadX); 
	cloneObject.setAttribute("ry",calcRadY); 
	}
 
		}
	cloneObject.setAttribute("stroke",colorCalc(linecolor,svgNum)); 
	cloneObject.setAttribute("stroke-width",dimensionCalc(linewidth,svgNum)); cloneObject.setAttribute("fill",colorCalc(fill,svgNum));
	cloneObject.removeAttribute("id"); 
	target.getElementsByTagName("svg").item(0).appendChild(cloneObject);
	}
}; 

	for(var z=0;z<articles.length;z++){ 
var svgArticles = articles.item(z).getAttribute("class"); 
		if(svgArticles==="ktvg"){ 
var objectI = articles.item(z).getAttribute("target-object-i"); 
			for(var objNum=0;objNum<objectI;objNum++){ 
var targetInstruction = articles.item(z).getAttribute("target-instruction-"+(Number(objNum)+1)); 
var matchFunc = targetInstruction.toString().match(matches.func).toString(), charMatchFunc = matchFunc.match(charMat); 
var funcType = charMatchFunc[0], svgType = charMatchFunc[1], svgIndex = charMatchFunc[2]; 
var commandLine = instuctSearch(targetInstruction); 
var fillColorData = fillSearch(targetInstruction); 
var strokeColorData = strokeColorSearch(targetInstruction); 
var strokeData = strokeSearch(targetInstruction);  
	cloneSvg( commandLine, strokeData, strokeColorData, fillColorData, articles.item(z), svgIndex ); 
			}
		}
	}
