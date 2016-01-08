"use strict"
// JavaScript Document 


			// *** Who is this document meant for? ***
	
    // This document is meant for developers with knowledge of 
	// json, javascript, html, xml, xhtml, dhtml,
    // and some server side knowledge would be good, too. 

	// Documentation does not explain basic web concepts or terminology unless
    // unusual syntax is used.

	// NOTE: Open the djBase.html file for examples and more help.

		// Development Team: Kip Omaha

		// Developers:
			// Steven Van Sant ( alias: kip )

				// Dev Date:
					// 10/26/2010

				// Open source:
					// [[[ Mozilla Developer Network ]]]

				// Dev Build:
							// file: js/djBase.js.
							// html object library.
							// inline json.


	// SUMMARY:
		// The djBase.js object library is made to allow inline json to be used in a HTML document.
		// Inline json that this js file reads may follow the rules for whitespace and apostrophes from
		// the HTML language.


// **********************************************************************************************************************************
// ************************************************************ Start Library *******************************************************
// **********************************************************************************************************************************


			// Date Object: pageDate, event Object: ev, Literal Array: page, Literal Array: meta, Literal Array pLCycle
				// pageDate: Loads date information on load.
				// ev: Used for event listeners.
				// page: Used in the update() chain, to store jsons that are created.
				// pLCycle: Used to store meta objects that get generated on load.


var pageDate = new Date(), ev = window.event, page = [], Page = [], pLCycle = [];


			// Object test
				// SUMMARY: RegExp test patterns ( without any flags )


					// EXAMPLE: "myId|#,myClass|.,myName|_,myTag|;"


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


			// Object get
				// SUMMARY:  Kip's standard listing syntax. RegExp matching patterns ( with "g" flags ).


					// EXAMPLE: "myId|#,myClass|.,myName|_,myTag|;"


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


			// Object: number


var number = {
	rational: /\-\d+\.\d+|\-\.\d+|\-\d+|\d+\.\d+|\.\d+|\d+/g,
	unitSec: /\d+\.\d+(?=s)|\.\d+(?=s)|\d+(?=s)/g,
	numberSyntax: function( _string, _array ){


	// _func() gets the number and operation information and returns it in an array of four items.


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


	// _execute_math() executes the math algo for the given _params set.


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


			// Function _searchFunc
				// SUMMARY: Matches to objects using the "===" logical operator.
					// Accepts two parameters for comparison.
					// Returns a matched string or "null".


					// EXAMPLE: _searchFunc( "mySearchParam", "myComparisonParam" )


var _searchFunc = function( search_param, comparison_param ){
var _matched;

	comparison_param === search_param ?

	_matched = comparison_param :

	_matched = "null";

	return _matched;

};


			// Object Constructor constuctElement
				// SUMMARY: Creates an object with the properties: id, class, name, and html.
					// Accepts four parameters for the values of the object property.
					// construcElement( Id, Class, Name, Html )


					// EXAMPLE: constuctElement( "myObjectId", "myObjectClass", "myObjectName", "myObjectTagName" )


var constuctElement = function( Id, Class, Name, Html ){

	this.id = Id;
	this.class = Class;
	this.name = Name;
	this.html = Html;

};


			// Object Constructor underScore()
				// SUMMARY: Replaces underscores with a space.


					// EXAMPLE: underScore( "hi_json" )


var underScore = function( _string ){

	return _string.replace( /\_/g, " " );

};

			// Function getId()
				// SUMMARY: Iterates through the length of the _id_param retrieving the id requested.
					// The accepted param is a list of class name strings.
					// Returns the _array literal.


					// EXAMPLE: getId( "id1 id2 id3" ) or getTag( "id1" )


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


			// Function getClass()
				// SUMMARY: Iterates through the length of the tag_param retrieving the class names requested.
					// The accepted param is a list of class name strings.
					// Returns the _array literal.


					// EXAMPLE: getClass( "class1 class2 class3" ) or getTag( "class1" )


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


			// Function getTag()
				// SUMMARY: Iterates through the length of the tag_param retrieving the tag names requested.
					// The accepted param is a list of tag name strings.
					// Returns the _array literal.


					// EXAMPLE: getTag( "div article form" ) or getTag("div")


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


			// Function getName()
				// SUMMARY: Iterates through the length of the tag_param retrieving the names requested.
					// The accepted param is a list of tag name strings.
					// Returns the _array literal.


					// EXAMPLE: getName( "name1 name2 name3" ) or getTag( "name1" )


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


			// Function getElement()
				// SUMMARY: Uses the get object's literal regular expressions to retrieve elements and element node lists.
					// The element_identity_list param accepts values that adhere to the pattern of the get objects property values.
					// Returns the _return Array with all matches from the element_identity_list.


					// EXAMPLE: getElement( "myId|#,myClass|.,myName|_,myTag|;" )


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


			// Function restartIntervalListener()
				// SUMMARY: Restarts the timeline interval.

					// Parameter accepts an updated pLCycle array.
					// Returns pLCycle array.
					// EXAMPLE: myObject.restartIntervalListener( _jsn )


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


// String prototypes
	// SUMMARY: String prototypes run the format checks and list checks.


			// toJSON
				// SUMMARY: Used to read and parse inline JSON. Also, adds the autoTime property for all json objects.
				// autoTime's value is equal to the time of creation of the JSON using the getTime() Date method.


					// EXAMPLE: "{'id':'myId','class':'myClass','name':'myName','html':'myHtml'}".toJSON()


	String.prototype.toJSON = function(){
var _update_string = this.replace( "}", ",'autoTime':'" + pageDate.getTime() + "',}" );

var _qoutes_a = _update_string.replace( /\'\'(?=\,)|\'\'(?=\})|\'\'(?=\:)/g,'"null"' );

var _qoutes_b = _qoutes_a.replace(/\'+/g,'"');

var _space = _qoutes_b.replace( /\s+/g, "" );

var _final_comma = _space .replace( /\,(?=\})+/g, "" );

var _fix = _final_comma.replace(/\"+(?=\")/g, '",' );

	return JSON.parse( _fix );

	};


			// String Method getElement()
				// SUMMARY: Uses the get object's literal regular expressions to retrieve elements and element node lists.
					// The getElement() method is used on strings. ( no params )
					// Returns the _return Array with all matches from the element_identity_list.


					// EXAMPLE: "myId|#,myClass|.,myName|_,myTag|;".toJSON()


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


			// String Method underScore()
				// SUMMARY: Replaces underscores with a space.


					// EXAMPLE: "hi_json".underScore()"


	String.prototype.underScore = function( ){

	return this.replace( /\_/g, " " );

	};


// Object prototypes
	// SUMMARY: djBase.js uses Object.prototype to add methods for retrieveing objects and other tasks.


			// Object Method make()
				// SUMMARY: The make() method sends the string from a data-json attribute to the toJSON() method.
				// Then takes the JSON and uses the information to set the elements id, class, and name based off the JSON.
					// The accepted param is an array.
					// Returns _jsn.


					// EXAMPLE: "myId|#,myClass|.,myName|_,myTag|;".toJSON()


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


			// Object Method page()
				// SUMMARY: Iterates through a node list and sends each node to the make() method to have 
				// it searched for the data-json attribute. 
					// Returns an array of json and pushes json to the page array.


					// EXAMPLE: [ dcument.getElementById("myDiv") ].page( myArray ) or dcument.getElementsByByTagName("div").page( myArray )


	Object.prototype.page = function( _array ){

var arr = _array || [], 
	_obj = [];

	this.length === undefined ? _obj.push( this ) : _obj = this;


// ***** Validate *****
	// ***** It's important to note that all information passed to the make method should be 
		// valid and be recieved from a secure source. At this time we offer the optional
		// _array parameter. If the update you are doing needs to be in a place where it can be processed 
		// more secure you can send it to the your _array parameter and have the information
		// sent some place to be safely handled. *****

	// ***** It's still imoprtant not to store sensitive information in inline JSON as it is accescible to everyone
	// and the same goes for data transmitted from an inline JSON source.
	// As this inline JSON javascript library has not been peer reviewed no valid data
	// regarding security has been formulated outside the current OWASP documentation. *****


	// ***** Guide lines for acceptable uses for inline JSON are:
		// ( Remember that these and everything here is still in review and 
		// only constitutes a suggestion from the author or contributors. )
	// 1.) Open information systems. ( White Pages, Yellow Pages, Advertisement Widgets, ect... )
	// 2.) Game software development. ( as long as it doesn't involve sensitive info. ) 
	// 3.) Media software development ( as long as it doesn't involve sensitive info. ) *****


// If you need further documentation for code validation please contact the author, and we will send
	// you the information you have requested if it assescible to us.


			for( var i=0; i < _obj.length; i++ ){
var _create = _obj[i].make();

		_array !== undefined ?
			( _create !== undefined ? 
				( arr.push( _create ), page.push( _create ) ) : undefined
			) : _create !== undefined ?
					page.push( _create ) :
					undefined;
			};

	return arr;

	};


			// Object Method addIntervalListner()
				// SUMMARY: Adds a interval property to the object


					// EXAMPLE: myObject.addIntervalListener( _jsn )


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


			// Object Method stopAddedInterval()
				// SUMMARY: Adds a interval property to the object


					// EXAMPLE: myObject.stopAddedInterval( myIntervalId )


	Object.prototype.stopAddedInterval = function( objId ){

	objId === undefined ? 
		window.clearInterval( "timeline" ) :
		pLCycle.getJsonById( objId ).interval = "false";

	return this;

	};


			// Object Method addBoxSet()
				// SUMMARY: Adds a box property to an object.
					// You may pass a json through to override the default behavior.
					// The object passed must have an id property value that is the same as a json object's id property value.


					// EXAMPLE: myObject.addBoxSet( myJSON )


	Object.prototype.addBoxSet = function( _jsn ){
		
		typeof _jsn === "string" ? 
		( this.box = _jsn.getElement() ) : 
		typeof _jsn === "object" ? 
			( this.box = _jsn.box.getElement() ) :
		  	  ( this.box = page.getJsonById( this.id ).box.getElement() );
	
	return this;

	};


// Array prototypes
	// SUMMARY: djBase.js uses Array.prototype to add methods for retrieveing objects and other tasks.


			// Array Method getJsonById()
				// SUMMARY: Used to search and retrieve objects by id property value.
					// Parameter is an id string value.


				// EXAMPLE: page.getJsonById( "myObjectId" )


	Array.prototype.getJsonById = function( search_param ){
var _matched = "";

		for( var i=0; i < this.length; i++){
var _search = this[i] === "null" ? "null" : _searchFunc( search_param, this[i].id );

	_search === "null" ? "null" : _matched = this[i];

		};

	return _matched;

	};


			// Array Method getJsonByClassName()
				// SUMMARY: Used to search and retrieve objects by id property value.
					// Parameter is an id string value.


				// EXAMPLE: page.getJsonByClassName( "myObjectClass" )


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


			// Array Method getJsonByName( search_param )
				// SUMMARY: Used to search and retrieve objects by id property value.
					// Parameter is an id string value.


				// EXAMPLE: page.getJsonByName( "myObjectName" )


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


			// Array Method getJsonByTagName()
				// SUMMARY: Used to search and retrieve objects by id property value.
					// Parameter is an id string value.


				// EXAMPLE: page.getJsonByTagName( "div" )


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


			// Array Method metaScan()
				// SUMMARY: Iterates through the pLCycle array and executes the event function associated with the object at the 
				// intervals specified in the interval property. Interval starts on page execution unless meta length is 0 or 
				// specify otherwise using stopAddedInterval() or clearInterval( timeline ).


				// EXAMPLE: pLCycle.metaScan()


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


			// Function update()
				// SUMMARY: Retrieves data-json attributes from elements, creates JSON objects, and updates the page array. 
				// The _listener parameter overrides the json retrieval process and allows you to make listener updates to an object.


				// EXAMPLE: update( [ _("myId") ], myArray, "false interval" );


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


			// Interval Function timeline
				// SUMMARY: The timeline interval scans the meta elements, collecting data regarding recurring events that the page executes.


var timeline = window.setInterval( function(){

	pLCycle.metaScan();

}, 100 );


// **********************************************************************************************************************************
// ************************************************************ EXAMPLES ************************************************************
// **********************************************************************************************************************************


			// Example 1: "Activating the data-json Attribute"
				// 1.)  Create an array to store the objects in. I called this one div. ( optional )
				// 2.)  Run the function update( node_list, array ) with the correct params.
						// The accepted params are:
							// 1) An array of elements.
							// 2) An array object


var div = [], 
	div_json = update( _tN("div"), div );

	console.log( "...");
	console.log( "Example 1");
	console.log( "The djHTML.js library is capable of gathering json from any html source you want.");
	console.log( "Below I've logged div_json's return value from example one.");
	console.log( div_json );


			// Example 2: "Using the Object Constructor"
				// We are going to construct a new element using constructElement( Id, Class, Name, Html )


var _div =  new constuctElement( div[0].id, div[0].class, div[0].name, div[0].html );
	console.log( "...");
	console.log( "Example 2");
	console.log( _div );


			// Example 3: "Adding a Box Set"


	_div.addBoxSet( div[0] );

	console.log( "...");
	console.log( "Example 3");
	console.log( "The addBoxSet() Method uses the getElement() method, which we use in example five.");
	console.log( _div.box );


			// Example 4: "Using the getJsonByClassName() method"


	console.log( "...");
	console.log( "Example 4");

var examples = div.getJsonByClassName("examples");

	console.log( div.getJsonByClassName("examples"));


			// Example 5: "Style the Classes"


	for( var i=0; i < examples.length; i++ ){
var opac = ( 1/examples.length ),
	index = (i+1)*opac;

	_( examples[i].id ).style.backgroundColor = "rgba(0,0,255," + index + ")";

	};

	window.addEventListener( "resize", function(){
var _widthSmall = function(){

	for( var i=0; i < examples.length; i++ ){
_( examples[i].id ).getElementsByTagName("textarea").item(0).style.width = "100%"
	};

},
	_widthNormal = function(){

	for( var i=0; i < examples.length; i++ ){
_( examples[i].id ).getElementsByTagName("textarea").item(0).removeAttribute("style")
	};

};

	Number( window.innerWidth ) < 850 ? 
	( _widthSmall() ) :
	( _widthNormal() );

	});

			// Example 6: "Using the getElement() method"


var example_box_set = _get( div[0].box ),
	ex = example_box_set[0];

	console.log( "..." );
	console.log( "Example 5" );
	console.log( "The return array logs one item." );
	console.log( example_box_set );
	console.log( "Here is the box properties value:" );
	console.log( div[0].box );
	console.log( "All five item's in the comma separated list are # ( id ) values. So our only item in the array should be an array of elements." );
	console.log( ex );


			// Example 7: "Using the addIntervalListener() method"


	console.log( "..." );
	console.log( "Example 7" );
	console.log( "In example 7 we learn how to used the built in interval, 'timeline'." );
	console.log( "It's easy to use the addIntervalListener method. " )
	console.log( "All you need to do is add a JSON to a tag with the global properties, and include the interval property." );
	console.log( "The interval property must be formatted like this:" );
	console.log( "'interval': Where the interval is a span of time in seconds." );
	console.log( pLCycle[0] );

	pLCycle[0].addIntervalListener( function(){

var intMess = _( "interval_message" ), iteration = pLCycle[0]._index||1,
	string_1 = "<li>I have set this page to have an interval running.<br>" +
				"I added the interval property and set its value to 15s.",
	string_2 = "<li>Next I used the addIntervalListener() method on pLCycle[0].<br>" +
				"and added the function that executes what your reading,<br>" +
				"reading right now.</li>",
	string_3 = "<li>This method relies only on one interval that searches through the <br>" +
				"pLCycle array, which holds all the objects that have the<br>" +
				"interval data to be scanned.</li>",
	string_4 = "<li>The search executions occur every tenth of a second so you can't set the interval <br>" +
				"to any span of time less than a tenth of a second.<br>" +
				"Please see our wiki document or our web site reference for more info.</li>";

	pLCycle[0]._index = iteration;
console.log(pLCycle[0]._index)
	pLCycle[0]._index === 1 ?
		( pLCycle[0]._index = pLCycle[0]._index + 1, intMess.innerHTML = string_1 ) :
		
		( iteration === 2 ? 
			( pLCycle[0]._index = pLCycle[0]._index + 1, intMess.innerHTML += string_2 ) : 
		
			( iteration === 3 ?
				( pLCycle[0]._index = pLCycle[0]._index + 1, intMess.innerHTML += string_3 ) :
		
				( iteration >= 4 ?
					( intMess.innerHTML += string_4, clearInterval( timeline ) ) :
					( "Done." ) ) ) )




	} );


// **********************************************************************************************************************************
// ************************************************************ FROM KIP ************************************************************
// **********************************************************************************************************************************


				// Thank you for your time in downloading our documentation.
					// To show Kip Omaha's appreciation we have included an
					// application for learning inline json.

				// Regards, Kip.


	// btn, mem, lib:
		// SUMMARY: Place for App Elements, JSONs, and Objects.


var btn = [], _mem = [], _lib = [],


	// The application [ 'learn_json_button' ] toggle button is the "brain" ( contains the box prop that outlines the app )


	btnUpdate = update( _("learn_json_button"), btn ); 
 
 
 	// Created the app to use the addBoxSet() on it.


var app = Page.getJsonById( btnUpdate[0].id );

console.log(app)
	// The application toggle button's event listener.


	app.box[0][0].addEventListener( "click", function(){

	app.box[0][1].style.visibility === "visible" ? 

		( app.box[0][1].style.visibility = "hidden",
		  app.box[0][1].style.width = "0%",
		  app.box[0][1].style.height = "0%",
		  app.box[0][1].style.backgroundColor = "rgba(240,240,240,.8",
		  app.box[0][1].style.overflow = "scroll",
		  app.box[0][1].style.border = "solid 2px silver" ) : 

		( app.box[0][1].style.visibility = "visible",
		  app.box[0][1].style.width = "85%",
		  app.box[0][1].style.height = "80%",
		  app.box[0][1].style.backgroundColor = "rgba(240,240,240,.8)",
 		  app.box[0][1].style.overflow = "scroll",
		  app.box[0][1].style.border = "solid 2px silver" ) ;

	} );


	// Text event listener


	app.box[0][2].addEventListener( "keyup", function( ev ){

var _create = function( parameter ){

var _qoutes_a = parameter.replace( /\'\'(?=\,)|\'\'(?=\})|\'\'(?=\:)|\'\'(?=\s)/g,'"null"' );
	console.log( _qoutes_a );

var _qoutes_b = _qoutes_a.replace(/\'+/g,'"');
	console.log( _qoutes_b );

var _space = _qoutes_b.replace( /\s+/g, "" );
	console.log( _space );

var _final_comma = _space .replace( /\,(?=\})+/g, "" );
	console.log( _final_comma );

var _fix = _final_comma.replace(/\"+(?=\")/g, '",' );
	console.log( _fix );

	return _fix;

	},
	create_json = _create( this.value );

	try{
var _json = JSON.parse( create_json );
		console.log( "Your JSON tests good. Hit Generate to create a new JSON object." ),
		console.log( create_json ),
		_mem.push( _json ),
		app.box[0][4].innerHTML = "Your JSON tests good. Hit Generate to create a new JSON object.<br>",
		app.box[0][4].innerHTML += create_json;
	}
	catch(e){
		console.log( "Check your work." ),
		app.box[0][4].innerHTML = "Your JSON tests bad.<br>",
		app.box[0][4].innerHTML += create_json;

	}

	} );


	// Object Generator event listener


	app.box[0][3].addEventListener( "click", function(){

	try{

var _users_const = new constuctElement( _mem[ _mem.length-1 ].id, _mem[ _mem.length-1 ].class, _mem[ _mem.length-1 ].name, _mem[ _mem.length-1 ].html );

	console.log( "Construction complete." );

	app.box[0][6].innerHTML += "Object creation successful: " + _users_const + ", ";

	_lib.push( _users_const );

	console.log( _lib );

	}
	catch( e ){

	console.log( "In order for you to generate a new Javascript Object you must use the correct parameters." );
	console.log( "Press the help button to get more details." );
	console.log( e );

	}
	
	} );


	// Object Generator event listener


	app.box[0][5].addEventListener( "click", function(){

	app.box[0][1].style.visibility = "hidden";

	} );


// **********************************************************************************************************************************
// ************************************************************ CODE START **********************************************************
// **********************************************************************************************************************************







