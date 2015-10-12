// JavaScript Document
"use strict";
var inputObject = document.getElementsByTagName("input"); 
	for(var z=0;z<inputObject.length;z++){  
var inputType = inputObject.item(z).getAttribute("type"), parentContainer = inputObject.item(z).parentNode, classAttr = parentContainer.getAttribute("class"), inputValue = inputObject.item(z).getAttribute("value"); 
		if(inputType.toString() === "color" && classAttr.toString() === "color"){ 
	inputObject.item(z).style.visibility = "hidden", inputObject.item(z).style.width = "0px", inputObject.item(z).style.height = "0px";
	parentContainer.innerHTML += "<section class='input_color'></section><button class='color_pallete_button' onclick='getColorWindow(this)'>Color Pallete</button><section class='selected_color'></section>"; 
var colorContainer = parentContainer.getElementsByClassName("input_color").item(0); 
	parentContainer.getElementsByClassName("selected_color").item(0).style.backgroundColor = inputValue; 
	colorContainer.setAttribute("toggle","hidden"); 
			for(var colorNumber=0;colorNumber<17;colorNumber++){ 
var numColor = (255/17)*(colorNumber); 
var redSection = "<section onclick='setColor(this)' class='red' style='background-color:rgba("+numColor+",0,0,1); width:13px; height:13px; position:absolute; left:0px;'></section>"; 
	colorContainer.innerHTML += redSection; 
var redSectionLite = "<section onclick='setColor(this)' class='redLite' style='background-color:rgba(255,"+numColor+","+numColor+",1); width:13px; height:13px; position:absolute; left:150px;'></section>"; 
	colorContainer.innerHTML += redSectionLite; 

var orangeSectionLite = "<section onclick='setColor(this)' class='orangeLite' style='background-color:rgba(255,"+numColor+",0,1); width:13px; height:13px; position:absolute; left:75px;'></section>"; 
	colorContainer.innerHTML += orangeSectionLite; 

var yellowSection = "<section onclick='setColor(this)' class='yellow' style='background-color:rgba("+numColor+","+numColor+",0,1); width:13px; height:13px; position:absolute; left:15px;'></section>"; 
	colorContainer.innerHTML += yellowSection; 
var yellowSectionLite = "<section onclick='setColor(this)' class='yellowLite' style='background-color:rgba(255,255,"+numColor+",1); width:13px; height:13px; position:absolute; left:90px;'></section>"; 
	colorContainer.innerHTML += yellowSectionLite; 
 
var greenSection = "<section onclick='setColor(this)' class='green' style='background-color:rgba(0,"+numColor+",0,1); width:13px; height:13px; position:absolute; left:30px;'></section>"; 
	colorContainer.innerHTML += greenSection; 
var greenSectionLite = "<section onclick='setColor(this)' class='greenLite' style='background-color:rgba("+numColor+",255,"+numColor+",1); width:13px; height:13px; position:absolute; left:105px;'></section>"; 
	colorContainer.innerHTML += greenSectionLite; 

var blueSection = "<section onclick='setColor(this)' class='blue' style='background-color:rgba(0,0,"+numColor+",1); width:13px; height:13px; position:absolute; left:45px;'></section>"; 
	colorContainer.innerHTML += blueSection; 
var blueSectionLite = "<section onclick='setColor(this)' class='blueLite' style='background-color:rgba("+numColor+","+numColor+",255,1); width:13px; height:13px; position:absolute; left:120px;'></section>"; 
	colorContainer.innerHTML += blueSectionLite; 

var purpleSection = "<section onclick='setColor(this)' class='purple' style='background-color:rgba("+numColor+",0,"+numColor+",1); width:13px; height:13px; position:absolute; left:60px;'></section>"; 
	colorContainer.innerHTML += purpleSection; 
var purpleSectionLite = "<section onclick='setColor(this)' class='purpleLite' style='background-color:rgba(255,"+numColor+",255,1); width:13px; height:13px; position:absolute; left:135px;'></section>"; 
	colorContainer.innerHTML += purpleSectionLite;
			} 
	colorContainer.getElementsByClassName("redLite").item(16).style.backgroundColor = "rgba(255,255,255,1)";
	colorContainer.getElementsByClassName("orangeLite").item(16).style.backgroundColor = "tan";
	colorContainer.getElementsByClassName("yellowLite").item(16).style.backgroundColor = "rgba(0,0,0,1)";
	colorContainer.getElementsByClassName("greenLite").item(16).style.backgroundColor = "rgba(75,75,75,1)";
	colorContainer.getElementsByClassName("blueLite").item(16).style.backgroundColor = "rgba(150,150,150,1)";
	colorContainer.getElementsByClassName("purpleLite").item(16).style.backgroundColor = "rgba(200,200,200,1)"; 
		} 
		else if(inputType === "number" && classAttr === "number"){
	inputObject.item(z).setAttribute("type","");
	parentContainer.innerHTML += "<button class='input_inc' onclick='increment(this)'>up</button><button class='input_dec' onclick='decrement(this)'>down</button>"; 
		}
	} 


var getColorWindow = function getColorWindow(a){ 
var parentWindow = a.parentNode, colorWindow = parentWindow.getElementsByClassName("input_color").item(0); 
var colorToggle = colorWindow.getAttribute("toggle"); 
	if(colorToggle.toString()==="hidden"){
	colorWindow.setAttribute("toggle","visible"); 
	colorWindow.style.height = "225px"; 
		for(var z=0;z<15;z++){
var redClass = colorWindow.getElementsByClassName("red").item(z); 
var redLiteClass = colorWindow.getElementsByClassName("redLite").item(z);
var orangeLiteClass = colorWindow.getElementsByClassName("orangeLite").item(z);
var yellowClass = colorWindow.getElementsByClassName("yellow").item(z); 
var yellowLiteClass = colorWindow.getElementsByClassName("yellowLite").item(z);
var greenClass = colorWindow.getElementsByClassName("green").item(z); 
var greenLiteClass = colorWindow.getElementsByClassName("greenLite").item(z);
var blueClass = colorWindow.getElementsByClassName("blue").item(z); 
var blueLiteClass = colorWindow.getElementsByClassName("blueLite").item(z);
var purpleClass = colorWindow.getElementsByClassName("purple").item(z); 
var purpleLiteClass = colorWindow.getElementsByClassName("purpleLite").item(z);
	redClass.style.top = z*15+"px"; 
	redLiteClass.style.top = z*15+"px"; 
	orangeLiteClass.style.top = z*15+"px"; 
	yellowClass.style.top = z*15+"px";
	yellowLiteClass.style.top = z*15+"px"; 
	greenClass.style.top = z*15+"px"; 
	greenLiteClass.style.top = z*15+"px"; 
	blueClass.style.top = z*15+"px"; 
	blueLiteClass.style.top = z*15+"px"; 
	purpleClass.style.top = z*15+"px"; 
	purpleLiteClass.style.top = z*15+"px"; 

		}
	}
	else{
	colorWindow.setAttribute("toggle","hidden");
	colorWindow.style.height = "";  
		for(var z=0;z<15;z++){
var redClass = colorWindow.getElementsByClassName("red").item(z); 
var redLiteClass = colorWindow.getElementsByClassName("redLite").item(z);
var orangeLiteClass = colorWindow.getElementsByClassName("orangeLite").item(z);
var yellowClass = colorWindow.getElementsByClassName("yellow").item(z); 
var yellowLiteClass = colorWindow.getElementsByClassName("yellowLite").item(z);
var greenClass = colorWindow.getElementsByClassName("green").item(z); 
var greenLiteClass = colorWindow.getElementsByClassName("greenLite").item(z);
var blueClass = colorWindow.getElementsByClassName("blue").item(z); 
var blueLiteClass = colorWindow.getElementsByClassName("blueLite").item(z);
var purpleClass = colorWindow.getElementsByClassName("purple").item(z); 
var purpleLiteClass = colorWindow.getElementsByClassName("purpleLite").item(z);
	redClass.style.top = ""; 
	redLiteClass.style.top = ""; 
	orangeLiteClass.style.top = ""; 
	yellowClass.style.top = "";
	yellowLiteClass.style.top = ""; 
	greenClass.style.top = ""; 
	greenLiteClass.style.top = ""; 
	blueClass.style.top = ""; 
	blueLiteClass.style.top = ""; 
	purpleClass.style.top = ""; 
	purpleLiteClass.style.top = ""; 

		}
	}
}; 

var setColor = function setColor(a){
var parentWindow = a.parentNode, containerWindow = parentWindow.parentNode, retrievedColor =  a.style.backgroundColor;
	containerWindow.getElementsByClassName("selected_color").item(0).style.backgroundColor = retrievedColor; 
	containerWindow.getElementsByTagName("input").item(0).setAttribute("value",retrievedColor); 
}; 

var fontColor = function fontColor(a){ 
var readerDisplay =  document.getElementById("target_blog_display"), selectedColor = a.getElementsByClassName("selected_color").item(0).style.backgroundColor; 
var readerSpan = readerDisplay.getElementsByTagName("span"), num = readerSpan.length; 

	for(var z=0;z<num;z++){ 
	readerSpan.item(z).style.color = selectedColor; 
	} 
};

var increment = function increment(a){ 
var parentContainer = a.parentNode, inputObject = parentContainer.getElementsByTagName("input").item(0);
var inputValue = Number(inputObject.value); 
	inputObject.value = inputValue+1; 
}; 

var decrement = function decrement(a){
var parentContainer = a.parentNode, inputObject = parentContainer.getElementsByTagName("input").item(0);
var inputValue = Number(inputObject.value); 
	inputObject.value = inputValue-1; 
}; 

var fontSize = function fontSize(a){ 
var dataAtt = a.getAttribute("target-object"), readerDisplay =  document.getElementById(dataAtt); 
var readerSpan = readerDisplay.getElementsByTagName("span"), num = readerSpan.length; 

	for(var z=0;z<num;z++){ 
var outputValue = a.getElementsByTagName("input").item(0).value+"px";
	readerSpan.item(z).style.fontSize = outputValue; 
	}
}; 

var canvasColor = function canvasColor(a){ 
var targetObject = a.getAttribute("target-object"); 
var outputValue = a.getElementsByClassName("selected_color").item(0).style.backgroundColor;
	document.getElementById("display").style.backgroundColor = outputValue; 
}; 
