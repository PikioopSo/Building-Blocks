// *************** [syntax] ***************
class syntax {
    constructor(opts){
       this.onTokenFound = opts.onTokenFound;
       this.onCommandTerminate = opts.onCommandTerminate;
	   this.listen = opts.listen;
    }

	// ** ********** [returns an array of command lines] **********
	sortToLines(stg){
        var val = "", ret = [];
        for(var i=0; i < stg.length; i++){
          if(stg[i] === ";"){
            ret.push(val); val = "";
            }
          else{
            val+=stg[i];
            }
          }
        return ret;
    }

	seperators(stg){
		var rators = stg.match(/[\w+][\.\,\;]/g); return rators;
	}

	lnEnds(stg){
		var rators = stg.match(/\w*\-*\w*\;/g); return rators;
	}
}

// ********** Begining of definition creation. **********
// ********** [j-style] **********
var cssAtSyntax = jx.jxLock(
  {
  id: "css_token",
  type: "component/language/text/css",
  title: "CSS Token",
  token: "@",
  names: ["j-style"],
  onTokenFound: function(docs)
    {
    // do something to the docs
	
    },
  onCommandTerminate: function(docs)
    {
    // do something to the docs
	
    },
  register: 
    {
    mixins: ["utilities"],
    lifecycle:
      {
      created: function()
        {
        for(var z in jx.fire){
		  console.log("%c ");
		  }
        },
	  inserted: function(){
		
	    }
      },
    accessors:
      {
      animate:
        {
        attribute:
          {
          validate: function(val){
            
            }
          },
        set: function(val){
          
          },
        get: function(){
          
          }
        }
      }

    }
  } );