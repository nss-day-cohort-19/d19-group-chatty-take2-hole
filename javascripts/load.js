console.log("testing load.js");

var Chatty = (function(chat){

		chat.loadMessages= function (callBack){
            $.getJSON("messages.json", function(result){
                callBack(result.message);
            });
		}

	return chat;

})(Chatty || {});

