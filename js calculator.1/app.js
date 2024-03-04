let screen = document.getElementById("screen");
let screenValue = "";

let buttons = document.querySelectorAll("button");
for(item of buttons){
    item.addEventListener("click",(i)=>{
        buttonText = i.target.innerText;
        // console.log(buttonText);
        if(buttonText == "X"){
            buttonText = "*";
            screenValue +=  buttonText;
            screen.value = screenValue;
        }else if (buttonText == "C"){
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == "="){
            screen.value = eval(screenValue);
        }else{
            screenValue +=  buttonText;
            screen.value = screenValue;
        }
    })
}
