// JavaScript Document
"use strict";
var currentDate = new Date(), getCurrentMonth = currentDate.getMonth(), getCurrentDayNum = currentDate.getDate(), getCurrentWeekNum = currentDate.getDay(), getCurrentYear = currentDate.getFullYear();

	if(getCurrentMonth===1){

var leapMonth = getCurrentDayNum; 

		if(leapMonth===29){ 

var leapMonth = leapMonth; 

		} 

		else{ 

var leapMonth = 28; 

		} 

	} 

	else{ 

var leapMonth= 28; 

	} 

var montharray = ["january","febraury","march","april","may","june","july","august","september","october","november","december"]; 
var dayarray = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]; 
var dotm = [31,leapMonth,31,30,31,30,31,31,30,31,30,31]; 

var timer = new Date();
var charMat = /\w+/g, apostMat = /\'/g;
var numberMatch = /\.\d+|\d+\.\d+|\d+/g, indexUnitMatch = /\d+px|\.\d+|\d+\.\d+|\d+cm|\.\d+|\d+\.\d+|\d+in/g, indexNumber = /\d+/g;

var rootObj = document.getElementsByTagName("root"), widgetObj = document.getElementsByTagName("widget"), memory = document.getElementsByTagName("memory").item(0);

var ev = function ev(a,b){
	switch(a){
		case "classDropMenu":
var arrObj = b.match(charMat), tarObj = document.getElementById(arrObj[1]), destObj = document.getElementById(arrObj[2]), classObj = destObj.getElementsByClassName(arrObj[0]); 

	destObj.appendChild(tarObj);
	
	if(classObj.length>=2){ document.getElementById("utility_memory").appendChild(classObj.item(0)); } 
	else{ null; } 
		break;

		case "toggle":
var matches = b.match(charMat);
var objA = matches[0], objB = matches[1];
var tar = document.getElementById(objA), desObj = document.getElementById(objB);

			if(tar.getAttribute("toggle")!="hidden"){ document.getElementById("utility_memory").appendChild(tar); tar.setAttribute("toggle","hidden"); } 
			else{ desObj.appendChild(tar); tar.setAttribute("toggle","visible"); } 
		break;

		case "dialogWin":
var matches = b.match(charMat);
var objA = matches[0], objB = matches[1], objC = matches[2];
var tar = document.getElementById(objA), desObj = document.getElementById(objB), classObj = desObj.getElementsByClassName(objC);

		if(classObj.length>0){ 
			document.getElementById("utility_memory").appendChild(classObj.item(0));  
			desObj.appendChild(tar); 
		}
		else{ 
			desObj.appendChild(tar);
		}
		break;

		case "close": 
	document.getElementById("utility_memory").appendChild(document.getElementById(b));
		break;

		case "next":
var matches = b.match(charMat);
var objA = matches[0], objB = matches[1];
var desObj = document.getElementById(objA), urlObj = document.getElementById(objB);
var curInd = desObj.getAttribute("current-index"), urlLength = urlObj.getAttribute("url-i");

	if(Number(curInd)>=urlLength){ 
var urlAtt = urlObj.getAttribute("url-1"); 

		desObj.setAttribute("current-index","1");
		desObj.setAttribute("src",urlAtt) }
	else{ 
var urlNum = Number(curInd)+1; 
var urlAtt = urlObj.getAttribute("url-"+urlNum);

		desObj.setAttribute("current-index",Number(curInd)+1); 
		desObj.setAttribute("src",urlAtt); } 
		break;
		
		case "previous":
var matches = b.match(charMat);
var objA = matches[0], objB = matches[1];
var desObj = document.getElementById(objA), urlObj = document.getElementById(objB);
var curInd = desObj.getAttribute("current-index"), urlLength = urlObj.getAttribute("url-i");

	if(Number(curInd)<=1){ 
var urlAtt = urlObj.getAttribute("url-"+urlLength); 

		desObj.setAttribute("current-index",urlLength);
		desObj.setAttribute("src",urlAtt) }
	else{ 
var urlNum = Number(curInd)-1; 
var urlAtt = urlObj.getAttribute("url-"+urlNum);

		desObj.setAttribute("current-index",Number(curInd)-2); 
		desObj.setAttribute("src",urlAtt); } 
		break;	
		
	}
};

var clock = function clock(){ 
var clockDate =  new Date(); 
	document.getElementsByTagName("clock").item(0).innerHTML = clockDate.toLocaleTimeString();  	
};  

var timer = function timer(subcategory,eventLoad,widgetIndex){ 
var timeDate = new Date(); 
var targetSubCat = document.getElementsByClassName(subcategory).item(0), num = Number(eventLoad)-1, startDate = targetSubCat.getElementsByTagName("article").item(0).getAttribute("start-date"), endDate = targetSubCat.getElementsByTagName("article").item(0).getAttribute("end-date"), openTime = targetSubCat.getElementsByTagName("article").item(0).getAttribute("open-time"), closeTime = targetSubCat.getElementsByTagName("article").item(0).getAttribute("close-time"); 
var startDateMatch = startDate.match(indexNumber); 
var timeRemainder = openTime.toString().match(indexNumber); 
var monthNum = startDateMatch[0]-1; 
var dayNum = startDateMatch[1]; 
var hourNum = timeRemainder[0]; 
var minuteNum = timeRemainder[1]; 
var endDateMatch = endDate.match(indexNumber); 
var closeRemainder = closeTime.toString().match(indexNumber); 
var endMonthNum = endDateMatch[0]-1; 
var endDayNum = endDateMatch[1]; 
var endHourNum = closeRemainder[0]; 
var endMinuteNum = closeRemainder[1];
var attBeginDate = new Date(startDateMatch[2],monthNum,dayNum,hourNum,minuteNum), firstCalc = (attBeginDate - timeDate)/1000; 
var attEndDate = new Date(endDateMatch[2],endMonthNum,endDayNum,endHourNum,endMinuteNum); 
var minutes = firstCalc/60; 
var hours = minutes/60; 
var days = hours/24; 
var numMatch = days.toString().match(indexNumber); 
var convertHours = (days-numMatch[0])*24; 
var numMatchMinutes = convertHours.toString().match(indexNumber); 
var convertMinutes = (convertHours-numMatchMinutes[0])*60; 
var numMatchSeconds = convertMinutes.toString().match(indexNumber); 
var convertSeconds = (convertMinutes-numMatchSeconds[0])*60; 
var seconds = convertSeconds.toString().match(indexNumber)[0]; 
	widgetObj.item(widgetIndex).getElementsByTagName("countdown").item(0).innerHTML = "Event starts in<br>"+numMatch[0]+" days "+numMatchMinutes[0]+" hours "+numMatchSeconds[0]+" minutes "+seconds+" seconds "; 

	if(attBeginDate<timeDate){ 
	widgetObj.item(widgetIndex).getElementsByTagName("countdown").item(0).innerHTML = "Event has Started"; 
	}else{}

	if(attEndDate<timeDate){ 
	widgetObj.item(widgetIndex).getElementsByTagName("countdown").item(0).innerHTML = "Event has Ended";  
	}else{} 

}; 

var eventCalender = function eventCalender(a){
var targetObject = document.getElementById(a.getAttribute("target-object")); 
	document.body.appendChild(targetObject); 
var calenderObject = document.getElementById("calenderObject"), boxObject = calenderObject.getElementsByTagName("box");	
var category = document.getElementsByClassName(a.getAttribute("target-directory")).item(0), categoryArticle = category.getElementsByTagName("article"); 
var month = calenderObject.getAttribute("month"), year = calenderObject.getAttribute("year"); 
	for(var z=0;z<categoryArticle.length;z++){ 
var startDate = categoryArticle.item(z).getAttribute("start-date"), articleTitle = categoryArticle.item(z).getAttribute("title"); 
		for(var y=0;y<boxObject.length;y++){ 
var calenderDateString = (Number(month)+1)+"/"+boxObject.item(y).innerHTML+"/"+year; 
			if(calenderDateString===startDate){ 
	boxObject.item(y).style.color = "red", boxObject.item(y).setAttribute("title","Event"); 
	boxObject.item(y).setAttribute("onclick","getEvent(this)"), boxObject.item(y).setAttribute("target-directory","fundraising_events"); 
	boxObject.item(y).setAttribute("event-id",articleTitle); 
			} 
			else{ 
	boxObject.item(y).setAttribute("title","No Event"); 
			} 
		} 
	} 
}; 

var getEvent = function getEvent(a){ 
var category = document.getElementsByClassName(a.getAttribute("target-directory")).item(0).getElementsByTagName("article"); 
var eventId = a.getAttribute("event-id"); 
	if(a.getElementsByTagName("section").length<1){ 
		for(var z=0;z<category.length;z++){ 
var articleTitle = category.item(z).getAttribute("title"), createSection = document.createElement("section");  
			if(articleTitle===eventId){
	a.appendChild(createSection);
	createSection.innerHTML += eventId+"<br>"+category.item(z).getAttribute("open-time")+" - "+category.item(z).getAttribute("close-time"); 
	createSection.style.width = "200px", createSection.style.height = "75px",createSection.style.backgroundColor = "rgba(100,100,255,.8)", a.style.zIndex = "1"; 
			} 
			else{
			} 
		} 
	} 
	else{
	a.getElementsByTagName("section").item(0).innerHTML = "";
	a.getElementsByTagName("section").item(0).outerHTML = ""; 
	a.style.zIndex = ""; 
	}
}; 

var nextMonth = function nextMonth(a){ 
var targetDirectory = a.parentNode.getElementsByTagName("widget").item(0); 
var calenderObject = document.getElementById("calenderObject"), boxObject = calenderObject.getElementsByTagName("box");	
var category = document.getElementsByClassName(targetDirectory.getAttribute("target-directory")).item(0), categoryArticle = category.getElementsByTagName("article"); 
var month = calenderObject.getAttribute("month"), year = calenderObject.getAttribute("year"); 
var firstDOM = new Date(); 
	firstDOM.setMonth(Number(month)+1); 
	firstDOM.setDate(1); 
	document.getElementById("month_title").innerHTML = montharray[firstDOM.getMonth()]; 
	document.getElementById("year_title").innerHTML = firstDOM.getFullYear(); 
	calenderObject.setAttribute("month",Number(month)+1), year = calenderObject.setAttribute("year",firstDOM.getFullYear()); 
var dateNum = 0; 
	for(var y=0;y<boxObject.length;y++){ 
		if(y>=firstDOM.getDay() && dateNum<Number(dotm[firstDOM.getMonth()])){ 
var dateNum = dateNum+1 || 1; 
	boxObject.item(y).innerHTML = dateNum, boxObject.item(y).style.color = "", boxObject.item(y).removeAttribute("onclick"), boxObject.item(y).setAttribute("title","No Event"); 
		} 
		else{ 
	boxObject.item(y).innerHTML = ""; 
		} 
	} 
	for(var z=0;z<categoryArticle.length;z++){ 
var startDate = categoryArticle.item(z).getAttribute("start-date"), articleTitle = categoryArticle.item(z).getAttribute("title"); 
		for(var y=0;y<boxObject.length;y++){ 
var month = calenderObject.getAttribute("month"), year = calenderObject.getAttribute("year"); 
var calenderDateString = (Number(month)+1)+"/"+boxObject.item(y).innerHTML+"/"+year; 
var eventId = boxObject.item(y).getAttribute("event-id"); 
			if(calenderDateString===startDate){ 
	boxObject.item(y).style.color = "red", boxObject.item(y).setAttribute("title","Event"); 
	boxObject.item(y).setAttribute("onclick","getEvent(this)"), boxObject.item(y).setAttribute("target-directory","fundraising_events"); 
	boxObject.item(y).setAttribute("event-id",articleTitle); 
			} 
		} 
	} 
}; 

var prevMonth = function prevMonth(a){ 
var targetDirectory = a.parentNode.getElementsByTagName("widget").item(0); 
var calenderObject = document.getElementById("calenderObject"), boxObject = calenderObject.getElementsByTagName("box");	
var category = document.getElementsByClassName(targetDirectory.getAttribute("target-directory")).item(0), categoryArticle = category.getElementsByTagName("article"); 
var month = calenderObject.getAttribute("month"), year = calenderObject.getAttribute("year"); 
var firstDOM = new Date(); 
	firstDOM.setMonth(Number(month)-1); 
	firstDOM.setDate(1); 
	document.getElementById("month_title").innerHTML = montharray[firstDOM.getMonth()]; 
	document.getElementById("year_title").innerHTML = firstDOM.getFullYear(); 
	calenderObject.setAttribute("month",Number(month)-1), year = calenderObject.setAttribute("year",firstDOM.getFullYear()); 
var dateNum = 0; 
	for(var y=0;y<boxObject.length;y++){ 
		if(y>=firstDOM.getDay() && dateNum<Number(dotm[firstDOM.getMonth()])){ 
boxObject.item(y).innerHTML = dateNum, boxObject.item(y).style.color = "", boxObject.item(y).removeAttribute("onclick"), boxObject.item(y).setAttribute("title","No Event");
var dateNum = dateNum+1 || 1; 
	boxObject.item(y).innerHTML = dateNum; 
		}
		else{ 
	boxObject.item(y).innerHTML = ""; 
		} 
	} 
	for(var z=0;z<categoryArticle.length;z++){ 
var startDate = categoryArticle.item(z).getAttribute("start-date"), articleTitle = categoryArticle.item(z).getAttribute("title"); 
		for(var y=0;y<boxObject.length;y++){ 
var month = calenderObject.getAttribute("month"), year = calenderObject.getAttribute("year"); 
var calenderDateString = (Number(month)+1)+"/"+boxObject.item(y).innerHTML+"/"+year; 
var eventId = boxObject.item(y).getAttribute("event-id"); 
			if(calenderDateString===startDate){  
	boxObject.item(y).style.color = "red", boxObject.item(y).setAttribute("title","Event"); 
	boxObject.item(y).setAttribute("onclick","getEvent(this)"), boxObject.item(y).setAttribute("target-directory","fundraising_events"); 
	boxObject.item(y).setAttribute("event-id",articleTitle); 
			} 
		} 
	} 
}; 

var getTimerData = function getTimerData(subcategory){ 
var targetSubCat = document.getElementsByClassName(subcategory).item(0), startDate = targetSubCat.getElementsByTagName("article").item(0).getAttribute("start-date"), endDate = targetSubCat.getElementsByTagName("article").item(0).getAttribute("end-date"), openTime = targetSubCat.getElementsByTagName("article").item(0).getAttribute("open-time"), closeTime = targetSubCat.getElementsByTagName("article").item(0).getAttribute("close-time"); 
var titlePart = "<textline>"+targetSubCat.getElementsByTagName("article").item(0).getAttribute("title")+"</textline><br>"; 
var datePart = "<textline>Starts on: "+startDate+" Ends On: "+endDate+"</textline><br>"; 
var startTimeMatch = openTime.match(indexNumber); 
var endTimeMatch = closeTime.match(indexNumber); 
	if(Number(startTimeMatch[0])>12){ var openTime = Number(startTimeMatch[0])-12 + ":"+startTimeMatch[1] +" pm"; } 
	else{ var openTime = openTime +" am" } 
	if(Number(endTimeMatch[0])>12){ var endTime = Number(endTimeMatch[0])-12 + ":"+endTimeMatch[1] + " pm"; } 
	else{ var endTime = closeTime + "am"; } 
var timePart = "<textline>Hours of operation:  "+openTime+" - "+endTime+"</textline>"; 
	document.getElementById("event_location").innerHTML = ""; 
	document.getElementById("event_location").innerHTML += targetSubCat.getElementsByTagName("article").item(0).getAttribute("location"); 
	document.getElementById("event_description").innerHTML = targetSubCat.getElementsByTagName("article").item(0).innerHTML; 
var string = titlePart+datePart+timePart; 
	return string; 
}; 

var slideShow = function slideShow(slideSet,imageTarget){ 
var slides = document.getElementById(slideSet), image = document.getElementById(imageTarget); 
var slideIndex = slides.getAttribute("current-slide"); 
	if(Number(slideIndex)<slides.getElementsByTagName("article").length){
	slides.setAttribute("current-slide",(Number(slideIndex)+1)); 
	}
	else{ slides.setAttribute("current-slide",1); }

var slideClass = slides.getElementsByTagName("article").item(Number(slideIndex)-1).getAttribute("class");
var slideCategory = slides.getAttribute("class"); 
var slideRoot = slides.parentNode.getAttribute("id"); 
var slideHref = slides.getElementsByTagName("article").item(Number(slideIndex)-1).getAttribute("file-href"); 
var urlString = slideRoot+"/"+slideCategory+"/"+slideClass+"/"+slideHref; 
	document.getElementById(imageTarget).src = urlString; 
}; 

function playSlide(a){ 
var directory = a.getAttribute("slide-set"), targetObject = a.getAttribute("target-object"); 
var interval = Number(a.getAttribute("slide-interval"))*1000; 
var slideState = document.getElementById(targetObject).getAttribute("slide-state"); 
	if(slideState.toString()==="pause"){ 
	document.getElementById(targetObject).setAttribute("slide-state","play"); 
	slideShowInterval = setInterval(function(){slideShow(directory,targetObject)},interval);  
	}
}; 

var pauseSlide = function pauseSlide(a){
var targetObject = a.getAttribute("target-object"); 
var slideState = document.getElementById(targetObject).getAttribute("slide-state"); 
	if(slideState.toString()==="play"){ 
	document.getElementById(targetObject).setAttribute("slide-state","pause"); 
	window.clearInterval(slideShowInterval); 
	}
}; 

var nextSlide = function nextSlide(a){
};

var previousSlide = function previousSlide(a){
};

var nextEvent = function nextEvent(widgetObject){ 
var widget =  document.getElementById(widgetObject.getAttribute("target-widget")); 
var targetDirectory = document.getElementsByClassName(widget.getAttribute("target-sub-category")).item(0).getElementsByTagName("article"); 
var tarSubCat = widget.getAttribute("target-sub-category"); 
	document.getElementsByClassName(tarSubCat).item(0).appendChild(targetDirectory.item(0)); 
	widget.getElementsByTagName("text").item(0).innerHTML = getTimerData(tarSubCat); 

var numEventA = widget.getAttribute("event-load"); 
	if(numEventA<targetDirectory.length){widget.setAttribute("event-load",(Number(numEventA)+1)); }
	else{ widget.setAttribute("event-load","1"); }
var numEvent = widget.getAttribute("event-load");
	document.getElementById("event_counter_display").getElementsByTagName("textline").item(0).innerHTML = numEvent; 
}; 

var previousEvent = function previousEvent(widgetObject){ 
var widget =  document.getElementById(widgetObject.getAttribute("target-widget")); 
var targetDirectory = document.getElementsByClassName(widget.getAttribute("target-sub-category")).item(0).getElementsByTagName("article"); 
var tarSubCat = widget.getAttribute("target-sub-category"); 
var classObj = document.getElementsByClassName(tarSubCat); 
	classObj.item(0).appendChild(targetDirectory.item(classObj.length-1)); 
	widget.getElementsByTagName("text").item(0).innerHTML = getTimerData(tarSubCat); 
var numEventA = widget.getAttribute("event-load"); 
	if(numEventA>1){widget.setAttribute("event-load",(Number(numEventA)-1)); } 
	else{ widget.setAttribute("event-load",targetDirectory.length); } 
var numEvent = widget.getAttribute("event-load"); 
	document.getElementById("event_counter_display").getElementsByTagName("textline").item(0).innerHTML = numEvent; 
}; 

var getObject = function getObject(a){ 
var targetString = a.getAttribute("target-object"), desString = a.getAttribute("target-destination"); 
var desObj = document.getElementById(desString), tarObj = document.getElementById(targetString); 
var desContent = desObj.innerHTML; tarContent = tarObj.innerHTML; 
	desObj.innerHTML = tarContent; 
}; 

var getWindow = function getWindow(a){ 
var targetString = a.getAttribute("target-object");  
var tarObj = document.getElementById(targetString); 
	document.body.appendChild(tarObj); 
}; 

var closeWindow = function closeWindow(a){
	document.getElementsByTagName("memory").item(0).appendChild(a.parentNode); 
}; 

var submitForm = function submitForm(a){ 
var donateForm = document.getElementById(a.getAttribute("target-form")), fromEmail = document.getElementById("email_input").value; 
var actionString = "/Default.aspx?A=Form&Email=stevenvansant@yahoo.com&Subject=Donations&EmailFrom="+fromEmail+"&PageID=shop/donate_redirect.html"; 
	donateForm.setAttribute("action",actionString); 
	document.getElementById("hidden_submit_button").click(); 
}; 

var submitContactForm = function submitContactForm(a){
var donateForm = document.getElementsByClassName(a.getAttribute("target-form")).item(0), fromEmail = document.getElementsByClassName("email_input").item(0).value; 
var actionString = "/Default.aspx?A=Form&Email=stevenvansant@yahoo.com&Subject=Donations&EmailFrom="+fromEmail+"&PageID=contact_us.html"; 
	donateForm.setAttribute("action",actionString); 
	document.getElementsByClassName("hidden_submit_button").item(0).click();
}; 

var submitVolunteerForm = function submitVolunteerForm(a){ 
var donateForm = document.getElementsByClassName(a.getAttribute("target-form")).item(0), fromEmail = document.getElementsByClassName("email_input").item(0).value; 
var actionString = "/Default.aspx?A=Form&Email=stevenvansant@yahoo.com&Subject=Donations&EmailFrom="+fromEmail+"&PageID=contact_us.html"; 
	donateForm.setAttribute("action",actionString); 
	document.getElementsByClassName("hidden_submit_button").item(0).click(); 
}; 

//Start widget load loop 
	for(var z=0;z<widgetObj.length;z++){ 
var widgetType = widgetObj.item(z).getAttribute("type");
		if(widgetType==="clock"){ var pageClockInterval = setInterval(function(){clock()},1000); } 
		else if(widgetType==="timer"){ 
var targetSubCat = widgetObj.item(z).getAttribute("target-sub-category"), loadEvent = widgetObj.item(z).getAttribute("event-load"), thisNum = z; 
var targetDirectory = document.getElementsByClassName(targetSubCat).item(0).getElementsByTagName("article"); 
 	widgetObj.item(z).getElementsByTagName("text").item(0).innerHTML = getTimerData(targetSubCat,loadEvent); 
	document.getElementById("event_counter_display").getElementsByTagName("textline").item(0).innerHTML = "1"; 
	document.getElementById("event_counter_display").getElementsByTagName("textline").item(1).innerHTML = targetDirectory.length;
var timerInterval = setInterval(function(){timer( targetSubCat, loadEvent, thisNum )},1000); 
		} 
		else if(widgetType==="slideShow"){ 
var directory = widgetObj.item(z).getAttribute("slide-set"), targetObject = widgetObj.item(z).getAttribute("target-object"); 
var interval = Number(widgetObj.item(z).getAttribute("slide-interval"))*1000; 
var slideShowInterval = setInterval(function(){slideShow(directory,targetObject)},interval); 
		}
		else if (widgetType==="grid"){
var widgetWidth = widgetObj.item(z).offsetWidth, widgetHeight =  widgetObj.item(z).offsetHeight; 
			for(var widthNum=0;widthNum<widgetWidth-1;widthNum++){
var gridBox = document.createElement("box");
	gridBox.style.position = "absolute";
	gridBox.style.left = widthNum+"px";
	gridBox.style.top = "0px";
	gridBox.style.width = "1px"; 
	gridBox.style.height = widgetHeight-2+"px"; 
	widgetObj.item(z).appendChild(gridBox);			
			}
		}
		else if(widgetType==="eventCalender"){
var directoryString = widgetObj.item(z).getAttribute("target-directory"), calenderObject = document.createElement("calender"); 
var calenderDate = new Date(), calenderMonth = calenderDate.getMonth(), calenderDay = calenderDate.getDate(), calenderYear = calenderDate.getFullYear(), calenderDayName = calenderDate.getDay(); 
var firstDOM = new Date(); 
	firstDOM.setDate(1); 
	calenderObject.setAttribute("id","calenderObject"), calenderObject.setAttribute("month",calenderMonth), calenderObject.setAttribute("year",calenderYear), widgetObj.item(z).appendChild(calenderObject); 
	document.getElementById("month_title").innerHTML = montharray[calenderMonth]; 
	document.getElementById("year_title").innerHTML = calenderYear; 
			for(var x=0;x<6;x++){ 
				for(var y=0;y<7;y++){ 
var num = widgetObj.item(z).getAttribute("box-index")||1; 
var boxObject = document.createElement("box"); 
	boxObject.style.position = "absolute", boxObject.style.left = y*50+"px", boxObject.style.top = x*50+"px"; 
	widgetObj.item(z).getElementsByTagName("calender").item(0).appendChild(boxObject); 
var boxLength = document.getElementById("calenderObject").getElementsByTagName("box").length; 
	widgetObj.item(z).setAttribute("box-index",(Number(num)+1)); 
var dateIndex = document.getElementById("calenderObject").getAttribute("date-index")||1; 
					if((boxLength-1) >= firstDOM.getDay() && Number(dateIndex) <= dotm[firstDOM.getMonth()]){ 
	firstDOM.setDate(dateIndex); 
	document.getElementById("calenderObject").getElementsByTagName("box").item(num-1).innerHTML = firstDOM.getDate(); 
	document.getElementById("calenderObject").setAttribute("date-index", Number(dateIndex)+1); 
					} 
				} 
			} 
	widgetObj.item(z).removeAttribute("box-index"); 
		} 
	}; 
// End of widget loop

// Beginning of input capatibility 

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

var opacitySection = "<text class='opacity' style='visibility:hidden;top:275px;position:absolute;'><br> Opacity:<br><section onclick='setColor(this)' class='opacity'></section><input onkeypress='getAlpha(this)' type='text' value='alpha'></text>"; 
	colorContainer.innerHTML += opacitySection; 
var colorText = "<text class='text_color' style='visibility:hidden;top:215px;position:absolute;'><br> rgba(): <br><section onclick='setColor(this)' class='text_color'></section><input type='text' onkeypress='getKeyColor(this)' value='rgb()'></text>"; 
	colorContainer.innerHTML += colorText; 
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
	colorWindow.style.height = "335px"; 
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
	colorWindow.getElementsByClassName("opacity").item(0).style.visibility = "visible"; 
	colorWindow.getElementsByClassName("text_color").item(0).style.visibility = "visible"; 
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
	colorWindow.getElementsByClassName("opacity").item(0).style.visibility = "hidden"; 
	colorWindow.getElementsByClassName("text_color").item(0).style.visibility = "hidden"
	}
}; 

var getKeyColor = function getKeyColor(a){
var colorValue = a.value , parentWindow = a.parentNode, colorWindow = parentWindow.parentNode.parentNode; 
var colorString = "rgba("+colorValue+",1)"; 
	colorWindow.getElementsByClassName("selected_color").item(0).style.backgroundColor = colorString; 
};

var getAlpha = function getAlpha(a){
var colorValue = a.value , parentWindow = a.parentNode, colorWindow = parentWindow.parentNode.parentNode; 
var colorString = colorWindow.getElementsByClassName("selected_color").item(0).style.backgroundColor.toString();
var colorMatch = colorString.match(/\d+/g);
var opacityChange = "rgba("+colorMatch[0]+","+colorMatch[1]+","+colorMatch[2]+","+colorValue+")"; 
	colorWindow.getElementsByClassName("selected_color").item(0).style.backgroundColor = opacityChange;  
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

//End of input capatibility