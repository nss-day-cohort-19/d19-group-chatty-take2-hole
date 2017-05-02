console.log("testing load.js");

var Chatty = (function(Chatty){

    Chatty.loadMessages = function (callBack){
        var loader = new XMLHttpRequest();


        loader.addEventListener("load", function (event){
            var messages = JSON.parse(this.responseText).message;
            callBack(messages);
        });

        loader.addEventListener("error", function(event){
            console.log("Data did not load");
        });

        loader.open("GET", "messages.json");
        loader.send();
    }

    return Chatty;

})(Chatty || {});
