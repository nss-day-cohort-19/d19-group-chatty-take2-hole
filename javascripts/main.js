console.log("testing main.js");

var clearAll= document.getElementById('clear');
var output1= document.getElementById('output');
var input=document.getElementById('input');

//Tamela .....calling the Iffe Method with enter key, used Nicks code for this and caled a method
input.addEventListener("keyup", keyPressFunction);

function keyPressFunction (event) {
    if (event.keyCode === 13) {
        Chatty.inputChange('output', input.value);
    }
}
/// Tamela

//////???What is this doing??????

clearAll.addEventListener('click', function(event){
	console.log('clear button responding');
	if(output1.innerHTML== 0 || output2.innerHTML == 0){
		output1.innerHTML="";
		console.log('is this working?');
	}

	console.log(output1.innerHTML);
});


//**** AR - When the user clicks on the dark theme checkbox, change the background color of your application to a dark gray, and the font color for messages should be white(ish)... you pick.

var darkTheme = document.getElementById("darkTheme");
var largeText = document.getElementById("largeText");

var bodyStyle = document.getElementById("ar-bodyStyle");
var messageArea = document.getElementById("messageArea");

darkTheme.addEventListener("click", function() {
	var themeVal = darkTheme.value;
	if (themeVal == 1) {
		event.target.closest("body").classList.toggle("ar-bodyStyle");
	}
})

largeText.addEventListener("click", function() {
	var textVal = largeText.value;
	if (textVal == 2) {
		messageArea.classList.toggle("ar-fontSize");
	}
})

//**** AR



function jsonMessage (messages){
	var divContent;
	var text= messages;
	for(var i=0; i< text.length; i++){
		divContent= "<span>"+ text[i].text+"</span>"+ "<button class='delete'>" + 'Delete' + "</button>"+"<br>";
		output1.innerHTML+= divContent;
	}
}
Chatty.loadMessages(jsonMessage);
//Chatty.inputChange();
/// this was calling the method in the wrong way and through an error






