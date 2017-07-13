// *************** [jx] ***************
( function(){
/* *****[[functions]*****[ */
  /* *****[[_searchFunc]*****[ */
var _searchFunc = function _searchFunc( search_param, comparison_param )
  {

var _matched;

	comparison_param === search_param ? _matched = comparison_param : _matched = null;

	return _matched;

};

/* *****[_searchArray]*****] */
var _searchArray = function _searchArray( search_param, obj, _token )
  {
    switch( _token ){
      case "_":
        var _matched = [];
    		for( var i=0; i < obj.length; i++){
          _searchFunc( search_param, obj[i].name ) === null ? null : _matched.push( obj[i] );
    		}
	    return _matched;
    	case ".":
        var _matched = [];
        for( var i=0; i < obj.length; i++){
          _searchFunc( search_param, obj[i].className ) === null ? null : _matched.push( obj[i] );
        }
    	return _matched;
      case "#":
      var _matched = [];
      	for( var i=0; i < obj.length; i++){
          _searchFunc( search_param, obj[i].id ) === null ? null : _matched.push( obj[i] );
      	}
      return _matched[0];
      case "":
        var _matched = [];
  		  for( var i=0; i < obj.length; i++)
  		    {
          var _stg = obj[i].tagName||obj[i].is;
          _searchFunc( search_param, _stg ) === null ? null : _matched.push( obj[i] );
  		    }
      return _matched;

    }
};

  /* *****[typeOf]*****] */
	//  ** xtags uses its own version of typeof too. Should use xtags so that its not duplicated.
var typeOf = function(_data)
  {
  try
    {
  typeof _data === "string" ? _data = "string" : _data.length ? _data = "array" : _data === null ? _data = "null" : _data = typeof _data;
    }
  catch(e)
    {
    _data = "undefined";
    }
  return _data;
  };

// ***** [inkwell] *****
var inkwell = function inkwell(paper){
	// object to xml, html, css conversion 
};

/* ***** [String Prototype] ***** */
  /* ***** [_getDOM] ***** */
  String.prototype._getDOM = function()
    {
    var _token = this[0], 
        psuedo = this.match(/\d+(?=\])/g)||null , 
        stg = this.match(/[\w+\-+]+(?=\[)/g)||this.match(/[\w+\-+]+/g);
    switch(_token)
      {
      case "#":
      return document.getElementById(this.replace(/\#/, ""));
      case ".":
        psuedo === null ? psuedo = document.getElementsByClassName(stg[0]) : psuedo = document.getElementsByClassName(stg[0])[psuedo[0]];
      return psuedo;
      case "_":
        psuedo === null ? psuedo = document.getElementsByName(stg[0]) : psuedo = document.getElementsByName(stg[0])[psuedo[0]];
      return psuedo;
      default:
        psuedo === null ? psuedo = document.getElementsByTagName(stg[0]) : psuedo = document.getElementsByTagName(stg[0])[psuedo[0]];
      return psuedo;
      }

    };

// ** ***** [_toJSON] ***** 
  String.prototype._toJSON = function(_push, options)
    {
    /* _array is a true/false value that indicates whether your pushing the json to the base.json array */
    /* _string is a true/false value that indicate whether you're returning the string value and json object */

    if(options.type === "json")
      {
      var jsn = JSON.parse(this);
      _push === true ? jx.json.push(jsn) : null;
      return jsn
      }
    else
      {
      var _fixLiteralNotation = this.replace(/[\w+\-+]+(?=\:)|\'[\w+\-+]\'+(?=\:)/g, 
          function( string ){ return '"' + string.match(/[\w+\-+\w+]+|[\w+]+/g) + '"' } ),
  
          _fixSpacing = _fixLiteralNotation.replace( /[\s+]+/g, " " ),
  
          _fixObjSpacingA = _fixSpacing.replace( /[\s+]+(?=\{)|[\s+]+(?=\})/g, ""),  
          _fixObjSpacing = _fixObjSpacingA.replace(/\{\s+/g, "{"),
  
          _fixPairSeps = _fixObjSpacing.replace(/\,\s+(?=\"\w+\"\:)|\s+(?=\"\w+\"\:)|\s+(?=\"\w+[\(\w+\)]+\"\:)/g, "," ),
  
          _fixStrings = _fixPairSeps.replace(/\'(?=\,)|\'(?=\})/g,'"'), 
          _fixStringsA = _fixStrings.replace(/\:\'|\:\s+\'/g,':"');
  
      var _obj = {};
      try
        {
        var jsn = JSON.parse(_fixStringsA);
  
      	_push === false ?
      	  ( null ) : 
    	    _push === undefined ? jx.json.push(jsn): null;
  
      	return _obj;
        }
      catch(e)
        {
    		// Needs better debugger
        // Array type needs to have its single qoutes fixed.
    		console.log(e + "\n\n"  );
    		return undefined;
        }
      }
    };

// ** ***** [Object prototypes] *****

// ** ***** [Array prototypes] *****
  // ** ***** [getJsonById] ( search_param, obj, _token ) 
	Array.prototype.getJsonById = function( search_param )
	  { return _searchArray( search_param, this, "#" ); };

  // ** ***** [getJsonByClassName] ( search_param, obj, _token ) *****
	Array.prototype.getJsonByClassName = function( search_param )
	  { return _searchArray( search_param, this, "." ); };

  /* ***** [The getJsonByName] ( search_param, obj, _token )***** */
	Array.prototype.getJsonByName = function( search_param )
	  { return _searchArray( search_param, this, "_" ); };

	/* ***** [The getJsonByTagName] ( search_param, obj, _token )***** */
	Array.prototype.getJsonByTagName = function( search_param )
	  { return _searchArray( search_param, this, "" ); };

	// ** ***** [_meta] *****
var _schema = function(_schema){
	this.canvasTray = _schema.canvasTray || null;
	this.canvas = _schema.canvas || null;
	this.console = _schema.console || null;
	this.keyframe = _schema.keyframe || null;
};

var jx = 
  {
  json: [],
  basing: null,
  drag: {top:null, left:null, target: null},

// *************** [jEditor] ***************
	  // store instances of the editor class.
	  // unused ones should get cleared and cached 
	  // so user doesn't lose his data.
  jEditor: [],

// *************** [fire] ***************
  fire: 
    {
    length: 0
    },

  fireRequests:
	{
	length: 0
	},

// *************** [jStyle] ***************
  jStyle:
    {},

// *************** [jDraw] ***************
  jDraw:
    {},

/* [jListener] Not Done */
  jListener: function()
    {},

/* [jContainer] */
  jContainer: function(elemStg, options)
    {
    var el = null;
    try
      {
      el = xtag.createFragment(elemStg);
      }
    catch(e)
      {
      el = elemStg + " is not an acceptable parameter.";
      console.log(el);
      return el;
      }

    if( options.attributes )
      {
      for( var attr in options.attributes )
        {
        el.setAttribute(k,options.atributes[k]);
        }
      }
    },

// *************** [xTag] ***************
	  // ** needs more filtering
  xTag: function(options){
  var _delta = false, _arr = [], register = options.register;
  for(var z=0; z < options.names.length; z++)
    {
    // ** try registering xhtml element
    	try{
  		console.log("%c Registering XHTML namespace: " + options.names[z], "color:rgb(220,215,165); text-decoration: underline;");

		  _delta = xtag.register(options.names[z], register); 

		console.log("%c Checking and updating the fire object: " + options.names[z], "color:rgb(220,215,255); ");
		!jx.fire[options.names[z]] ? jx.fire[options.names[z]] = {xTag:_delta} : jx.fire[options.names[z]].xTag = _delta;
		_arr.push(_delta);
		}
		catch(e){
			console.log("Generating error report...", "color:rgb(220,215,255); ");
			console.log("node name: " + options.names[z]);
			console.error(e);
		}
    }

  // ** *************** returns true if xtag was succesful or else false ***************
  return jx.fire;
  },

// *************** [jxLock] ***************
  jxLock: function(options)
    {
	var _ret = null, _opts = {};
		
		_opts.onTokenFound = options.onTokenFound;
		_opts.onCommandTerminate = options.onCommandTerminate;
		_opts.applyFormatTo = options.applyFormatTo;

	for(var z=0; z < options.names.length; z++)
    	{
      	console.log("%c Creating token property: " + options.token, "color:rgb(165,165,255); text-decoration: underline;");
	  	!jx.fire[options.names[z]] ? ( _ret = jx.fire[options.names[z]] = {}, jx.fire.length += 1 ) : "";

			_ret.id = []; _ret.className = []; _ret.name = []; _ret.meta = {}; _ret.token = options.token; _ret.event = new syntax(_opts);

      	console.log("%c Finished creating token property " + options.token, "color:rgb(165,165,255);");
		console.log(_ret);
		}

		_ret = jx.xTag( options );

    return;
    }
  };

	window.jx = jx;

} )();
