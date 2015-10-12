function XRFunc(a,b,c){  
	if(a==="include"){
var bMat = b.match(dML.getObject), bPa = bMat.toString().match(dML.getPath); 

var instObj = document.getElementsByTagName(bPa.toString().match(charMat)).item(0).getElementsByTagName("instruct");
var len = instObj.length;
			for(var i=0;i<len;i++){
var instTyp = instObj.item(i).getAttribute("type");  
				if(b.match(dML.getElement).toString()===instObj.item(i).getAttribute("data")){  
var clone = c.outerHTML; 
	instObj.item(i).innerHTML += clone; 
				}
			}
	}
	else if(a==="default"){ 
		if(c.getElementsByTagName("style").length>0){
var clone = c.outerHTML; 
document.getElementsByTagName("memory").item(0).innerHTML += clone;	
		}
		else{
var clone = c.outerHTML; 
	document.getElementsByTagName("memory").item(0).innerHTML += clone;
		}
				}{}
}

function dMLObject(a,b){ 
	if(a==="all"){
	xr.open("get","/site_index.xml",false); xr.send(); 
	siteobj = xr.responseText, xsite = xmlp.parseFromString(siteobj,"text/xml"); 

	document.getElementsByTagName("memory").item(0).appendChild(xsite.getElementsByTagName("root").item(0));}
	else if(a==="selected"){ 
	xr.open("get","/"+b.toString().match(charMat)+"/library_index.html",false); xr.send(); 
	liobj = xr.responseText, xli = xmlp.parseFromString(liobj,"text/html");

mXml = {
	"memory": {
		"object": xli.getElementsByTagName("memory"), 
		"block": xli.getElementsByTagName("block"), 
		"temp": xli.getElementsByTagName("temp"),  
	}
};
		for(var z in mXml.memory){ 
			if(z==="block"){ 
				for(var p=0;p<mXml.memory[z].length;p++){ 
var bO = xli.getElementsByTagName(z), bOdat = bO.item(p).getAttribute("data"); 
dmlArg = bOdat.match(dML.getData);  
	XRFunc(dmlArg,bOdat,bO.item(p)); } } 

			else if(z==="temp"){ 
				for(var p=0;p<mXml.memory[z].length;p++){ 
var tO = xli.getElementsByTagName(z), tOdat = tO.item(p).getAttribute("data"); 
dmlArg = tOdat.match(dML.getData); 
	XRFunc(dmlArg,tOdat,tO.item(p)); } }
			else{}}}
	else{}
}

function dMLPath(a,b,c){ 
	if(a=="{site"){ dMLObject(b,c); }
	else{ dMLObject(b,c); }
}

function tMLMatch(a,b,c){ 
var matchObject = b.getElementsByTagName("class"), utilMatchPart = a.match(tML.getPart), utilMatchVersion = a.match(tML.getVersion);  c.setAttribute("class",utilMatchVersion); 
	for(var z=0;z<matchObject.length;z++){
var classType = matchObject.item(z).getAttribute("type");
var matchItem = matchObject.item(z).getElementsByTagName("style"); 
	if(classType.toString()===utilMatchPart.toString().match(charMat).toString()){ 
		for(var y=0;y<matchItem.length;y++){
var matchItemType = matchItem.item(y).getAttribute("data"); 
			if(matchItemType.toString()===utilMatchVersion.toString().match(charMat).toString()){ 
	//document.getElementsByTagName("style").item(0).innerHTML += matchItem.item(y).innerHTML; 
			}
		}
	} 
	}
}

function tMLXR(a,b){ 
var xrMat = a.match(tML.getXR), xrStg = xrMat.toString().match(charMat), template = a.match(tML.getTemplate), templateStg = template.toString().match(charMat); 
var tempId = document.getElementById(template.toString().match(charMat)); 
var version = a.match(tML.getVersion); 
	b.item(0).setAttribute("class",version); 
//var writeStyle = tempId.getElementsByClassName(version).item(0).innerHTML||"";
//	document.getElementsByTagName("style").item(0).innerHTML += writeStyle;

	if(xrStg.toString()==="this"){ 
var utilbar = b.item(0).getElementsByTagName("utilbar"); 
		for(var z=0;z<utilbar.length;z++){ 
var instruct = utilbar.item(z).getElementsByTagName("instruct"); 
var utilbarType = utilbar.item(z).getAttribute("type"); 
	tMLMatch(utilbarType,tempId,utilbar.item(z)); 
			for(var y=0;y<instruct.length;y++){ 
var instructType = instruct.item(y).getAttribute("type");  
	tMLMatch(instructType,tempId,instruct.item(y));
			} } }
	else{
	xr.open("get","library_index.xml",false); xr.send(); 
	indobj = xr.responseText; xind = xmlp.parseFromString(indobj,"text/xml"); 
	}
}

function template(){ 
var dev = document.body.getAttribute("editor"), mem = document.getElementsByTagName("memory").item(0);
var typeAtt = document.body.getAttribute("type"), dataAtt = document.body.getAttribute("data"), root = document.getElementById("directory"); 

	dMLFunc(dataAtt); 
	tMLFunc(typeAtt); 

var blogFeaturedArticle = document.getElementById("featured_blog").getAttribute("file-href");
var blogFeaturedCategory = document.getElementById("featured_blog").getAttribute("name"); 
var blogFeaturedDated= document.getElementById("featured_blog").getAttribute("pub"); 
	xr.open("get","../blogs/"+blogFeaturedCategory+"/"+blogFeaturedDated+"/"+blogFeaturedArticle,false); 
	xr.send(); 
	xrFeaturedResponse = xr.responseText; xrFeaturedParse = xmlp.parseFromString(xrFeaturedResponse,"text/html");

var string = xrFeaturedParse.getElementsByTagName("body").item(0).innerHTML; 

targetDisplay = document.getElementById("target_blog_display"); 
	targetDisplay.innerHTML = string; 
	document.getElementById("featuredstories_button").click();
	
var pTag = targetDisplay.getElementsByTagName("div").item(0).getElementsByTagName("p");
var aTag = targetDisplay.getElementsByTagName("div").item(0).getElementsByTagName("a");

	for(var z=0;z<aTag.length;z++){
var spanAnchorTag = aTag.item(z).getElementsByTagName("span"); 
		for(var y=0;y<spanAnchorTag.length;y++){
	aTag.item(z).innerHTML = spanAnchorTag.item(0).innerHTML; 
		}
	}

	for(var z=0;z<pTag.length;z++){
var  allTag = pTag.item(z).getElementsByTagName("*");
newLine = document.createElement("br");
		if(pTag.item(z).hasAttribute("style")){
var myString = ".kipGen"+z+"{"+pTag.item(z).getAttribute("style")+"}"; 
	document.getElementsByTagName("style").item(0).innerHTML += myString ;
	allTag.item(0).removeAttribute("style");
			}else{ null; } 
		if(allTag.length>2){ 
			for(var y=0;y<allTag.length;y++){
				if(allTag.item(y).getElementsByTagName("*").length<1){ 
					if(allTag.item(0).hasAttribute("style")){
var myString = ".kipGen"+z+"{"+allTag.item(0).getAttribute("style")+"}"; 
	document.getElementsByTagName("style").item(0).innerHTML += myString ;
	allTag.item(0).removeAttribute("style");
					}else{ null; } 
	allTag.item(y).setAttribute("class","kipGen"+z);
 	targetDisplay.appendChild(allTag.item(y).cloneNode(true));
	targetDisplay.appendChild(newLine); 
					}
				else{  }
			}
		} 
		else{ 
	allTag.item(0).setAttribute("class","kipGen"+z);
	targetDisplay.appendChild(allTag.item(0).cloneNode(true));
	targetDisplay.appendChild(newLine); 
		}
	} 
	targetDisplay.getElementsByTagName("div").item(0).innerHTML = ""; 

}

function ev(a,b){
var switchArg = a.match(charMat)[0]; 
	switch(switchArg){
		
		case "classDropMenu":
var arrObj = b.match(charMat), tarObj = document.getElementById(arrObj[1]), desObj = document.getElementById(arrObj[2]), classObj = desObj.getElementsByClassName(arrObj[0]); 

	desObj.appendChild(tarObj);
	
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

		case "close": 

	document.getElementById("utility_memory").appendChild(document.getElementById(b));

		break;

		case "next": 
var matches = b.match(charMat);
var objA = matches[0], objB = matches[1], objC = matches[2];
var desObj = document.getElementById(objA), 
	urlObj = document.getElementById(objB), 
	readList = document.getElementById(objC);
var curInd = document.getElementById("blog_target").getAttribute("current-index"), urlLength = urlObj.getAttribute("url-i");
var contentList = readList.getElementsByTagName("ul").item(0), li = contentList.getElementsByTagName("li"), liLength = li.length; 

			if(Number(curInd)>=liLength){ 
	desObj.setAttribute("current-index","1");
	li.item(0).getElementsByTagName("button").item(0).click(); 
		} 
			else{ 
	desObj.setAttribute("current-index",Number(curInd)+1);
	li.item(Number(curInd)).getElementsByTagName("button").item(0).click(); 
			}

		break;
		
		case "previous":
var matches = b.match(charMat);
var objA = matches[0], objB = matches[1], objC = matches[2];
var desObj = document.getElementById(objA), 
	urlObj = document.getElementById(objB), 
	readList = document.getElementById(objC);
var curInd = desObj.getAttribute("current-index"), urlLength = urlObj.getAttribute("url-i");
var contentList = readList.getElementsByTagName("ul").item(0), li = contentList.getElementsByTagName("li"), liLength = li.length; 

			if(Number(curInd)<=1){ 
	desObj.setAttribute("current-index",liLength);
	li.item(liLength-1).getElementsByTagName("button").item(0).click(); 
		} 
			else{ 
var liNum = Number(curInd)-2;

	desObj.setAttribute("current-index",Number(curInd)-1);
	li.item(liNum).getElementsByTagName("button").item(0).click();
			} 

		break;	
		
		case "makeClassButton": 
var matches = b.match(charMat); 
var objA = matches[0], objB = matches[1], objC = matches[2]; 
var desObj = document.getElementById(objA), urlObj = document.getElementById(objB); 
var urlLength = urlObj.getAttribute("url-i"); 

	desObj.getElementsByTagName("ul").item(0).innerHTML = ""; 

			if(objC=="all"){ 
				for(var z=1;z<=urlLength;z++){ 
var createButton = document.createElement("button"), createLi = document.createElement("li"), 
	createAuthor = document.createElement("text"), createDate = document.createElement("text"); 
var catName = urlObj.getAttribute("url-category-"+z), urlAtt = urlObj.getAttribute("url-"+z); 
var catAtt = urlAtt.match(charMat), urlTitle = urlObj.getAttribute("url-title-"+z), urlSubCat = urlObj.getAttribute("url-sub-category-"+z); 

var clickString = "ev('[getSource,"+z+"]','"+urlAtt+"')";

	desObj.getElementsByTagName("ul").item(0).appendChild(createLi);
	desObj.getElementsByTagName("ul").item(0).setAttribute("content-category",objC); 
	createLi.appendChild(createButton); createLi.appendChild(createAuthor); createLi.appendChild(createDate);
	createButton.setAttribute("onclick",clickString);
	createButton.setAttribute("class","category_button");
	createButton.innerHTML = urlTitle; createAuthor.innerHTML = "asd"; createDate.innerHTML = "lkj";
	
				}
	desObj.getElementsByClassName("section_title").item(0).innerHTML = "Select a blog:" + "All"; 
	document.getElementById("blog_target").setAttribute("current-index","1");
	desObj.getElementsByTagName("ul").item(0).getElementsByTagName("li").item(0).getElementsByTagName("button").item(0).click();			}

			else if(objC=="featured"){
				for(var z=1;z<=urlLength;z++){ 
var createButton = document.createElement("button"), createLi = document.createElement("li"); 
var catName = urlObj.getAttribute("url-category-"+z), urlAtt = urlObj.getAttribute("url-"+z); 
var catAtt = urlAtt.match(charMat), urlTitle = urlObj.getAttribute("url-title-"+z);
var featured = urlObj.getAttribute("url-featured-"+z); 

					if(featured=="true"){ 
var clickString = "ev('[getSource,"+z+"]','"+urlAtt+"')";

	desObj.getElementsByTagName("ul").item(0).appendChild(createLi); 
	desObj.getElementsByTagName("ul").item(0).setAttribute("content-category",objC); 
	createLi.appendChild(createButton); 
	createButton.setAttribute("onclick",clickString);
	createButton.setAttribute("class","category_button");
	createButton.innerHTML = urlTitle; 

					} 
					else{ null; } 
				}
	desObj.getElementsByClassName("section_title").item(0).innerHTML = "Select a blog: " + " Featured"; 
	document.getElementById("blog_target").setAttribute("current-index","1");
	desObj.getElementsByTagName("ul").item(0).getElementsByTagName("li").item(0).getElementsByTagName("button").item(0).click();
			}
			else{
				for(var z=1;z<=urlLength;z++){ 
var createButton = document.createElement("button"), createLi = document.createElement("li"); 
var catName = urlObj.getAttribute("url-category-"+z), urlAtt = urlObj.getAttribute("url-"+z); 
var catAtt = urlAtt.match(charMat), urlTitle = urlObj.getAttribute("url-title-"+z); 

					if(objC==catAtt[1]){ 
var clickString = "ev('[getSource,"+z+"]','"+urlAtt+"')";

	desObj.getElementsByClassName("section_title").item(0).innerHTML = "Select a blog:" + catName; 
	desObj.getElementsByTagName("ul").item(0).appendChild(createLi); 
	desObj.getElementsByTagName("ul").item(0).setAttribute("content-category",objC); 
	createLi.appendChild(createButton); 
	createButton.setAttribute("onclick",clickString);
	createButton.setAttribute("class","category_button");
	createButton.innerHTML = urlTitle;  

					} 
					else{ null; } 
				}
	document.getElementById("blog_target").setAttribute("current-index","1"); 
	desObj.getElementsByTagName("ul").item(0).getElementsByTagName("li").item(0).getElementsByTagName("button").item(0).click(); 
			}

		break;
		
		case "getSource":
var num = a.match(charMat)[1]; 
	document.getElementById("blog_target").setAttribute("current-index",num);
	document.getElementById("blog_target").setAttribute("src",b);

		break;
		
		case "getSubcategory":
var matches = b.match(charMat); 
var objA = matches[0], string = matches[1]; 
var desObj = document.getElementById(objA), catObj = document.getElementsByTagName("category"); 
var i = memObj.getElementsByTagName("category").length, blockObj = document.getElementById("all_subcat").getElementsByTagName("button"); 


		if(string=="all"&&blockObj.length<1){
			for(var z=0;z<i;z++){
var catI = catObj.item(z).getAttribute("sub-category-i"), idString = catObj.item(z).getAttribute("id"); 
var idMat = idString.replace("cat","subcat"), idObj = document.getElementById(idMat); 
				for(var y=0;y<catI;y++){
var buttonObj = idObj.getElementsByTagName("button").item(y).cloneNode(true);

	document.getElementById("all_subcat").appendChild(buttonObj); 
	desObj.appendChild(document.getElementById("all_subcat"));

				} 
			} 
		} 
		else{ 
	desObj.appendChild(document.getElementById("all_subcat"));
		}

		break;
	}
}
