// JavaScript Document
"use strict"; 
var can = document.getElementById("drawing_canvas"), svgOutPut = document.getElementById("svg_output"); 

	document.getElementById("kip_header").addEventListener("click",function(){
	can.setAttribute("canvas-focus","false");
	});
	
	document.getElementById("kip_footer").addEventListener("click",function(){
	can.setAttribute("canvas-focus","false");
	});

	document.getElementById("path_end").addEventListener("click",function(){
	can.getElementsByClassName("menu_control").item(0).innerHTML = ""; 
	can.getElementsByClassName("menu_control").item(0).outerHTML = ""; 
	}); 

	document.getElementById("control_nodes").addEventListener("mouseup",function(){
var btnCls = document.getElementById("control_nodes"); 
	pathNode();
	}); 

var canvasEvent = function canvasEvent(tool){ 
	this.opt = document.getElementById(tool+"_opts")||"No option menu for object."; 
	this.menu = document.getElementById(tool+"-menu")||"No menu found for object."; 
}; 

var menu = { 
	opts:document.getElementsByClassName("right_mouse_event"), 
	tools:document.getElementsByClassName("drawing_tools"),
	toolopts:document.getElementsByClassName("tool_toggle"),
}; 

var docEv = {
	tar:can.addEventListener("mousedown",function(){ 
		can.setAttribute("canvas-focus","true");
	}),
	docKeyEvent:document.addEventListener("keydown",function(event){ 
var whichKey = event.which, canvasFocus = can.getAttribute("canvas-focus"), canvasTool = can.getAttribute("target-active-tool"); 
		if(canvasFocus.toString() === "true"){ 
var settings = new canvasEvent(canvasTool), setOpt = settings.opt, setMenu = settings.menu; 
			setKeyTool(canvasTool,whichKey,setOpt,setMenu); 
		}
	}),
};

var setKeyTool = function setKeyTool(tool,key,opt,eventMenu){
var menuOpt = eventMenu.getElementsByTagName("li"); 
	if(key === 13 && tool === "path"){ 
	setCheck(eventMenu.getElementsByTagName("li").item(0).getElementsByTagName("input").item(0)); 
	can.getElementsByClassName("menu_control").item(0).innerHTML = ""; 
	can.getElementsByClassName("menu_control").item(0).outerHTML = ""; 
	} 
	else if(key === 17 && tool === "path"){ 
	setCheck(eventMenu.getElementsByTagName("li").item(0).getElementsByTagName("input").item(1)); 
	pathNode(); 
	}
}; 

var setCheck = function setCheck(object){
	if(object.checked === true){
	object.checked = false; 
	}
	else if(object.checked === false){
	object.checked = true;
	}
};

var closeControlNodes = function closeControlNodes(){
var btnClass = can.getElementsByClassName("path_node"); 
	if(btnClass.item(0)){ 
		for(var btNo=0;btNo<btnClass.length;btNo++){
	btnClass.item(0).innerHTML=""; 
	btnClass.item(0).outerHTML=""; 
		}
	}
};

var pathNode = function pathNode(){ 
var nodeAtt = can.getAttribute("control-node")||"false"; 
var pathLength = Number(can.getAttribute("path-index")); 
var pathClass = can.getElementsByClassName("path").item(pathLength-1); 
var targetNode = can.setAttribute("target-node",pathLength-1); 
	if(nodeAtt === "false"){ 
	can.setAttribute("control-node","true"); 
var dataString = pathClass.getAttribute("d"), dataNumber = dataString.match(/\d+\,\d+/g), commandMatch = dataString.match(/m+|l+|q+/gi); 
var numMatchLength = dataNumber.length; 
		for(var nodeNum=0;nodeNum<commandMatch.length-1;nodeNum++){ 
var nodeButton = document.createElement("button"); 
var numMatch = dataNumber[nodeNum].toString().match(/\d+/g); 

	nodeButton.setAttribute("class","path_node"); 
	nodeButton.setAttribute("id","path_node"+nodeNum); nodeButton.setAttribute("title","Path Point Control"); 
	nodeButton.setAttribute("onmousedown","pathControlStart(this)"); nodeButton.setAttribute("onmouseup","pathControlEnd(this)"); 
	nodeButton.setAttribute("ondblclick","curvePathMenu(this)"); 
	nodeButton.setAttribute("onmouseover","clearTool(this)"); nodeButton.setAttribute("onmouseout","resetClearedTool(this)"); 
	nodeButton.style.position = "absolute"; nodeButton.style.zIndex = "3"; 
	nodeButton.style.width = "20px"; nodeButton.style.height = "20px"; 
	nodeButton.style.borderRadius = "20px"; nodeButton.style.backgroundColor = "rgba(255,100,100,.6)"; 
	nodeButton.style.top = numMatch[1]-10+"px"; nodeButton.style.left = numMatch[0]-10+"px"; 

	can.appendChild(nodeButton); 
		} 
	}
	else if(nodeAtt === "true"){
	can.setAttribute("control-node","false"); 
var pathNode = can.getElementsByClassName("path_node"), pathNodeLength = pathNode.length; 
		for(var pthNum=0;pthNum<pathNodeLength;pthNum++){
	pathNode.item(0).outerHTML = ""; 
		}
	}
}; 


var curvePathMenu = function curvePathMenu(object){ 
var createInput = document.createElement("input"), createEdit = document.createElement("button");
var createSection = document.createElement("menu"), createReset = document.createElement("button"); 
var createDataInfo = document.createElement("text"); 

	createSection.setAttribute("id","curve_path_menu"); 

var pathInd = can.getAttribute("path-index"); 
	if(document.getElementById("curve_path_menu")){ 
	document.getElementById("curve_path_menu").innerHTML = ""; 
	document.getElementById("curve_path_menu").outerHTML = ""; 
	}
	else{
var pInd = can.getAttribute("path-index"), btnId = object.getAttribute("id"), btnInd = btnId.match(/\d+/g); 
var dAtt = can.getElementsByClassName("path").item(Number(pInd)-1).getAttribute("d"); 

var dComAtt = dAtt.match(/m+\d+\,\d+|l+\d+\,\d+/gi), dataLen = dAtt.length; 
 
	createSection.style.position = "absolute"; 
	createSection.style.left = object.style.left; createSection.style.top = (Number(object.style.top.toString().match(/\d+/g))+5)+"px"; 
	createSection.style.width = "300px"; createSection.style.height = "150px"; createSection.style.backgroundColor = "red"; 
	createSection.setAttribute("onmouseover","clearTool(this);"); createSection.setAttribute("onmouseout","resetClearedTool(this);"); 
	createInput.setAttribute("type","text"); 
	createDataInfo.innerHTML = "<br><textline>Data Attribute: " + dAtt + "</textline><br><textline>Path Id: path"+pathInd+"</textline>"; 
	createEdit.setAttribute("onclick","editPath('path"+pathInd+"','"+btnInd+"')"); createEdit.innerHTML = "Edit Path"; 
	createReset.setAttribute("onclick","resetData(this)");
	createReset.innerHTML = "Reset Path"; 
	createSection.appendChild(createInput); createSection.appendChild(createEdit); createSection.appendChild(createReset); 
	createSection.appendChild(createDataInfo); 
	can.appendChild(createSection); 

	createInput.value = dComAtt[btnInd]; 
	}
};

var editPath = function editPath(objId,index){ 
var pathMenu = document.getElementById("curve_path_menu"); 
var dString = pathMenu.getElementsByTagName("input").item(0), textBox = pathMenu.getElementsByTagName("text"); 
var dAtt =  textBox.item(0).getElementsByTagName("textline").item(0).innerHTML, pathId =  textBox.item(0).getElementsByTagName("textline").item(1).innerHTML; 
var pathObj = document.getElementById(objId), pathDAtt = pathObj.getAttribute("d"); 
var dComAtt = pathDAtt.match(/m+\d+\,\d+|l+\d+\,\d+/gi); 
var replaceD = pathDAtt.replace(dComAtt[Number(index)],dString.value); 

	pathObj.setAttribute("d",replaceD); 
}; 

var resetData = function resetData(object){
}; 

var pathControlStart = function pathControlStart(btn){
var btnId = btn.getAttribute("id");
var canBtn = can.getElementsByTagName("button"); 
var pathTarget = can.getAttribute("target-node"); 
	can.setAttribute("onmousemove","coordinates(this,event);moveButton(document.getElementById('"+btnId+"'));"); 
}; 

var pathControlEnd = function pathControlEnd(btn){ 
	can.setAttribute("onmousemove","coordinates(this,event);"); 
}; 

var moveButton = function moveButton(btn){ 
var btnRadius = btn.style.borderRadius; 
var mx = can.getAttribute("mouse-x"), my = can.getAttribute("mouse-y"); 
var btnId = btn.getAttribute("id"); 
var pInd = Number(can.getAttribute("path-index")); 
	if(btnId.toString() === "path_node0"){
var btnId = btn.id, btnNum = btnId.toString().match(/\d+/g); 
var btnLeft = btn.style.left, btnTop = btn.style.top; 
var pathObj = can.getElementsByClassName("path").item(pInd-1), pData = pathObj.getAttribute("d"); 
var mx = can.getAttribute("mouse-x"), my = can.getAttribute("mouse-y"); 
var newNum = "M"+mx+","+my; 
var letterMatch = pData.match(/\w\d+\,\d+/g), pDataMatch = pData.toString().replace(letterMatch[btnNum].toString(),newNum); 
	pathObj.setAttribute("d",pDataMatch); 
	btn.style.top = Number(my)-10+"px"; btn.style.left = Number(mx)-10+"px"; 
	}
	else{ 
		if(btnRadius.toString() === "7px"){  
	btn.style.top = Number(my)-10+"px"; btn.style.left = Number(mx)-10+"px"; 
		} 
		else if(btnRadius.toString() === "20px"){ 
var btnId = btn.getAttribute("id"), btnNum = btnId.toString().match(/\d+/g); 
var btnLeft = btn.style.left, btnTop = btn.style.top; 
var pathObj = can.getElementsByClassName("path").item(pInd-1), pData = pathObj.getAttribute("d"); 
var mx = can.getAttribute("mouse-x"), my = can.getAttribute("mouse-y"); 
var newNum = "L"+mx+","+my; 
var letterMatch = pData.match(/\w\d+\,\d+/g), pDataMatch = pData.toString().replace(letterMatch[btnNum].toString(),newNum); 
	pathObj.setAttribute("d",pDataMatch); 
	btn.style.top = Number(my)-10+"px"; btn.style.left = Number(mx)-10+"px"; 
		}
	}
}; 

var coordinates = function coordinates(canvasObject,ev){ 
var eleXOffset = canvasObject.offsetLeft, eleYOffset = canvasObject.parentNode.offsetTop; 
var pXOffset = window.pageXOffset, pYOffset = window.pageYOffset; 
var coordX = Number(ev.clientX)-Number(eleXOffset)+Number(pXOffset), coordY = ev.clientY-eleYOffset+pYOffset; 
	canvasObject.setAttribute("mouse-x",coordX); 
	canvasObject.setAttribute("mouse-y",coordY); 
};

var getTool = function getTool(a){ 
var toolImg = a.getElementsByTagName("img").item(0), toolClass = a.getAttribute("class"); 
var drawingCanvas = a.getAttribute("target-canvas"), canvasObject = document.getElementById(drawingCanvas); 
	canvasObject.setAttribute("target-active-tool",toolClass); 
	switch(toolClass){
		case "pointer": 
	canvasObject.style.cursor = "url(img/selection_cursor.png),pointer"; 
	closeControlNodes();
		break;
		case "paint_brush": 
	canvasObject.style.cursor = "url(img/paint_brush.png),pointer";
	closeControlNodes();
		break; 
		case "polygon":
	canvasObject.style.cursor = "url(img/polygon.png),pointer"; 
	closeControlNodes();
		break;
		case "path":
	canvasObject.style.cursor = "url(img/path_symbol.png),pointer"; 
	closeControlNodes();
		break;
		case "dripper":
	canvasObject.style.cursor = "url(img/dripper.png),pointer"; 
	closeControlNodes();
		break;
		case "color_pallet":
	canvasObject.style.cursor = "url(img/color_pallet.png),pointer"; 
	closeControlNodes();
		break;
		case "text":
	canvasObject.style.cursor = "url(img/text.png),text"; 
	closeControlNodes();
		break;
		case "crosshatch":
	canvasObject.style.cursor = "url(img/crosshatch.png),text"; 
	closeControlNodes();
		break;
		case "eraser":
	canvasObject.style.cursor = "url(img/eraser.png),text"; 
	closeControlNodes();
		break;
	}
}; 

var startDraw = function startDraw(canvasObject,ev){
var activeTool =  canvasObject.getAttribute("target-active-tool"); 
	if(activeTool === "pointer"){
var group = canvasObject.getElementsByTagName("g");
		for(var gNum=0;gNum<group.length;gNum++){
			if(group.getAttribute("target-active-hover") === "true"){}
			else{}
		} 
	}
	else if(activeTool === "paint_brush"){ 
var brushInd = canvasObject.getAttribute("brush-index")||0;
var brushInd = Number(brushInd)+1;
	canvasObject.setAttribute("brush-index",brushInd);
	canvasObject.setAttribute("onmousemove","coordinates(this,event);paintBrush(this,event);");
	}
	else if(activeTool === "polygon"){ 
var polygonInd = canvasObject.getAttribute("polygon-index")||0; 
var yCoord = canvasObject.getAttribute("mouse-y"), xCoord = canvasObject.getAttribute("mouse-x"); 
	canvasObject.setAttribute("polygon-x-center",xCoord);
	canvasObject.setAttribute("polygon-y-center",yCoord); 
var polygonInd = Number(polygonInd)+1; 
	canvasObject.setAttribute("polygon-index",polygonInd); 
	canvasObject.setAttribute("onmousemove","coordinates(this,event);polygon(this,event);"); 
	}
	else if(activeTool === "path"){ 
var pathInd = canvasObject.getAttribute("path-index")||0; 
var yCoord = canvasObject.getAttribute("mouse-y"), xCoord = canvasObject.getAttribute("mouse-x"); 
	canvasObject.setAttribute("path-x",xCoord); 
	canvasObject.setAttribute("path-y",yCoord); 
var buttonLever = canvasObject.getElementsByClassName("menu_control"); 
var pathGLength = buttonLever.length+1, leverLength = buttonLever.length; 
var cx = canvasObject.getAttribute("mouse-x"), cy = canvasObject.getAttribute("mouse-y"); 
		if(leverLength<1){ 
	document.getElementById("path_end").checked = false; 
	can.setAttribute("path-index",Number(pathInd)+1); 
var buttonControl = document.createElement("button"); 
var pathObject = document.getElementById("path").cloneNode(false); 
	buttonControl.setAttribute("class","menu_control"); 
	canvasObject.appendChild(buttonControl); 
var leverButton = canvasObject.getElementsByClassName("menu_control").item(0); 
	leverButton.style.left = Number(cx)-10+"px"; leverButton.style.top = Number(cy)-10+"px"; leverButton.style.position = "absolute"; 
	leverButton.style.width = "20px"; leverButton.style.height = "20px"; leverButton.style.zIndex = "3"; 
	leverButton.style.borderRadius = "10px"; leverButton.style.border = "solid 1px rgba(25,25,25,.7)"; 
	leverButton.style.backgroundColor = "rgba(200,200,255,.4)"; leverButton.style.zIndex = "3"; 
	leverButton.setAttribute("onmousedown","pathControl(this,event)"); leverButton.setAttribute("ondblclick","curvePathMenu(this)"); 

	pathObject.setAttribute("d","M"+cx+","+cy); 

	pathObject.setAttribute("class","path"); pathObject.setAttribute("id","path"+(Number(pathInd)+1)); 
	pathObject.setAttribute("onmouseout","this.style.opacity='1'"); pathObject.setAttribute("onmouseover","this.style.opacity='.5'"); 

	canvasObject.getElementsByTagName("svg").item(0).appendChild(pathObject); 
		} 
		else{ 
	buttonLever.item(leverLength-1).style.left = Number(cx)-10+"px"; buttonLever.item(leverLength-1).style.top = Number(cy)-10+"px"; 
		}
	canvasObject.setAttribute("onmousemove","coordinates(this,event);path(this,event);"); 
	}
	else if(activeTool === "dripper"){} 
	else if(activeTool === "text"){} 
	else if(activeTool === "crosshatch"){} 
	else if(activeTool === "eraser"){} 
};

var endDraw = function endDraw(canvasObject,ev){
var activeTool =  canvasObject.getAttribute("target-active-tool"); 
	if(activeTool === "pointer"){
var group = canvasObject.getElementsByTagName("g");
		for(var gNum=0;gNum<group.length;gNum++){
			if(group.getAttribute("target-active-hover") === "true"){} 
			else{} 
		} 
	}
	else if( activeTool === "paint_brush" ){ 
	canvasObject.setAttribute("onmousemove","coordinates(this,event);"); 
	}
	else if( activeTool === "polygon" ){
	canvasObject.setAttribute("onmousemove","coordinates(this,event);"); 
	}
	else if( activeTool === "path" ){ 
var currentPath = canvasObject.getElementsByClassName("path"), curPathLength = currentPath.length; 
var pathObj = currentPath.item(curPathLength-1); 
var xC = canvasObject.getAttribute("mouse-x"), xY = canvasObject.getAttribute("mouse-y"); 
var dAtt = pathObj.getAttribute("d");  
	pathObj.setAttribute("stroke-width",document.getElementById("stroke_size_adjust").getElementsByTagName("input").item(0).value); 
	pathObj.setAttribute("stroke",document.getElementById("stroke_color_change").getElementsByClassName("selected_color").item(0).style.backgroundColor); 
	pathObj.setAttribute("fill",document.getElementById("fill_color_change").getElementsByClassName("selected_color").item(0).style.backgroundColor);
	pathObj.setAttribute("d",dAtt+" L"+xC+","+xY); 
	canvasObject.setAttribute("onmousemove","coordinates(this,event);"); 

	} 
};

var paintBrush = function paintBrush(canvas,ev){ 
var toolOptsObject = document.getElementById("paint_brush_opts");
var dotSetting = toolOptsObject.getElementsByTagName("input").item(0);  
var lineSetting = toolOptsObject.getElementsByTagName("input").item(2); 
var svgCanvas = canvas.getElementsByTagName("svg").item(0); 

	if(dotSetting.checked===true && lineSetting.checked===false){
var cloneCircle = document.getElementById("ellipse").cloneNode(false);
var dotDiameter = toolOptsObject.getElementsByTagName("input").item(1).value; 
	cloneCircle.removeAttribute("id");
var brushInd = canvas.getAttribute("brush-index")||0;
var yCoord = canvas.getAttribute("mouse-y"), xCoord = canvas.getAttribute("mouse-x"); 
	cloneCircle.setAttribute("class","paint_brush"+brushInd);
	cloneCircle.setAttribute("rx",Number(dotDiameter)/2);
	cloneCircle.setAttribute("ry",Number(dotDiameter)/2);
	cloneCircle.setAttribute("cx",xCoord);
	cloneCircle.setAttribute("cy",yCoord);
	cloneCircle.setAttribute("stroke",document.getElementById("stroke_color_change").getElementsByClassName("selected_color").item(0).style.backgroundColor);
	cloneCircle.setAttribute("onclick","setCanvasMenu(this);"); 
	cloneCircle.setAttribute("fill",document.getElementById("fill_color_change").getElementsByClassName("selected_color").item(0).style.backgroundColor);
	cloneCircle.setAttribute("stroke-width",document.getElementById("stroke_size_adjust").getElementsByTagName("input").item(0).value);
	svgCanvas.appendChild(cloneCircle); 
	}
	else if(dotSetting.checked===false && lineSetting.checked===true){
var clonePath = document.getElementById("path").cloneNode(false);
var lineLength = toolOptsObject.getElementsByTagName("input").item(3).value; 
	clonePath.removeAttribute("id");
var yCoord = Number(canvas.getAttribute("mouse-y")), xCoord =  Number(canvas.getAttribute("mouse-x")); 
	cloneCircle.setAttribute("class","paint_brush"+brushInd);
	clonePath.setAttribute("d","M"+xCoord+","+yCoord+" l0,"+lineLength);
	clonePath.setAttribute("stroke",document.getElementById("stroke_color_change").getElementsByClassName("selected_color").item(0).style.backgroundColor);
	clonePath.setAttribute("fill",document.getElementById("fill_color_change").getElementsByClassName("selected_color").item(0).style.backgroundColor);
	clonePath.setAttribute("stroke-width",document.getElementById("stroke_size_adjust").getElementsByTagName("input").item(0).value);
	canvas.getElementsByTagName("svg").item(0).appendChild(clonePath);
	}
}; 

var polygon = function polygon(canvas,ev){ 
var polyBlock = document.getElementById("polygon_opts"); 
var polySides = polyBlock.getElementsByTagName("input").item(0).value; 
var centerXPoint = canvas.getAttribute("polygon-x-center"), centerYPoint = canvas.getAttribute("polygon-y-center"); 
var mouseX = canvas.getAttribute("mouse-x"), mouseY = canvas.getAttribute("mouse-y"); 
var polyXLength = Number(mouseX)-Number(centerXPoint), polyYLength = Number(mouseY)-Number(centerYPoint); 
var polyXPow = Math.pow(polyXLength,2), polyYPow = Math.pow(polyYLength,2), sumPolyPow = polyXPow+polyYPow; 
var polyHyp = Math.sqrt(sumPolyPow), roundPolyHyp = Math.round(polyHyp); 
var polyDegree = 360/polySides; 
var degreeConvert = (polyDegree/180)*Math.PI; 
var sideLength = polyHyp*Math.sin(degreeConvert/2); 
var currentRotation = Math.atan(polyYLength/polyXLength); 
	for(var ptNum=0;ptNum<polySides;ptNum++){ 
var rotation = degreeConvert*ptNum, coord = coord||""; 
var coord = (polyHyp*Math.cos(rotation))+","+(polyHyp*Math.sin(rotation))+" "+coord; 
	} 
var polygonIndex = canvas.getAttribute("polygon-index");  
var polygonLength = canvas.getElementsByTagName("svg").item(0).getElementsByTagName("polygon").length; 
		if(polygonLength < Number(polygonIndex)){
var polyClone = document.getElementById("polygon").cloneNode(false); 
var group = document.getElementById("group").cloneNode(false); 
	polyClone.setAttribute("id","polygon"+polygonIndex); 
	group.removeAttribute("id"); 
	group.appendChild(polyClone);
	canvas.getElementsByTagName("svg").item(0).appendChild(group); 		
		}
	document.getElementById("polygon"+polygonIndex).setAttribute("points",coord); 
	document.getElementById("polygon"+polygonIndex).setAttribute("fill",document.getElementById("fill_color_change").getElementsByClassName("selected_color").item(0).style.backgroundColor); 
	document.getElementById("polygon"+polygonIndex).setAttribute("stroke",document.getElementById("stroke_color_change").getElementsByClassName("selected_color").item(0).style.backgroundColor); 
	document.getElementById("polygon"+polygonIndex).setAttribute("stroke-width",document.getElementById("stroke_size_adjust").value);  
	document.getElementById("polygon"+polygonIndex).setAttribute("transform","translate("+centerXPoint+","+centerYPoint+")rotate("+(currentRotation*180)/Math.PI+")");
}; 

var path = function path(canvas,ev){ 
var buttonLever = canvas.getElementsByClassName("menu_control"); 
var leverLength = buttonLever.length;
var yCoord = canvas.getAttribute("mouse-y"), xCoord = canvas.getAttribute("mouse-x");  
 
	buttonLever.item(leverLength-1).style.left = Number(xCoord)-10+"px"; buttonLever.item(leverLength-1).style.top = Number(yCoord)-10+"px"; 
};  

var setCanvasMenu = function setCanvasMenu(object,ev){ 
var objClass = object.getAttribute("class"); 
var objIndex = objClass.match(/\d+/g); 
var menuObj = document.createElement("menu"), closeObj = document.createElement("button"); 
var activeTool = can.getAttribute("target-active-tool"); 
var menuInd = can.getElementsByTagName("menu").length;
	if(activeTool === "paint_brush" && menuInd < 1){ 
var cx = object.getAttribute("cx"), cy = object.getAttribute("cy"); 
var rx = object.getAttribute("rx"), ry = object.getAttribute("ry"); 
var memMenu = document.getElementById(activeTool+"-menu"); 

	closeObj.innerHTML = "Close"; closeObj.setAttribute("onclick","closeMenu(this,event)"); 

	menuObj.style.position = "absolute"; menuObj.style.top = Number(cy)+"px"; menuObj.style.left = Number(cx)+"px"; 
	menuObj.style.width = "300px"; menuObj.style.height = "200px"; menuObj.style.backgroundColor = "red"; 
	menuObj.style.zIndex = "3"; 
	menuObj.setAttribute("onmouseout","resetClearedTool(this)"); menuObj.setAttribute("onmouseover","clearTool(this)");

	menuObj.appendChild(closeObj); menuObj.appendChild(memMenu); can.appendChild(menuObj); 
	}
	else{
var mouseX = can.getAttribute("mouse-x"), mouseY = can.getAttribute("mouse-y"); 
	can.getElementsByTagName("menu").item(0).style.left = mouseX+"px";
	can.getElementsByTagName("menu").item(0).style.top = mouseY+"px"; 
	}
}; 

var pathControl = function pathControl(ctrBtn,ev){
var drawingCanvas = document.getElementById("drawing_canvas");
var cx = drawingCanvas.getAttribute("mouse-x"), cy = drawingCanvas.getAttribute("mouse-y");  
		if(ev.button === 0){}
		else if(ev.button === 1){}
		else if(ev.button === 2){ 
			if(document.getElementsByTagName("menu").length<1){
var controlMenu = document.createElement("menu"), closeBtn = document.createElement("button"); 

	controlMenu.setAttribute("class","path_menu"); 
	controlMenu.setAttribute("onmouseout","resetClearedTool(this)"); controlMenu.setAttribute("onmouseover","clearTool(this)"); 
	document.getElementById("drawing_canvas").appendChild(controlMenu); 
var menuObj = drawingCanvas.getElementsByClassName("path_menu").item(0); 

	menuObj.style.position = "absolute"; menuObj.style.top = cy+"px"; menuObj.style.left = cx+"px"; 
	menuObj.style.width = "400px"; menuObj.style.height = "200px"; menuObj.style.zIndex = "3"; 
	menuObj.style.border = "2px outset rgba(200,0,0,1)"; menuObj.style.backgroundColor = "red"; 
	
	menuObj.appendChild(closeBtn); 
	closeBtn.setAttribute("class","close_menu"); closeBtn.setAttribute("onclick","closeMenu(this,event)");  
var closeObj = menuObj.getElementsByClassName("close_menu").item(0); 
	
	closeObj.style.position = "absolute"; closeObj.style.width = "80px"; closeObj.style.height = "20px"; 
	closeObj.style.left = "360px"; closeObj.style.top = "-2px"; 
	closeObj.style.fontSize = "11px"; 
	closeObj.innerHTML = "Close"; 

var memMenu = document.getElementById("path-menu"); 
	menuObj.appendChild(memMenu); 
			}
			else{
var menuObj = can.getElementsByTagName("menu").item(0);
	menuObj.style.top = cy+"px"; menuObj.style.left = cx+"px";
			}
		} 
}; 

var clearTool = function clearTool(object){  
var drawingCanvas = document.getElementById("drawing_canvas"); 
var mousedownString = drawingCanvas.getAttribute("onmousedown"), mouseUpString = drawingCanvas.getAttribute("onmouseup"); 
	drawingCanvas.setAttribute("clear-up",mouseUpString); drawingCanvas.setAttribute("clear-down",mousedownString); 
	drawingCanvas.removeAttribute("onmousedown"); 
	drawingCanvas.removeAttribute("onmouseup");
}; 

var resetClearedTool = function resetClearedTool(object){ 
var drawingCanvas = document.getElementById("drawing_canvas"); 
var mousedownString = drawingCanvas.getAttribute("clear-down"), mouseUpString = drawingCanvas.getAttribute("clear-up"); 
	drawingCanvas.setAttribute("onmouseup",mouseUpString); drawingCanvas.setAttribute("onmousedown",mousedownString)
}; 

var closeMenu = function closeMenu(object){
var drawingCanvas = document.getElementById("drawing_canvas"); 
var parent = object.parentNode, menuBlock = parent.getElementsByTagName("block").item(0);
var mousedownString = drawingCanvas.getAttribute("clear-down"), mouseUpString = drawingCanvas.getAttribute("clear-up"); 

	drawingCanvas.setAttribute("onmouseup",mouseUpString); drawingCanvas.setAttribute("onmousedown",mousedownString)
	drawingCanvas.removeAttribute("clear-down"); drawingCanvas.removeAttribute("clear-up");
	document.getElementsByTagName("memory").item(0).appendChild(menuBlock);
	parent.outerHTML = ""; 
}; 

var toggleClass = function toggleClass(object,elementIdString,elementClassString){ 
var tar = document.getElementById(elementIdString), classAttr = tar.getAttribute("class").toString();
var classObject = object.parentNode.getElementsByClassName(elementClassString); 

		if(tar.getAttribute("toggle")!="hidden"){
	tar.setAttribute("toggle","hidden"); 
	document.getElementsByTagName("memory").item(0).appendChild(tar);
		} 
		else{ 
	object.parentNode.appendChild(tar); tar.setAttribute("toggle","visible"); 
		} 
		for(var classNum=0;classObject.length;classNum++){ 
			if(elementIdString!==classObject.item(classNum).getAttribute("id").toString()){
	classObject.item(classNum).setAttribute("toggle","hidden"); 
	document.getElementsByTagName("memory").item(0).appendChild(classObject.item(classNum));	
			} 
		} 
}; 
