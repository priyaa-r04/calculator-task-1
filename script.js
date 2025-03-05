let display = document.getElementById("display");
let buttons = document.querySelectorAll('.btn');
let clearButton = document.querySelector("#buttons #clear");
let equalButton = document.querySelector("#buttons #equal");
let removeButton = document.getElementById("remove")

buttons.forEach(button => {
    button.addEventListener("click" , function() { 
        if(button.id==='remove'){
            display.innerText =  display.innerText.split('').slice(0, -1).join('');
        }else if(button.id==='equal'){
            try{
                let result = eval(display.innerText);
                display.innerText = result;
        
            } catch{
                display.innerText = "Error";
            }
        }else{
        display.innerText += button.innerText;
        }
    });
});

clearButton.addEventListener("click", function(){
    display.innerText = "";
});

