//***** [Author Ship Notes] *****
( function(){
var xhrUtil = xtag.mixins.requests = {
	methods:
		{
		// ********** [type] **********
		type: function(options)
			{
			  if(options.type === "json"){
              	jx.fireRequests[el.id].json = JSON.parse(val);
			    }
			  else if(options.type === "html"){
			    jx.fireRequests[el.id].fragment = "";
			    }
			  else if(options.type === "xml"){
				jx.fireRequests[el.id].fragment = "";
			    }
			  else{
				jx.fireRequests[el.id].error = "Type not specified returned content as text.";
			    }
			},

		// ********** [jLink] **********
		jLink: function(options)
			{
			var xhr = new XMLHttpRequest();
			console.log("%c Setting xhr event properties.", "color:pink;");

			xhr.responseType = "json";
			

			xhr.open("GET",options.href,true);

			xhr.upload.addEventListener( "onloadstart", function(){
				console.log("xhr load started"); 
				} );

			xhr.upload.addEventListener( "onprogress", function(){
				console.log("xhr load in progress");
				} );

			xhr.upload.addEventListener( "onerror", function(){
				console.log("xhr load error");
				} );

			xhr.upload.addEventListener( "onload", function(){
				console.log("xhr loaded");
				} );

			xhr.upload.addEventListener( "onloadend", function(){
				console.log("xhr load end");
				} );

			

			xhr.send();

			console.log(xhr);
			return xhr;
			},

		// ********** [jReady] **********
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
		dataHref:
			{
			attribute:
				{
				validate: function(val)
					{
					console.log("%c Validating data-href attribute.","color:skyblue;")
					var param = val.replace(/url\(/,"");
					param = param.replace(/\)/,"");
					console.log("%c Validated to " + param, "color:skyblue;");
					return param;
					}
				},
			set: function(val){
			var el = this, _type = this.getAttribute("type");

			  console.log("%c Setting fireRequest object.","color:limegreen");

			  if(!jx.fireRequests[el.id])
				{
				jx.fireRequests[el.id] = {}; 
				jx.fireRequests.length += 1; 
				jx.fireRequests[el.id].error = "";
				}
			  else
				  {
				  console.log("%c A fireRequest object already exists for " + el.id, "color:limegreen")
				  }

			  jx.fireRequests[el.id].dataHREF = val;

			  console.log("%c Creating XHR constructor.", "color:limegreen;")

			  jx.fireRequests[el.id].xhr = this.jLink( {
				href: jx.fireRequests[el.id].dataHREF,
				onReady: function(val){
				  // ** val is the returned responseText
					// ** Do type checking during the jLink method.
				  }
			  } );

				},
			get: function(){
				return this.getAttribute("data-href");
				}
			},
		type: 
			{

			}
		},

	/* *****[lifecycel]***** */
	lifecycle:
		{
		created: function(){
			console.log("test")
			}
		}
	}

} )();


