let display = document.getElementById("display");

function appendvalue(value){
    display.value += value ;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try {
        display.value = eval(display.value)
    }
    catch{
        display.value = "Error";
    }
}

function changeBg(color){

    if (color === "Yellow"){
        document.body.style.background = "yellow";
    } else if (color === "Green") {
        document.body.style.background = "green"
    } else {
        document.body.style.background = "blue"
    }
}