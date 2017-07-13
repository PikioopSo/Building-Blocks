/* ********** [ JavaScript Document ] ********** */
( function(){
var classButton = xtag.register("class-btn", {
	
} );

} )();

// ***** [toggle-btn] *****
var toggleButton = xtag.register("toggle-btn", 
  {
  extends: "button",
  mixins: ["utilities"],
  events:
	{
	click: function(event)
	  {
	  var tar = event.target.getAttribute("target")._getDOM();
		if(tar.className === event.target.getAttribute("target-class")){
			tar.setAttribute("class", event.target.getAttribute("target-class") );
		}
		else{
			tar.setAttribute("class", event.target.getAttribute("target-class") );
		}
	  }
	}
  } );