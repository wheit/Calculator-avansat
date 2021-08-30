//Numbers//
let digit9=document.querySelector('#digit9');
let digit8=document.querySelector('#digit8');
let digit7=document.querySelector('#digit7');
let digit6=document.querySelector('#digit6');
let digit5=document.querySelector('#digit5');
let digit4=document.querySelector('#digit4');
let digit3=document.querySelector('#digit3');
let digit2=document.querySelector('#digit2');
let digit1=document.querySelector('#digit1');
let digit0=document.querySelector('#digit0');

//Operators//
let multiply =document.querySelector('#multiply');
let demultiply=document.querySelector('#demultiply');
let substract=document.querySelector('#substract');
let add=document.querySelector('#add');
let pow=document.querySelector('#pow');
let sqrt=document.querySelector('#sqrt');
let del =document.querySelector('#C')
let delAlll=document.querySelector('#CE')

let rest=document.querySelector('#rest')

let equals =document.querySelector('#equals');
let result =document.querySelector('.result');


let firstNumber=0;
let secondNumber=0;
let operator= '';
//Flag
let isFirstNumber = true;

function buildNumber (digit){
    if (isFirstNumber){
        firstNumber=(firstNumber * 10) + digit ;
    result.innerHTML=firstNumber;
    }
    else{
    secondNumber=(secondNumber*10)+digit
    result.innerHTML=secondNumber;
    }
}
//Event listener

digit9.addEventListener('click',function(){
    buildNumber(9);
});
digit8.addEventListener('click',function(){
    buildNumber(8);
});
digit7.addEventListener('click',function(){
    buildNumber(7);
});
digit6.addEventListener('click',function(){
    buildNumber(6);
});
digit5.addEventListener('click',function(){
    buildNumber(5);

});    
digit4.addEventListener('click',function(){
    buildNumber(4);

});
digit3.addEventListener('click',function(){
    buildNumber(3);
});
digit2.addEventListener('click',function(){
    buildNumber(2);
})
digit1.addEventListener('click',function(){
    buildNumber(1);
})
digit0.addEventListener('click',function(){
    buildNumber(0);
})
multiply.addEventListener('click',function(){
    isFirstNumber=false;
    operator='*';
    result.innerHTML=operator;

});
demultiply.addEventListener('click',function(){
    isFirstNumber=false;
    operator='/';
    result.innerHTML=operator;
})
add.addEventListener('click',function(){
    isFirstNumber=false;
    operator='+';
    result.innerHTML=operator;
})
substract.addEventListener ('click',function(){
    isFirstNumber=false;
    operator='-';
    result.innerHTML=operator;
})
pow.addEventListener('click',function(){
    isFirstNumber=false;
    operator='x<sup>2';
    result.innerHTML = operator;
})
sqrt.addEventListener('click',function(){
    isFirstNumber=false;
    operator='&radic;x';
    result.innerHTML = operator;
})
//Operatiii
equals.addEventListener ('click' ,function(){
    let res
    switch(operator){
            case '*':
                res = firstNumber * secondNumber;
                break;
            case '/':
            res = firstNumber / secondNumber;
                break;        
            case '+':
            res = firstNumber + secondNumber;
                break;
            case '-':
            res = firstNumber - secondNumber;
                break;  
            case '%':
            res = firstNumber % secondNumber;
                break;  
            case 'x<sup>2':
            res = Math.pow(firstNumber,2);
                break;
            case '&radic;x':
            res = Math.sqrt(firstNumber);
                break;
            default:
            alert("Nu merge!!!")
    }
    result.innerHTML=res;
    firstNumber=res;
    secondNumber=0;
    operator='';
})
//Delete buttons
del.addEventListener('click',function(){

    if (isFirstNumber){
        firstNumber=Math.floor(firstNumber/10)
         result.innerHTML=firstNumber;
    
        }
    else{
        secondNumber=Math.floor(secondNumber/10)
        result.innerHTML=secondNumber;
    }
})
delAlll.addEventListener('click',function(){
    if(isFirstNumber){
        firstNumber=0;
        result.innerHTML=firstNumber;
    }
    else{
        secondNumber=0
        result.innerHTML=secondNumber;
    }
    

    
})




