const buttons = document.querySelectorAll(".btn");
const btnAC = document.getElementById("AC");
const btnDE = document.getElementById("DE");
const btnEq = document.querySelector(".btnEqual");
let input = document.querySelector("input"); 

buttons.forEach(function(btn)
{
    btn.addEventListener("click",event => { 
    input.value += btn.textContent;

    });
});        

btnAC.addEventListener("click", event =>{
    input.value = "";
});

btnDE.addEventListener("click", event =>{
    const arr = Array.from(input.value)
    /* Array.from() methodu her bir karakteri
    bir dizi elemanına dönüştürür*/
    arr.pop();
    const newArray = arr
    input.value = newArray.join(""); /*boşluk olmadan birşeştirir*/
});

btnEq.addEventListener("click", event =>{

    const takeInput = input.value;
    let index,operator,result;

    for(let i=0; i<takeInput.length; i++)
    {
        if(takeInput[i] == "+") { index = i; operator = "+"; break;}
        else if(takeInput[i] == "-") { index = i; operator = "-"; break;}
        else if(takeInput[i] == "*") { index = i; operator = "*"; break;}
        else if(takeInput[i] == "/") { index = i; operator = "/";break;}   
    }
    
    firstPart = takeInput.substring(0,index);
    secondPart = takeInput.substring(index+1);

    if(operator == "+"){
        result = parseFloat(firstPart) + parseFloat(secondPart);
    }
    else if(operator == "-"){
            result = parseFloat(firstPart) - parseFloat(secondPart);
    }
    else if(operator == "*"){
            result = parseFloat(firstPart) * parseFloat(secondPart);
    }

    else if(operator == "/"){
            result = parseFloat(firstPart) / parseFloat(secondPart);
    }
    
    input.value = result.toString();
        
});