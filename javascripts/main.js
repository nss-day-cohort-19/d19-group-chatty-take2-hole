console.log("testing main.js");

const clearAll = $("#clear");
const output = $("#output");
const input = $("#input");
const darkTheme = $("#darkTheme");
const largeText = $("#largeText");
const bodyStyle = $("#ar-bodyStyle");
const messageArea = $("#messageArea");
let span;


output.click( (event) => {
    if (event.target.tagName == "BUTTON" && event.target.innerHTML == "Delete") {
        Chatty.deleteFromDom(event);
    }else if (event.target.tagName == "BUTTON" && event.target.innerHTML == "Edit") {
        input.focus();
        console.log("testing event", event.target);
        let editBTN = event.target.parentElement.firstElementChild.innerText;
        input.val(editBTN);
        span = event.target.parentElement.firstElementChild;
    }

});

input.keyup( (event) => {
	let key = event.keyCode;

    if (key === 13 && span == null) {
        Chatty.inputChange(input.val());
        input.val("");
    }else if (key === 13 && span != null) {
        span.innerText = input.val();
        span = null;
        input.val("");
    }
});


clearAll.click(() => {
    output.html("");
    input.val("");
});


darkTheme.click( () => {
    input.focus();

	if ($(darkTheme[value="1"])) {
        $("body").toggleClass("ar-bodyStyle");
        //adding background color, border,  and font color to clear Message BTN
        var messageButt = $(".tl-message-btn");
        messageButt.toggleClass("tl-message-btn-toggle");

        //adding background color, border,  and font color to clear input field, toggling same class as before
        input.toggleClass("tl-message-btn-toggle");

        //adding background color, border,  and font color to all BTNs starting at index 1, toggling same class as before
        $("button").toggleClass("tl-button");
	}
});


largeText.click( () => {
	if ($(largeText[value="2"])) {
		messageArea.toggleClass("ar-fontSize");
	}
})


function jsonMessage (messages){
	let divContent;
    let count = 0;
	let text= messages;
	for(let i=0; i< text.length; i++){
		divContent= "<div id='json-id" + i + "' class='tl-style-div'>"+"<span>"+ text[i].text+"</span><br>"+ "<button class='delete'>" + 'Delete' + "</button>" + "<button>Edit</button>" +"<br>"+"</div>";
		output.append(divContent);
	}
}

Chatty.loadMessages(jsonMessage);
