function getAppSettings()
{
    // TODO: Move this out of the app!
    // ...

    var settings = {
        "serverURL": "http://markblaabjerg.dyndns.org",
        "webserviceURL": "http://markblaabjerg.dyndns.org/webservice/index.php",
        "imagesURL": "http://markblaabjerg.dyndns.org/loevspring_uploads"
    }
    return settings;
}


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
function callWebservice (params, callbackFunc) {
    var script = document.createElement('script');
    script.type = "text/javascript";
    var settings = getAppSettings()
    script.src = settings["webserviceURL"] + "?callback="+ callbackFunc + "&" + params;
    var head = document.head;
    head.appendChild(script);
    head.removeChild(script);
}

