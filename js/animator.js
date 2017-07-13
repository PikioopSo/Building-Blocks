// ********** [constructors] **********
	// ********** [_help] **********
( function(){
var _help = function(help){
	this.version = help.version;
	this.docs = help.docs;
	this.keyboard = help.keyboard;
};

	// ********** [_meta] **********
var _meta = function(_meta){
	this.htmlHeader = _meta.htmlHeader || false;
	this.name = _meta.name || "The name of the animator wasn't found.";
	this.description = _meta.description || "The description of the animator wasn't found.";
	this.features = _meta._features || "";
};

// ********** [animator class] **********
	// ********** [status: building and testing] **********
class animator{
    constructor(options){ 
		this.help = new _help(options.help);  
		this.meta = new _meta(options.meta);
	}

	schema(opts){
		
	}
}
// ********** [pireel global] **********

	window.pireel = new animator(
	{
	help: 
		{
		version: 0.1,
		docs: 
			{
			},
		keyboard:
			{
			
			}
		},
	meta:
		{
		htmlHeader: false,
		name: "Pi Reel Science and Engineering Animator.",
		description: "An animator licensed for business and personal use.",
		features: 
			{
			console: "A console for creating macros and custom tools for Pi Reel.",
			pire: "A file extension for transmission of video or animations and associated readable text information."
			}
		}
	} );


} )();