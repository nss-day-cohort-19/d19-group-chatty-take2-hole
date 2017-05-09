

let howmanyBeans = 6;
let howmanyCows = 2;

$("#resultBTN").click ( () => {
    console.log("clicked on btn");
    resultFunction(howmanyBeans, howmanyCows);
});

function resultFunction (a, b) {
    let result = a * b;
    $("#reslut-1").html(result);
}


$("#scaryBTN").click ( () => {
    $("dd").toggle();
    $("dd").is(":hidden") ? $("#scaryBTN").html("Show") : $("#scaryBTN").html("Too Scary");

});

let storyItems = $(".story");

for (let i = 0; i < storyItems.length; i++) {
    storyItems[i].onmouseover = over;
    storyItems[i].onmouseout = out;
};

function over () {
    console.log(this , "what is this");
    this.style.backgroundColor = "#cc0000";
}

function out () {
    this.style.backgroundColor = "#ffffff";
}

$(".inner").append(`, <strong>Chief</strong`);


$("#holiday").click ( () => {
    docomething($("#holiday"));
});

function docomething (obj) {
    console.log("obj", obj, event);
}






















