console.log('input has loaded');

var Chatty= (function(altchatty){
	let messageArr = [];
	let counter = 1;
	altchatty.inputChange = function(message){

        let messageCount = output.find("div");
        let outputDOM = `<div id='newMessage--${counter}' class='tl-style-div'>
            <span>${message}</span>
            <br>
            <button id='newDeleteBTN--${counter}'>Delete</button>
            <button id='newEditBTN--${counter}'>Edit</button>
            </div>`;

        output.append(outputDOM);

        if (darkTheme.is(":checked")) {
            $("#newDeleteBTN--" + counter).toggleClass("tl-button");
            $("#newEditBTN--" + counter).toggleClass("tl-button");
        }

        if (messageCount.length > 20) {
            $("#output div").first().remove();
        }

        messageArr.push({id: `newMessage--${counter}`,span: message});
        counter++;
    }

	altchatty.privArr= function(argID){
		for(let i = 0; i < messageArr.length; i++){
			if(messageArr[i].id=== argID){
				messageArr.splice(i,1);
				break;
				console.log(messageArr[i]);
			}
		}
	}
	return altchatty;
})(Chatty || {});
