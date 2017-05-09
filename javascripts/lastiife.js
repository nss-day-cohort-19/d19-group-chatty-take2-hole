console.log('last iife loaded');
var Chatty= (function(blah){

	blah.deleteFromDom= function(event){
		var findId= event.target.closest('div');
		console.log("testing 123",findId.id);
        $("#" + findId.id).remove();
        input.val("");
	}

return blah;
})(Chatty || {});
