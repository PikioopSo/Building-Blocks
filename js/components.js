( function(){
/* *****[Globals] ***** */
var event = window.event;

// *************** [Start of Xtag Mixins] *************** 
	// *************** [Utilities Mixin] ***************
var mixins_Util = xtag.mixins.utilities = 
  {
  lifecycle:
    {
    created: function()
      {
      var _xtag = xtag.tags;

      	console.log("%c Creating the " + this.nodeName + " element ...", "color: rgb(255,155,100); text-decoration: underline;");

      var stg = this.id ? this.id : this.nodeName + jx.fire.length;

        console.log("%c Found, '" + this.nodeName + "#" + this.id + "." + this.className, "color: rgb(255,155,100);");
        console.log("%c Assigning and updating fire data...", "color: rgb(255,155,100);");

		!jx.fire[this.nodeName.toLowerCase()] ? ( jx.fire[this.nodeName.toLowerCase()] = { node: this }, jx.fire.length += 1 ) : null;

        this.setAttribute("id", stg);

        console.log(jx.fire);

		

      },

    inserted: function()
	  {

      }
    },
  methods:
    {
    // ********** [get_key_refs] **********
    get_key_refs: function(stg)
      {
      var key= null, dom = this,
          m_array = stg.match(/[\w+\-+]+(?=[\.+\;\(\[\{\"\,\~+\-+])/g);

      if(stg[0] === "$")
        {
        m_array.forEach( function(c,i,a,m_array)
          { 
          if( key===null )
            { key = jx.fire[dom.id].json[c]; }
          else
            { key = key[c]; } 
          } );
        return key;
        }
      else
        {
        return stg[0] + ": Token not recgonized.";
        }
      },
    // ********** [get_dom_ref] **********  
    get_dom_ref: function(stg)
      {
      var key= null,
          m_array = stg.match(/[\w+\-+]+(?=[\.+\;\(\[\{\"\,\~+\-+])/g);
      m_array.forEach( function(c,i,a,m_array){ if(key===null){ key = jx.basing[c]; }else{ key = key[c]; } } );
      return key;
      },
    // ********** [get_def_ref] ********** 
    get_def_refs: function(stg)
      {
      switch(stg)
        {
        case "": return "The definition declaration can not be empty.";
        default:
          
        return "Defintion: '" + stg + "'was not not found.";
        }
      },
    // ** [overFlow] 
    overFlow: function(options)
      {
      options.target.style.overflow = options.visibility;
      return options.visibility;
      },
    // ********** [type] **********
    type: function(options)
      {
      switch(options.type)
        {
        case "blog/svg":
          
        return;
        default:
        return;
        }
      },
    // ********** [jLink] **********
    jLink: function(options)
      {
      var xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function(){
        if (this.readyState === 4 && this.status === 200)
          {
          var _data = xhr.responseText;
            options.onReady(_data);
          return;
          }
        };
      xhr.open("GET",options.href,true);
      xhr.send();
      return xhr;
      },

	// ** [jReady] 
    jReady: function(_func)
      {
      var el = this,
        xhrCheck = window.setInterval( function(){
          if (jx.fireRequests[el.id].xhr.readyState === 4 && jx.fireRequests[el.id].xhr.status === 200)
            {
            window.clearInterval(xhrCheck);
            _func(jx.fireRequests[el.id]);
            }
          }, 200 );
        return;
      }
    },
  accessors: 
    {
    visibility:
      {
      attribute:
        {
        validate: function(val)
          {
          return val;
          }
        },
      set: function(val)
        {
        this.overFlow( { visibility: val, target: this } );
        return;
        },
      get: function()
        {
        return this.getAttribute("visibility");
        }
      },

	// ** lots of varieties in attribute namespaces but alot of the attributes getters do the 
		// same thing but none of them share a function.
    dataQueue: 
      {
      attribute:
        {
        validate: function(val){ return val; }
        },
      set: function(val)
        {
        jx.fire[this.id].queueTray = val._getDOM();
        }
      },

 	// ** Interesting but what am I trying to accomplish.
    dataViewer: 
      {
      attribute:
        {
        validate: function(val){ return val; }
        },
      set: function(val)
        {
        jx.fire[this.id].viewer = val._getDOM();
        }
      },

	// What was I trying to accomplish?
    dataType: 
      {
        attribute:
          {
          validate: function(val)
            {

            }
          },
      set: function(val)
        {
		// needs review doesn't get used.
        },
      get: function()
        {
        }
    },

    // ** data-get
		// ** good candidate for testing the syntax class constructor events
    dataGet:
      {
      attribute:
        {
        validate: function(val){
          return val;
          }
        },
      get: function()
        {
        var _dta = null, el = this;

        this.jReady( function()
          {
          _dta = jx.fire[el.id].getData;
          return _dta;
          } );
        },
      set: function(val)
        {
        var el = this;
          this.jReady( function()
            {
            jx.fire[el.id].getData = el.get_key_refs(val);
            } );
        return;
        }
    },
 
    /* [dataTray] */
    dataTray:
      {
      get: function()
        {
        if(this.hasAttribute("data-tray") === true){ return this.getAttribute("data-tray")._getDOM(); }
        else{ console.log("Tried returning data-tray but got a null response"); return null; }
        },
      set: function(val)
        {
        if(this.hasAttribute("data-tray") === true){ return val; }
        else{ return false; }
        }
      },

    // ********** [dataItem] **********
		// ********** Needs review for optimization and/or semantics. **********
    dataItem:
      {
      get: function()
        { 
        if(this.hasAttribute("data-item") === true){ return this.getAttribute("data-item")._getDOM(); }
        else{ return false; }
        }
      },

    // ********** [dataHidden] **********
		// ********** Needs review for optimization and/or semantics. **********
    dataHidden: 
      {
      get: function()
        {
		if(this.hasAttribute("data-hidden")){ return this.getAttribute("data-hidden"); }
		else{ return null; }
        }
      },

    // ********** [dataSelected] **********
		// **********  Needs review for optimization and/or semantics. **********
    dataSelected: 
      {
      attribute:
        {
        validate: function(val)
          { 
          return val;
          }
        },
      get: function()
        {
        if(this.hasAttribute("data-selected")===true){
          return this.getAttribute("data-selected");
          }else{ return null; }
        }
      },
 
    dataActive: 
      {
	  // ** gets the data-active elements value ( true || false ) if it's not set it will set a data-active attribute and return false;
      get: function()
        {
        if(this.hasAttribute("data-active") === true) { return this.getAttribute("data-active"); }
        else { this.setAttribute("data-active","false"); return "false"; }
        }
      },

    // ********** [dataIcos] **********
		// ********** Param is an element node name **********
    dataIcos:
      {
      get: function()
        { return this.getElementsByTagName( this.getAttribute("data-icos") ); }
      }
    }
  };

// ********** [textUtils mixin] **********
var mixins_Text = xtag.mixins.textUtils = 
  {
  accessors:
    {
    dataLib: 
      {
      get: function()
        {
        if(this.hasAttribute("data-lib") && /url\(/.test(this.getAttribute("data-lib")) !== true ){ 
          xtag.queryChildren(document.body,"#lib-JSON");
          return jx.fire["lib-JSON"] || {};
          }
        else{ 
          return jx.fire[this.id];
          }
        }
      },
    dataList:
      {
      set: function(val){
          val = val;
        },
      get: function(){
          
        }
      }
    }
  };

// ** animate mixin
	// ** haven't started yet.
	// ** should make this specifically for css keyframe animations
var mixins_Ani = xtag.mixins.animate = 
  {
  methods:
    {
    
    },
  accessors:
    {
    
    }
  };

// ** ********** [Psuedos] ********** 
  // ** ********** [keys] **********
var _keysPsuedo = xtag.pseudos.keys = 
  {
  onAdd: function()
    {
    
    },
  onRemove: function()
      {
      
      },
  action: function(event)
      {
      if(event.value === "true")
        {
        
        }
      else if(event.value === "false")
        {
        
        }
      else
        {
        
        }
      }
  };

// ********** Start of xtag components **********
// ********** [fire-base] ********** 
var fBase = xtag.register( "fire-base", 
  {
  mixins: ["utilities"],
  lifecycle:
    {
    created: function()
      {
      var jsn = null;
        console.log("%c Attempting to retrieve JSON from 'fire-base' content.", "color: skyblue; text-decoration: underline;");
        try{
        var stg = this.innerHTML.replace(/\s+/g, " ");
          jsn = JSON.parse(stg);
          this.innerHTML = stg;
          console.log('%c JSON parsed and added to the jx.fire object.', "color: skyblue;");
          jx.fire[this.id] = jsn;
          jx.length += 1;
          console.log(jx.fire);
      }
      catch(e){
        console.log('%c ' + e,"color: skyblue;");
      }
      jx.basing = jsn;
      return jsn;
      },
    inserted: function()
      {
      
      },
    removed: function()
      {
      
      },
    attributeChanged: function()
      {
      
      }
    },
  accessors:
    {
    // [data-get] value: json dot references. *Must start with a cash sign.
    dataList:
      {
      attribute: 
        {
        validate: function(val){
          return val;
          }
        },
      set: function(val)
        {
        return val;
        },
      get: function()
        {
        return this.getAttribute("data-list");    
        }
          
      }
    }
  } );

// ********** [Left off at the pallete api] **********
var global_disc = xtag.register( "global-disc", 
  {
  extends: "form",
  mixins: ["utilities"],
  // ** Built in API
  methods:
    {
    pallete: function(options){
      // ** Check for font menu options
      if(options.fonts)
        {
        for( var fI in options.fonts)
          {
          switch(fI)
            {
            case "menu":
              options.fonts[fI] === true ?
                ("") :
                ("");
            return;
            case "activated":
            return;
            case "deactivated":
            return;
            case "label":
            return;
            case "style":
            return;
            default:
            return;
            }
          }
        }

      // ** Check for background menu options
      if(options.background)
        {
      
        }
      if(options.remove)
        {
      
        }
      if(options.add)
        {
      
        }
      }
    },
  content: function(){/*
    <fieldset style='position:relative; border-radius:100%; width:100px; height:100px; background-color:rgba(255,255,255,.5);' is="global-pallete">
      <input type="color" style="border-radius:100%; width:30px; height:30px; padding:5px;" is="global-fcolor">
      <input type="number" style="border-radius:15%; width:30px; height:auto;" is="global-fsize">
      <input type="color" style="border-radius:100%; width:30px; height:30px; padding:5px;" is="global-bgcolor">
      <div is="drop-area"></div>
      <div is="drop-area"></div>
    </fieldset>
   */},

  // ** Lifecycle
  lifecycle:
    {
    created: function()
      {
      this.setAttribute("dragging","false");
      this.setAttribute("style", "position:fixed; top:0%; left:82.5%; border-radius:0% 100% 100% 100%; width:125px; height:125px; padding:10px; background-color:rgba(255,125,25,.75);");
      }
    },

  // ** Events
  events:
    {
    // ** mouse down
    mousedown: function(event){

      // ** accepted values of the dragging attr are true or false.
      // ** the default behavior for the draggable elements direct children
      // ** when they are clicked and dragged is to drag the parent window.
      // ** To prevent this behavior set dragging="prevent" [the final behavior is in testing]
      var dragStart = function(el){
          switch(el.getAttribute("dragging"))
            {
              case "true":
              return "false";
              case "false":
              return "true";
              case "prevent":
              return "prevent";
              default:
              return "true"
            }
	  };
       // ** check for dragging attr in the event target and its parent.
      event.target.hasAttribute("dragging") === true ? (
        event.target.setAttribute("dragging", dragStart(event.target)),
        jx.drag.target = event.target
        ) : null;
      event.target.parentNode.hasAttribute("dragging") === true ? ( 
        event.target.parentNode.setAttribute("dragging", dragStart(event.target.parentNode)),
        jx.drag.target = event.target.parentNode ) : null;
      },

    // ** mouse down
    mousemove: function(event){
      if(jx.drag.target !== null){
        jx.drag.top = (event.clientY-15);
        jx.drag.left = (event.clientX-15);
        if(jx.drag.target.getAttribute("dragging") === "true"){
          jx.drag.target.style.left = jx.drag.left+"px";
          jx.drag.target.style.top = jx.drag.top+"px";
          }
        else if(jx.drag.target.getAttribute("dragging")==="prevent" && event.target.outerHTML === jx.draggint.target.outerHTML){
          jx.drag.target.style.left = jx.drag.left+"px";
          jx.drag.target.style.top = jx.drag.top+"px";
          }
        }
      },
    // ** mouse up
    mouseup: function(event){console.log(event);
      jx.drag.top = (event.clientY-15); console.log(jx.drag.top);
      jx.drag.left = (event.clientX-15);
      jx.drag.target.setAttribute("dragging","false");
      jx.drag.target.style.top = jx.drag.top+"px";
      jx.drag.target.style.left = jx.drag.left+"px";
      jx.drag.target = null;
      }
    }
  } );

/* ********** [j-select] ********** */
var jSelect = xtag.register("j-select", 
  {
  content: "<j-toggle>-|-</j-toggle>",

/* [mixins] */
  mixins: ["utilities"],

/* [lifecycle] */
  lifecycle:
    {
    created: function()
      {
      jx.fire[this.id] = {};
      },
    inserted: function()
      {
      var el = this;
      this.jReady( function(obj)
        {
        for(var i=0; i<obj.getData.length; i++)
          {
          var jOpt = document.createElement("j-option");
            el.getElementsByTagName("j-option")[0].innerHTML = "Loading blog entry...";
            jOpt.innerHTML = obj.getData[i].title;
            jOpt.setAttribute("selected","false");
            jOpt.setAttribute("title","Click to toggle selected status.");
            el.appendChild(jOpt);
            el.getElementsByTagName("j-option")[0].innerHTML = "Finished blog entry: " + (i+1);
          }
          el.getElementsByTagName("j-option")[0].innerHTML = "None selected";
        } );
      }
    },

/* [events] */
  events:
    {
    "tap:delegate(j-toggle)": function()
      {
      this.parentNode.visibility === "hidden" ? 
        ( this.parentNode.setAttribute("visibility", "visible") )
        :
         ( this.parentNode.setAttribute("visibility", "hidden") )
      }
    }
  } );

  /* ********** [j-option] ********** */
var jOption = xtag.register("j-option", 
  {
  mixins: ["utilities"],
  events:
    {
    tap: function()
      {
      var _rt = jx.fire[this.parentNode.id], _fire = jx.fire[this.parentNode.id].getData, queTray = null, _obj = null;

      for(var i = 0; i<_fire.length; i++)
        {
        _searchFunc(this.innerHTML, _fire[i].title) === null ? "" :
        (  this.selected === "false" ? this.setAttribute("selected","true") : this.setAttribute("selected","false"),
           queTray = document.createElement("j-data"), _obj = _fire[i] );
        }

      if(queTray !== null)
        {
        _rt.queueTray.appendChild(queTray);
        }
      else
        {
        
        }

      }
    },
    accessors:
      {
      selected: 
        {
        attribute:
          {
          validate: function(val){ return val; }
          },
        set: function(val)
          {
          val === "true" ? 
            ( "" ) : 
            ( "" );
          return val;
          },
        get: function()
          {
          return this.getAttribute("selected");
          }
        }
      }
  } );

  /* ********** [j-switch] ********** */
var jSwitch = xtag.register("j-switch", 
  {
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
  events: 
    {
    click: function(event){ 
        event.target.parentNode.className = event.target.hideClass || "memory";

      }
    }
  } );

    // ***** [json-editor] *****
var jEditor =  xtag.register( "json-editor", 
    {
    extends: "form",
    mixins: ["utilities","textUtils"],
    lifecycle:
      {
      created: function()
        {
        console.log("Creating JSON-EDITOR api...");
        jx.jEditor.push( new editor(this) );

			console.log("%c library data: ", "color: skyblue");
        var _jeditor = jx.jEditor[jx.jEditor.length-1];
        }
      }
  } );

    // ***** e-ln *****
var eLine = xtag.register("e-ln", {} );

    // ***** e-key *****
var eKey = xtag.register("e-key", 
    {
    extends: "input",
    mixins: ["utilities","textUtils"],
    lifecycle:
      {
      created: function(){

	  var _lib = this.parentNode.parentNode.dataLib;
        for(var i=0; i<_lib.length; i++){
        var _opt = document.createElement("option");
          _opt.value = _lib[i].name;
          this.appendChild(_opt);
        }
      },
      inserted: function(){}
      },
    events: 
      {

      }
    } );

    // ***** [e-txt] *****
var eText = xtag.register("e-txt", 
    {
    lifecycle:
       {
       
       }
    } );

    // ***** e-data *****
var eData = xtag.register("e-data", 
    {
    extends: "datalist",
    mixins: ["utilities", "textUtils"],
    lifecycle:
      {
      // ***** inserts option nodes into the datalist element *****
      created: function(){
      
      },
      // ***** inserts option nodes into the datalist element *****
      inserted: function(){
      var _lib = jx.fire["lib-JSON"];
        for(var i=0; i<_lib.length; i++){
        var _opt = document.createElement("option");

          // ***** option value is equal to the name of the package. *****
          _opt.value = _lib[i].name;
          this.appendChild(_opt);
          }
        }
      }
    } );


// ***** [toggle-btn] *****
var hideButton = xtag.register("hide-parent", 
  {
  extends: "button",
  mixins: ["utilities"],
  events:
	{
	tap: function(event)
	  {
	  var parent = event.target.parentNode;

	  	parent.setAttribute("class", "memory");
	  }
	}

  } );

// ***** [global event listeners] 
/* [scroll listener] */
window.document.addEventListener("scroll", function()
  {
  // ** *****[header up @100] 
  if(document.body.scrollTop > 100)
    { 
    var _q = xtag.query(this,"j-header")[0];
      /curtainsUp\-1/.test(_q.className) === true ? "" : _q.className = "tray curtainsUp-1";
// Needs be attached to the main content
    // var _z = xtag.query(this,"json-canvas")[0];
    //  /curtainsDown\-1/.test(_z.className) !== true ? "" : (_z.className = "_"); 

    var _p = xtag.query(this,"#header-toggle-btn")[0];
      /puddleShrink\-1/.test(_p.className) !== true ? "" : (_p.className = "puddleGrow-1");
    }
  /* [header snaps back @0] */
  else if(document.body.scrollTop === 0)
    {
    var _q = xtag.query(this,"j-header")[0];
      /curtainsUp\-1/.test(_q.className) !== true ? "" : _q.className = "tray";

    var _p = xtag.query(this,"#header-toggle-btn")[0];
      /puddleGrow\-1/.test(_p.className) !== true ? "" : (_p.className = "puddleShrink-1");

//var _z = xtag.query(this,"json-canvas")[0];
//      /curtainsDown\-1/.test(_z.className) !== true ? _z.className = "curtainsDown-1" : ("");
	  
      }
  } );

/* [load listener] */
window.addEventListener("load", function()
  {
  if(document.body.scrollTop > 50)
    { 
    var _q = xtag.query(this.document,"j-header")[0];
      /curtainsUp\-1/.test(_q.className) === true ? "" : _q.className.replace("curtainsUp-1","curtainsDown-1");
    }
  } );

/* [mouseup listener] */
window.document.addEventListener("mouseup", function(event){
    /* Global drag listener */
    jx.drag.target !== null ? ( 
      jx.drag.target.style.top = (event.clientY-30)+"px",
      jx.drag.target.style.left = (event.clientX-30)+"px",
      jx.drag.target = null ) : ("");
} );

// Filter the window [objects]
window.jx = jx;
window.pireel = pireel;

} )();