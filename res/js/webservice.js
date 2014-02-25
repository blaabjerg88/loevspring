$("#testButton").click(function(){
	callWebservice('method=getComments&image_id=1', 'onCallback');
})
function callWebservice (params, callbackFunc) {
	var script = document.createElement('script');
    script.type = "text/javascript";
    script.src = "http://markblaabjerg.dyndns.org/test_webservice/index.php?callback="+ callbackFunc + "&" + params;
    var head = document.head;
    head.appendChild(script);
    head.removeChild(script);
}
function onCallback (data) {
    console.log("onCallback")
    console.log(data)
}