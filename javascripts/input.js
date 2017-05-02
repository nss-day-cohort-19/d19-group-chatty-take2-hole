console.log('input has loaded');

var Chatty= (function(altchatty){

	var messageArr=[];
    var counter = 1;
    //counter gives each div a unique ID

	altchatty.inputChange = function(elementID,message){
        var outputElementID= document.getElementById(elementID);//put  in parent ID var
                                    //pass in message which is holding input.value
        outputElementID.innerHTML += `<div id="newMessage--${counter}">
                                    <p>${message}</p>/
                                    <button>Delete</button>
                                    </div>`;

        var newMessage = document.getElementById("newMessage--" + counter);
        //push items in as objects so they can be grabbed by key names
        messageArr.push({id: `newMessage--${counter}`, paragraph: message });

        counter++;
    };

    //this method is supposed to remove items from private array and also except an Argument from 3rd IFFE of an Element ID
    altchatty.privateArray = function (IDArgument) {
        for (var i = 0; i < messageArr.length; i++) {
            if (messageArr[i].id === IDArgument) {
                console.log("did we work?");
                messageArr.splice(i, 1);
                break;
            };
        };
    }
	return altchatty;

}(Chatty || {}));

    //// order of events that need to happen. ////////

    //1. 2nd IFFE creates a method that removes message from private Array
    //4. The 3rd IFFE creates a method to delete Div Element from the DOM by ID

    //2. Delete button is clicked.
    //3. That clickEvent calls a function
    //4. That function is on the main.js page
    // it should call the 2nd and 3rd IFFE   this should pass in ID's as arguments


//***** add this under push on line 20 if you can figure out how to add eventListen and make it work with 3rd IFFE
//        var getButton = newMessage.getElementsByTagName("button")[0];
//        getButton.addEventListener("click", function(event){
//            //call  a method in 3rd IFFE send an ID(per instructions) to that method
//            var parentID = getButton.parentElement.id;
//
//        });
