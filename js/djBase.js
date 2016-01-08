"use strict"
// JavaScript Document 

		// Development Team: Kip Omaha

		// Developers:
			// Steven Van Sant ( alias: Kip )

				// Dev Date:
					// 12/27/2015

		// Redistribituion of this package isn't authorized.


// **********************************************************************************************************************************
// ************************************************************ Start Library *******************************************************
// **********************************************************************************************************************************


var pageDate = new Date(), ev = window.event, page = [], Page = [], pLCycle = [];

var testSyntax = {
	Id: /\w+(?=\|\#\,)|\w+(?=\|\#\;)/,
	Class: /\w+(?=\|\.\,)|\w+(?=\|\.\;)/,
	Name: /\w+(?=\|_,)|\w+(?=\|_;)/,
	Tag: /\w+(?=\|,)|\w+(?=\|;)/,
	endFlag: /\;/,
	flag: /\,/,
	semiColonFlag: /\;/,
	barFlag: /\|/,
	operFlag: /\+|\-|\*|\//,
};

var getSyntax = {
	Id: /\w+(?=\|\#\,)|\w+(?=\|\#\;)/g,
	Class: /\w+(?=\|\.\,)|\w+(?=\|\.\;)/g,
	Name: /\w+(?=\|_,)|\w+(?=\|_;)/g,
	Tag: /\w+(?=\|,)|\w+(?=\|;)/g,
	endFlag: /\;/g,
	flag: /\,/g,
	semiColonFlag: /\;/,
	barFlag: /\|/g,
	operFlag: /\+|\-|\*|\//g,
};

var number = {
	rational: /\-\d+\.\d+|\-\.\d+|\-\d+|\d+\.\d+|\.\d+|\d+/g,
	unitSec: /\d+\.\d+(?=s)|\.\d+(?=s)|\d+(?=s)/g,
	numberSyntax: function( _string, _array ){
var _func = function( _stg ){
var _numItem = "", _num = [];

	for( var c=0; c < _stg.length; c++ ){

	testSyntax.barFlag.test( _stg[c] ) === true ?
		( _num.push( _numItem.match( number.rational )[0] ),
		  _numItem = "" ) :
		( _numItem += _stg[c] );

	};

	 _num.push( _stg[ _stg.length-1 ].match(getSyntax.operFlag)[0] );

	return _num;

};

var _execute_math = function( _params ){
var _numSets = [];

var _origin = Number( _params[0] ),
	_num = Number( _params[2] );

	for( var n=1; n <= _params[1]; n++ ){

		_params[3] === "+" ?
		( _numSets.push( _origin + ( _num* n ) ) ) :
		( _params[3] === "-" ?
			( _numSets.push( _origin - ( _num*n ) ) ) :
			( _params[3] === "*" ?
				( _numSets.push( _origin * ( _num * n ) ) ) :
				( _params[3] === "/" ?
					( _numSets.push( _origin / ( _num * n ) ) ) :
					( "NaN" ) ) ) );

	};

	return _numSets;

};

var _array = _array || [], _tempString = "";

		for( var i=0; i < _string.length; i++ ){

	testSyntax.flag.test( _string[i] ) === true ?
		( _array.push( _execute_math( _func( _tempString ) ) ), _tempString = "", 
		  _tempString = "" ) :
		( testSyntax.semiColonFlag.test( _string[i] ) === true ?
			( _array.push( _execute_math( _func( _tempString ) ) ), _tempString = "" ) :
			  _tempString += _string[i] );

		};

	return _array;

	},

};

var _searchFunc = function( search_param, comparison_param ){
var _matched;

	comparison_param === search_param ?

	_matched = comparison_param :

	_matched = "null";

	return _matched;

};

var constuctElement = function( Id, Class, Name, Html ){

	this.id = Id;
	this.class = Class;
	this.name = Name;
	this.html = Html;

};

var underScore = function( _string ){

	return _string.replace( /\_/g, " " );

};

var getId = function( _id_param ){
var _array = [],
	_id_match = _id_param.match( /\w+(?=\,)|\w+(?=\;)|\w+(?=\" ")/g ),
	_testFunc = function( _id_param ){

		for( var c=0; c < _id_param.length; c++ ){

var _get_test = _id_param[c] === "undefined" ?
	"null" : document.getElementById( _id_param[c] );

	_get_test !== "null" ? _array.push( _get_test ) : _array.push( "null" );

		};

	};

	testSyntax.semiColonFlag.test( _id_param ) === true ? _testFunc( _id_match ) : _testFunc( [ _id_param ] );
	_array = _array.length === 1 ? _array[0] : _array;

	return _array;

},

	_ = getId;

var getClass = function( _class_param ){ 
var _array = [],
	_class_match = _class_param.match( /\w+(?=\,)|\w+(?=\;)|\w+(?=\" ")/g ),
	_testFunc = function( _class_param ){

		for( var c=0; c < _class_param.length; c++ ){

var _get_test = _class_param[c] === "undefined" ?
	"null" : document.getElementsByClassName( _class_param[c] );

	_get_test !== "null" ? _array.push( _get_test ) : _array.push( "null" );

		};

	};

	testSyntax.semiColonFlag.test( _class_param ) === true ? _testFunc( _class_match ) : _testFunc( [ _class_param ] );
	_array = _array.length === 1 ? _array[0] : _array;

	return _array;

	},
	_cS = getClass, 
	_cs = getClass; 

var getTag = function( _tag_param ){
var _array = [],
	_tag_match = _tag_param.match( /\w+(?=\,)|\w+(?=\;)|\w+(?=\" ")/g ),
	_testFunc = function( _tag_param ){

		for( var c=0; c < _tag_param.length; c++ ){

var _get_test = _tag_param[c] === "undefined" ?
	"null" : document.getElementsByTagName( _tag_param[c] );

	_get_test !== "null" ? _array.push( _get_test ) : _array.push( "null" );

		};

	};

	testSyntax.semiColonFlag.test( _tag_param ) === true ? _testFunc( _tag_match ) : _testFunc( [ _tag_param ] );
	_array = _array.length === 1 ? _array[0] : _array;

	return _array;

	},

	_tN = getTag,
	_tn = getTag; 

var getName = function( _name_param ){ 
var _array = [],
	_name_match = _name_param.match( /\w+(?=\,)|\w+(?=\;)|\w+(?=\" ")/g ),
	_testFunc = function( _name_param ){

		for( var c=0; c < _name_param.length; c++ ){

var _get_test = _name_param[c] === "undefined" ?
	"null" : document.getElementsByName( _name_param[c] );

	_get_test !== "null" ? _array.push( _get_test ) : _array.push( "null" );

		};

	};

	testSyntax.semiColonFlag.test( _name_param ) === true ? _testFunc( _name_match  ) : _testFunc( [ _name_param ] );
	_array = _array.length === 1 ? _array[0] : _array;

	return _array;

	},
	_nM = getName,
	_nm = getName; 

var getElement = function( syntax ){
var _return = [],
		_id_test = testSyntax.Id.test( syntax ) === true ? 
			_return.push( _( syntax.match( getSyntax.Id ).toString().match(/\w+/g).toString() + ";" ) ) : "",

		_class_test = testSyntax.Class.test( syntax ) === true ? 
			_return.push( _cs( syntax.match( getSyntax.Class ).toString().match(/\w+/g).toString() + ";" ) ) : "",

		_name_test = testSyntax.Name.test( syntax ) === true ? 
			_return.push( _nm( syntax.match( getSyntax.Name ).toString().match(/\w+/g).toString() + ";" ) ) : "",

		_tag_test = testSyntax.Tag.test( syntax ) === true ? 
			_return.push( _tn( syntax.match( getSyntax.Tag ).toString().match(/\w+/g).toString() + ";" ) ) : "";

	return _return;

},
	_get = getElement;

var restartIntervalListener = function( _update ){

var restart_test = _update.length >= 1 ? 
		( pLCycle = _update, timeline = window.setInterval( function(){

	pLCycle.metaScan();

	}, 100 ), _update ) :

		( timeline = window.setInterval( function(){

	pLCycle.metaScan();

	}, 100 ), pLCycle );

	return restart_test;

	};

	String.prototype.toJSON = function(){
var _update_string = this.replace( "}", ",'autoTime':'" + pageDate.getTime() + "',}" );

var _qoutes_a = _update_string.replace( /\'\'(?=\,)|\'\'(?=\})|\'\'(?=\:)/g,'"null"' );

var _qoutes_b = _qoutes_a.replace(/\'+/g,'"');

var _space = _qoutes_b.replace( /\s+/g, "" );

var _final_comma = _space .replace( /\,(?=\})+/g, "" );

var _fix = _final_comma.replace(/\"+(?=\")/g, '",' );

	return JSON.parse( _fix );

	};

	String.prototype.getElement = function(){
var _return = [],
		_id_test = testSyntax.Id.test( this ) === true ? 
			_return.push( _( this.match( getSyntax.Id ).toString().match(/\w+/g).toString() + ";" ) ) : "",

		_class_test = testSyntax.Class.test( this ) === true ? 
			_return.push( _cs( this.match( getSyntax.Class ).toString().match(/\w+/g).toString() + ";" ) ) : "",

		_name_test = testSyntax.Name.test( this ) === true ? 
			_return.push( _nm( this.match( getSyntax.Name ).toString().match(/\w+/g).toString() + ";" ) ) : "",

		_tag_test = testSyntax.Tag.test( this ) === true ? 
			_return.push( _tn( this.match( getSyntax.Tag ).toString().match(/\w+/g).toString() + ";" ) ) : "";

	return _return;

	};

	String.prototype.underScore = function( ){

	return this.replace( /\_/g, " " );

	};

	Object.prototype.make = function( _array ){
var _jsn;
	this.hasAttribute("data-json") === true ?
		( _jsn = this.getAttribute("data-json").toJSON(), 
		  this.setAttribute( "id", _jsn.id ),
		  this.setAttribute( "class", _jsn.class ),
		  this.setAttribute( "name", _jsn.name ) ) : false;

	_array !== undefined ? _array.push( _jsn ) : undefined;

	try{
var _box_const = [], _interval_const = [];

		_jsn.box !== undefined ?

			( _box_const.push( new constuctElement( _jsn.id, _jsn.class, _jsn.name, _jsn.html ) ),
			  _box_const[0].addBoxSet( _jsn ),
			  Page.push( _box_const[0] ) ) :

			( _jsn.interval !== undefined ?

				( _interval_const.push( new constuctElement( _jsn.id, _jsn.class, _jsn.name, _jsn.html ) ),
			 	  _interval_const[0].addIntervalListener( "null" ),
			 	  pLCycle.push( _interval_const[0] ) ) :

				( Page.push( new constuctElement( _jsn.id, _jsn.class, _jsn.name, _jsn.html ) ) ) );

	return _jsn;

	}
	catch(e){

	return _jsn;

	}

	};

	Object.prototype.page = function( _array ){

var arr = _array || [], 
	_obj = [];

	this.length === undefined ? _obj.push( this ) : _obj = this;

			for( var i=0; i < _obj.length; i++ ){
var _create = _obj[i].make();

		_array !== undefined ?
			( _create !== undefined ? 
				( arr.push( _create ), page.push( _create ) ) : undefined
			) : _create !== undefined ?
					page.push( _create ) :
					undefined;

			}

	return arr;

	};

	Object.prototype.addIntervalListener = function( _func, _jsn ){

	typeof _jsn === "string" ? 
		( this.pLCEvent = _func,
		  this.interval = _jsn, 
		  this.autoInterval = pageDate.getTime() ) : 
		typeof _jsn === "object" ? 
			( this.pLCEvent = _func,
		  	  this.interval = _jsn.interval,
		  	  this.autoInterval = pageDate.getTime() ) :
		  	  ( this.pLCEvent = _func,
		  		this.interval = page.getJsonById( this.id ).interval,
		  		this.autoInterval = pageDate.getTime() );

	return this;

	};

	Object.prototype.stopAddedInterval = function( objId ){

	objId === undefined ? 
		window.clearInterval( "timeline" ) :
		pLCycle.getJsonById( objId ).interval = "false";

	return this;

	};

	Object.prototype.addBoxSet = function( _jsn ){
		
		typeof _jsn === "string" ? 
		( this.box = _jsn.getElement() ) : 
		typeof _jsn === "object" ? 
			( this.box = _jsn.box.getElement() ) :
		  	  ( this.box = page.getJsonById( this.id ).box.getElement() );
	
	return this;

	};

	Array.prototype.getJsonById = function( search_param ){
var _matched = "";

		for( var i=0; i < this.length; i++){
var _search = this[i] === "null" ? "null" : _searchFunc( search_param, this[i].id );

	_search === "null" ? "null" : _matched = this[i];

		};

	return _matched;

	};

	Array.prototype.getJsonByClassName = function( search_param ){
var _matched = [];

		for( var i=0; i < this.length; i++){
var _search = this[i] === "null" ? "null" : _searchFunc( search_param, this[i].class );

	_search === "null" ? 
		"null" : 
			( _matched.push( this[i] ) );

		}

	return _matched;

	};

	Array.prototype.getJsonByName = function( search_param ){
var _matched = [];

		for( var i=0; i < this.length; i++){
var _search = this[i] === "null" ? "null" : _searchFunc( search_param, this[i].name );

	_search === "null" ?
		"null" :
		( _matched.push( this[i] ) );

		}

	return _matched;

	};

	Array.prototype.getJsonByTagName = function( search_param ){
var _matched = [];

		for( var i=0; i < this.length; i++){
var _search = this[i] === "null" ? "null" : _searchFunc( search_param, this[i].html );

	_search === "null" ?
		"null" :
		( _matched.push( this[i] ) );

		}

	return _matched;

	};

	Array.prototype.metaScan = function(){

var	_scan = function( obj ){
var _new = new Date(), scan_time = _new.getTime();

	for( var i=0; i < obj.length; i++ ){

var lapse = scan_time-obj[i].autoInterval;

	obj[i].interval !== "false" ?
		( Number(obj[i].interval.match(number.unitSec))*1000 < lapse) ?
			( obj[i].pLCEvent(), obj[i].autoInterval = scan_time ) : ( false ) : ( false );

	};

};

var _quite_interval = function( obj ){
var _bolean_arr = [];

	for( var i=0; i < obj.length; i++ ){

	obj[i].interval !== "false" ?
		true :
		_bolean_arr.push( "false" );

	};

	return _bolean_arr;

};

var _if_False = this.length === _quite_interval( this ).length ?
		( window.clearInterval( timeline ), "false" ) :
		( this.length >= 1 ?
			( _scan( this ), "true" ) :
			( window.clearInterval( timeline ), "false" ) );

	return _if_False;

	};

var update = function( _obj, _array, deep ){
var _deepFunc = function( _object, _arr ){

	for( var i=0; i < _object.length; i++ ){

	_object[i].getElementsByTagName("*").page( _arr );
	
	}

	return _object;

},
	_json = /true/.test( deep ) === true ?
	( _obj.page( _array ),
	  _deepFunc( _obj, _array ) ) :

	_obj.page( _array );

	return _json;

};

var timeline = window.setInterval( function(){

	pLCycle.metaScan();

}, 100 );


// **********************************************************************************************************************************
// *********************************************************** CODE START **********************************************************
// **********************************************************************************************************************************


// **********************************************************************************************************************************
// ************************************************************ Start Library *******************************************************
// **********************************************************************************************************************************


// *************** NOTE:  This function is a beta for the djBase.js library.
	// SUMMARY:  


var currentBox = "",
	addBoxEvent = function( _displayFunc, _boxSetId, _currentBox ){
var section = document.createElement("section");
	section.setAttribute( "class", "autoBox" );

	_cs( 'autoBox' ).length === 0 ?
	( document.body.appendChild( section ), currentBox = _currentBox,
	  Page.getJsonById( _boxSetId ).boxEvent = _displayFunc,
	  _cs( 'autoBox' )[0].innerHTML = _displayFunc() ) :

	( _currentBox === currentBox ?
		( _cs( 'autoBox' )[0].innerHTML = "", _cs( 'autoBox' )[0].outerHTML = "", currentBox = _currentBox )  :
		(  Page.getJsonById( _boxSetId ).boxEvent = _displayFunc, _cs( 'autoBox' )[0].innerHTML = _displayFunc(), currentBox = _currentBox ) );

};


// *************** NOTE:  mains is a div update.


var mains = update( _tn("div"), undefined, "true" ), currentNav = "";


// *************** NOTE:  Loop is to add eventlisteners.


	for( var i=0; i < Page[5].box[0][0].length; i++ ){

	Page.getJsonById( "headerButton" + (i+1) ).dropMenu = page.getJsonById( "headerButton" + (i+1) ).dropMenu;

	Page[5].box[0][0][i].addEventListener( "click", function(ev){
var _listFunc = function( _obj ){

	currentNav = _obj.id;

	for( var i=0; i < Page.getJsonById( _obj.id ).dropMenu.length; i++ ){

	Page[5].box[0][1][0].innerHTML += "<button name='" + Page.getJsonById( _obj.id ).dropMenu[i] + "'>" + Page.getJsonById( _obj.id ).dropMenu[i] + "</button>";

	};
};


	Page[5].box[0][1][0].innerHTML === "" ?
		_listFunc( this ) : 
		( currentNav === this.id && _cs("autoBox").length === 1) ? 
		( Page[5].box[0][1][0].innerHTML = "", _cs( "autoBox" )[0].innerHTML = "", _cs( "autoBox" )[0].outerHTML = "", currentNav = "" ) :
		( currentNav === this.id && _cs("autoBox").length === 0) ?
		  Page[5].box[0][1][0].innerHTML = "" :
		( Page[5].box[0][1][0].innerHTML = "", _listFunc( this ) );

	});

	};


// *************** NOTE:  End Loop.

var _currentHomeArticle = 0;
	_( Page[14].id ).addEventListener( "click", function(ev){

	for(var i=0;i<Page[14].box[0].length;i++){
	Page[14].box[0][i].setAttribute("style", Page[14].box[0][1].getAttribute("style") );
	}

	_( "kipHeadLine" ).appendChild( Page[14].box[0][0] );

	for(var i=0;i<Page[14].box[0].length-1;i++){
	_( "kipHeadLine" ).appendChild( Page[14].box[0][0] );
	}

	_( "display" ).appendChild( Page[14].box[0][Page[14].box[0].length-1] );

	Page[14].box[0][0].removeAttribute("style" );

	});

	_( Page[15].id ).addEventListener( "click", function(ev){

	for(var i=0;i<Page[15].box[0].length;i++){
	Page[15].box[0][i].setAttribute("style", Page[15].box[0][1].getAttribute("style") );
	}

	Page[15].box[0][1].removeAttribute("style" );
	_( "kipHeadLine" ).appendChild( Page[15].box[0][0] );
	_( "display" ).appendChild( Page[15].box[0][0] );

	});

	Page[5].box[0][1][0].addEventListener( "click", function( ev ){
var _style = function( p,t,l,w,h,m,pd,bc){
	_cs( "autoBox" )[0].style.position = p;
	_cs( "autoBox" )[0].style.top = t;
	_cs( "autoBox" )[0].style.left = l;
	_cs( "autoBox" )[0].style.width = w;
	_cs( "autoBox" )[0].style.height = h;
	_cs( "autoBox" )[0].style.margin = m;
	_cs( "autoBox" )[0].style.padding = pd;
	_cs( "autoBox" )[0].style.backgroundColor = bc;
};

	ev.target.getAttribute("name") === "Inline_JSON" ?
		( addBoxEvent( function(){

	_style("absolute","37mm","0%","90%","50%","5mm","5mm","rgba(0,100,255,1)");
var _title = "<h3>Inline JSON</h3>",
	_nav = "<nav style='background-color:white;'><a href='inline_json.html'>Inline JSON Home</a> <b>||</b> <a href='json_application_library.html'>JSON Application Library</a> <b>||</b> <a href='github'>Git Hub</a></nav>",
	_paragraph = "<p>An inline JSON peer group is being formed now, please get involved. " +
	"To get involved in the open review group just navigate to the Inline JSON home page and get started. " +
	"Everything you need is there including some useful web applications to help you learn.</p>" +
	"<p>In addition to web applications, Kip, also produces a javascript library that allows inline JSON to be used in an html " +
	"file stored as a 'data-json' attribute. The library can be found either on the Inline JSON home page or by pressing " + 
	"the Javascript button next to the inline JSON button.</p>" + 
	"<p>REMEMBER: The inline JSON concept is in review to be submitted to standards groups that already have an existing inline JSON " +
	"project or are interested in learning about what inline JSON is.</p>",
	_snippet = _title + _nav + _paragraph;

	return _snippet;
	
			}, "headerButton1", "Inline_JSON" ) ) :

	ev.target.getAttribute("name") === "IDE" ?
		( addBoxEvent( function(){
	
	_style("absolute","37mm","0%","90%","50%","5mm","5mm","rgba(255,100,0,1)");
var _title = "<h3>IDE</h3>",
	_nav = "<nav style='background-color:white;'><a href='ide.html'>IDE Home</a> <b>||</b> <a href='ide_min.html'>IDE Min</a> <b>||</b> <a href='github'>Git Hub</a></nav>",
	_paragraph = "<p>Kip is proud to present, 'Project IDE', a development environment made for science.<br><br> " +
	"Project IDE will be complete on January 31, 2015, we apologize for the inconvenience.<br> To make up for this we allow access to "+ 
	"some features of the project as we develop them for you to use to help you learn and develop ideas. These resources can be found on the IDE Min page.</p>" + 
	"<p>The IDE's concept, is to build a web application for all sciences that can be used to learn and share at the same time.</p>",
	_snippet = _title + _nav + _paragraph;

	return _snippet;
	
			}, "headerButton1", "IDE" ) ) :
	
	ev.target.getAttribute("name") === "Javascirpt" ?
		( addBoxEvent( function(){
	
	_style("absolute","37mm","0%","90%","50%","5mm","5mm","rgba(0,255,100,1)");
var _title = "<h3>Javascript</h3>",
	_nav = "<nav style='background-color:white;'><a href='javascript.html'>Javascript Home</a> <b>||</b> <a href='javascript_applications.html'>Javascript App Library</a> <b>||</b> <a href='gihub'>GitHub</a></nav>",
	_paragraph = "<p>Kip is proud to present our, 'Project Javascript', designed to provide tools and guidance for javascript developers.<br>The resources include:</p> " +
	"<ol><li> A terminal for javascript,</li><li> A snippet library,</li><li> Reference material, and examples of code.</li></ol>" + 
	"<p>To gain access to our tools click the link that says 'Javascript Home', or if your looking for an app check out our 'Javascript App Library'.",
	_snippet = _title + _nav + _paragraph;

	return _snippet;
	
			}, "headerButton1", "Javascirpt" ) ) :
	
	ev.target.getAttribute("name") === "Media" ?
		( addBoxEvent( function(){
	
	_style("absolute","37mm","0%","90%","50%","5mm","5mm","rgba(0,150,255,1)");
var _title = "<h3>Media</h3>",
	_nav = "<nav style='background-color:white;'><a href='media_player.html'>Kip Media</a></nav>",
	_paragraph = "<p>Currently our media player is down. Sorry for the inconvenience.<br><br> We hope to bring you content as soon as January 31, 2015.<br><br>" +
	"In the mean time you can visit the Kip Media page by clicking the link. The page will contain information regarding progress.</p>",
	_snippet = _title + _nav +  _paragraph;

	return _snippet;
	
			}, "headerButton2", "Media" ) ) :
	
	ev.target.getAttribute("name") === "Articles" ?
		( addBoxEvent( function(){
	
	_style("absolute","37mm","0%","90%","50%","5mm","5mm","rgba(0,255,150,1)");
var _title = "<h3>Articles</h3>",
	_nav = "<nav style='background-color:white;'><a href='reader.html'>Kip Reader</a></nav>",
	_paragraph = "<p>Currently our article reader is down. Sorry for the inconvenience.<br><br> We hope to bring you content as soon as January 31, 2015.<br><br>" +
	"In the mean time you can visit the Kip Reader page by clicking the link. The page will contain information regarding progress.</p>",
	_snippet = _title + _nav +  _paragraph;

	return _snippet;
	
			}, "headerButton2", "Articles" ) ) :
	
	ev.target.getAttribute("name") === "Mission" ?
		( addBoxEvent( function(){
	
	_style("absolute","37mm","0%","90%","50%","5mm","5mm","rgba(0,175,255,1)");
var _title = "<h3>Mission</h3>",
	_nav = "<nav style='background-color:white;'><a href='aboutus.html'>Visitors Area</a></nav>",
	_paragraph = "<p>Our mission is to provide science and technical services to amateurs, enthusiasts, and small businesses.<br> In 2016 " +
	"we have three main goals to accomplish which we call the three big C's:</p> <ol><li>Community Outreach</li><li>Community Small Business Outreach</li>" +
	"<li>Community Education Outreach</li></ol><p>Please click the link to the <a href='aboutus.html'>Visitors Area</a> to learn more about " +
	"what we do and how we do it.",
	_snippet = _title + _nav + _paragraph;

	return _snippet;

			}, "headerButton3", "Mission" ) ) :

	ev.target.getAttribute("name") === "Team_Members" ?
		( addBoxEvent( function(){
	
	_style("absolute","37mm","0%","90%","50%","5mm","5mm","rgba(0,255,175,1)");
var _title = "<h3>Team Members</h3>",
	_paragraph = "<p><b>President, lead developer, founder, and assistant: </b>Steven Van Sant<br><b>E-Mail:</b> kipOmaha@gmail.com</p>" +
	"<p>We are always looking for more team members if your interested in working with Kip.<br>" +
	" We are currently looking for:<br>Volunteers, Developers, Sponsors, Philanthropists, Businesses or other interested parties and individuals.</p>",
	_snippet = _title + _paragraph;

	  return _snippet;
	
			}, "headerButton3", "Team_Members" ) ) :
	
	ev.target.getAttribute("name") === "Phone" ?
		( addBoxEvent( function(){
	
	_style("absolute","37mm","0%","90%","50%","5mm","5mm","rgba(0,195,255,1)");
var _title = "<h3>Kip Omaha Phone Directory</h3>",
	_paragraph = "<p><b>Steven Van Sant ( President ): </b>(402)-290-9613<br>Requests for Comm: Text Only please, leave a name, e-mail, and brief message.<br><br>" +
	"If you want to use an online form press and hold the control and alt keys and type in the word forms or click " +
	"<a href='form_cabinet.html'>here</a>.</p>";

	return _title + _paragraph;
	
			}, "headerButton3", "Phone" ) ) :
	
	ev.target.getAttribute("name") === "E-Mail" ?
		( addBoxEvent( function(){
	
	_style("absolute","37mm","0%","90%","50%","5mm","5mm","rgba(0,255,195,1)");
var _title = "<h3>Kip Omaha E-Mail Directory</h3>",
	_paragraph = "<p><b>Steven Van Sant ( President ): </b>stevenvansant@gmail.com or kipomaha@gmail.com<br>" +
	"Requests for Comm: Please put 'Kip Omaha' followed by a quick message in the subject line or I won't respond to your e-mail.<br><br>" + 
	"If you want to use an online form press and hold the control and alt keys and type in the word forms or click " +
	"<a href='form_cabinet.html'>here</a>.</p>";

	return _title + _paragraph;
	
			}, "headerButton3", "E-Mail" ) ) :
	
	"undefined";

	} );




