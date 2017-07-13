/* ********** [ JavaScript Document ] ********** */
( function(){ 
/* ********** [  ] ********** */
var _colors = xtag.register("sci-color", {
	content: "<button title='Add color symbol.'>+</button>",
	methods:
	  {
	  createColorSymbol: function(color, opts)
		{
		color = color ? "" : "";
		opts = opts ? "" : "";
	    }
	  },
	extends: "div",
	mixins: ["utilities"],
	lifecycle:
	  {
	  created: function()
		{

		},
	  inserted: function()
		{
		
		}
	  },

     accessors: 
 	  {
 	  
 	  }
} );

} )();

