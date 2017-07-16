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
	this.name = _meta.name || "The name of the animator wasn't found.";
	this.description = _meta.description || "The description of the animator wasn't found.";
	this.features = _meta.features || "No features of the animator were found.";
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
			url: "help.php",
			gitWiki: "https://github.com/PiReel/PiReel-Core/wiki"
			},
		keyboard:
			{
			"ctl-shift-k": "Toggles to the keyframes console.",
			"ctl-shift-t": "Toggles to the key definition macro console."
			},
		contact:
			{
			url: "contactus.php",
			"gitter": "https://gitter.im/PiReel/Lobby"
			}
		},
	meta:
		{
		name: "Pi Reel Science and Engineering Animator.",
		description: "An animator licensed for business and personal use.",
		features: 
			{
			console: "A console for creating macros and custom tools for Pi Reel Animator.",
			pire: "A file extension for transmission of video or animations that has associated readable information or has readable embedded information."
			}
		}
	} );

} )();