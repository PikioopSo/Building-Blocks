// ********** JavaScript Document **********
( function(){
// ********** [j-menu] ********** 
var jMenu = xtag.register("j-menu",
  {
  mixins: ["utilities"],
  events: 
    {
    tap: function(event)
      {
      // _func fires to change the el parameters data-active attribute to its opposing boolean value and all other ones to .
      var _func = function(el)
        {
        for(var i=0; i<el.parentNode.dataIcos.length; i++)
          {
          if(el.parentNode.dataIcos[i].getAttribute("data-active") === "true"){ el.parentNode.dataIcos[i].setAttribute("data-active","false") }
          }
        }, stg = "";

      if(event.target.hasAttribute("data-active") === true)
        { console.log("Checked data-active...checking value");
        if(event.target.dataActive === "false")
          { _func(event.target); event.target.setAttribute("data-active",stg = "true"); }
        else
          { _func(event.target); event.target.setAttribute("data-active",stg = "false"); }
          console.log("Value was " + stg);
        }
      else
        {
        
        }
      }
    }
  } );

    // ********** [j-tray] ********** 
var jTray = xtag.register("j-tray", 
  {
  mixins: ["utilities"],
  lifecycle:
    {
    created: function()
      {
      console.log("%c Creating 'j-tray'. Checking for tray owner.","color: skyblue;");
      if(this.hasAttribute("for") === true){ console.log("Tray belongs to " + this.getAttribute("for")); }
      else
        {
        console.log("This tray was not assigned.");
        this.setAttribute("for", "#" + this.parentNode.id);
        console.log("Tray was assigned to parent.");
        }
      }
    },
    accessors:
      {
      get: function(){ return this.getAttribute("for")._getDOM(); }
      }
  } );

    // ********** [j-ico] **********
var jIco = xtag.register("j-ico", 
  {
  mixins: ["utilities"],
  events:
    {
    tap: function(event)
      {
	  // Checks to ensure that your clicking the j-ico element
      if(event.target.nodeName === "J-ICO")
        {
        var _tray = null, _selector = null;
		// find a data-tray
        event.target.parentNode.dataTray !== null ? 
          ( _tray = event.target.parentNode.dataTray,
            console.log("Found data-tray"),
            console.log(_tray) ) : 
          ( console.log("data-tray check failed."),
            console.log(_tray + " was found") );

        event.target.parentNode.dataSelected !== null ? 
          ( _selector = event.target.parentNode.dataSelected,
            console.log("Selector class for event from:"), console.log(this), console.log("Was assigned: " + _selector) ) : 
          ( console.log("data-selected for..."), 
            console.log(this),
            console.log("%c Returned...  " + _selector + "... Attr. rquired in order to continue", 'color:skyblue') );

          console.log("An event was fired: ");
          console.log(event);

        var _current = xtag.queryChildren(_tray, _selector), 
            _new = this.dataItem;

              _selector = _selector.replace(".","");
            // Check to aee if these two prams are satisfied
            if( _current.length === 0  && _tray.getElementsByClassName(event.target.parentNode.dataHidden).length === 1 ){
              _current.length < 1 ? 
              ( console.log("No element with the class "+ _selector + " was found in tray."), 
                _tray.getElementsByTagName("*")[0].setAttribute("class",_selector), 
                console.log("Found the first node in the j-tray.") ) : 
              ( console.log("current node is: "), 
                console.log(_current[0]),
                _new.className = event.target.parentNode.dataHidden,
                console.log("Hidden class is: " + event.target.parentNode.dataHidden) );
            }
            else{
              // Check length of query array from _current (_new equals _current cause user single clicked twice or more times)
              _current.length !== 0 ? _current = _current[0] : _current = _new;
              // Check the className for a matching _selector variable (When user double clicks)
              _new.className !== _selector ? (
              _current.setAttribute("class", event.target.parentNode.dataHidden),
              _new.setAttribute("class", _selector) ) :
              (
              _new.setAttribute("class", event.target.parentNode.dataHidden)
              )
            }
        }
      }
    }
  } );
} )();