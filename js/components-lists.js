/* **********[List components]********** */
( function(){

/* **********[[proto-list]**********[ */
var listProto = xtag.register( "proto-list", {
	methods:
		{
		isList: function(_data){
			
			},
		printList: function(listOpts){
			
			}
		},
	accessors:
		{
		listArray: 
			{
			attributes:{
				validate: function(_array){
					try{ _array._toJSON(); }
					catch(e){ }
					}
				}
			},
		dataArray:
			{
			attributes:
				{
				
				},
			get:function(){
				
				},
			set: function(){
				
				}
			}
		}
} );

/* ********** [check-list] ********** */
var checkList = xtag.register( "check-list", {
	prototype: listProto.prototype,
	mixins: ["utilities","requests"],
	extends: "fieldset",
	lifecycle:
		{
		created: function(){

			}
		}
} );

} )();
