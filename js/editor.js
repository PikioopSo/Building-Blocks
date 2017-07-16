// *************** [editor] ***************
var editor = class editor{
    constructor(xtagElem){      
		this.id = xtagElem.id;
        this.className = xtagElem.className;
        this.nodeName = xtagElem.nodeName;
        this.lib = xtagElem.dataLib;
        this.is = xtagElem.getAttribute("is");
    }
};