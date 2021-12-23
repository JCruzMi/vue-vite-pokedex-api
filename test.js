if(obj.detail.messageId) {
    
    var currDiv = document.querySelectorAll('[data-id="'+obj.detail.messageId+'"]');
    var currMessage = document.getElementById('message');
          
    if(obj.detail.tags["badges"]) {		
        if(obj.detail.tags["badges"].includes("subscriber")||obj.detail.tags["badges"].includes("founder")) {
            currDiv[0].classList.add("sub");
        }	
        if(obj.detail.tags["badges"].includes("vip")) {
            currDiv[0].classList.add("vip");
        }
    }
    
    if(obj.detail.tags["mod"]) {		
        if(obj.detail.tags["mod"] == "1") {
            currDiv[0].classList.add("mod");
            currMessage.classList.add("mod");
        }		
    }
    
    if(obj.detail.owner) {
        currDiv[0].classList.add("owner");
        currMessage.classList.add("owner");
    }
    
}