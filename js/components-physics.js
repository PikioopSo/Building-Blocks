// ** *************** components physics ***************

class commands {
	constructor(node, opts){
	this.node = node;

	}

	appendChild(node, opts){
	
	}

	replaceChild(node, opts){

	}
}

var physicsMixin = xtag.mixins.physics = 
	{
	
	};

var jsonCanvas =  xtag.register("json-canvas", 
	{
	mixins: ["utilities"],
	methods: 
	  {
	  canvasInsert: function(_object)
		{
		
		}
	  },
	lifecycle:
	  {
	  created: function()
		{
		// Code for updating the content of the canvas when created.
			// Create a new instance of the command object for the canvas.

		console.log("Creating command object for JSON-CANVAS.");
		var _cmds = new commands( this, {} );

			!jx.fire[this.nodeName.toLowerCase()] ? ( jx.fire[this.nodeName.toLowerCase()] = {}, jx.fire.length += 1 ) : null;

			jx.fire[this.nodeName.toLowerCase()].commands = _cmds;

			console.log(jx.fire[this.nodeName.toLowerCase()]);

	    },
	  inserted: function()
		{
		// Code for qeueing up the current workspace for playback and editing.
		},
	  attributeChanged: function()
		{
	    
	  	}
	  },
	events:
	  {
	  change: function()
		  {
		  console.log("I've Changed.");
		  }
	  }
	} );

var cytoPhysics =  xtag.register("cyto-physics", 
	{
	mixins: ["utilities", "physics"],
	extends: "json-canvas", 
	lifecycle:
	  {
	  created: function()
		{console.log("HI");
		var _p = Physics();
	    console.log(_p);
	    }
	  }
	} );

