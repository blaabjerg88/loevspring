/*********************************************************************
Add this where you want to implement a call to the webservice:

$("#testButton").click(function(){
    callWebservice('method=getComments&image_id=1', 'YOUR_CALLBACK_FUNCTION');
})
function YOUR_CALLBACK_FUNCTION (data) {
    console.log("onCallback")
    console.log(data)
}
*********************************************************************/

/*
$("#contentMenu a").click(function(e){
    console.log("ELEM: " + e);
    return false;
})*/

function navigate(page)
{
    window.location.href = page;
}

function callWebservice (params, callbackFunc) {
    var script = document.createElement('script');
    script.type = "text/javascript";
    script.src = "http://markblaabjerg.dyndns.org/webservice/index.php?callback="+ callbackFunc + "&" + params;
    var head = document.head;
    head.appendChild(script);
    head.removeChild(script);
}

