var input,operator,value;
answerFiedld=document.getElementById("Answer");

function EnterNumber(num){
    input=num;
    answerFiedld.value=input;
}
function EnterOperator(oper){
    operator=oper;
    value=input;
    input="";
    answerFiedld.value=`${value}${operator}`;
}

function EnterEqual(){
    var result;
    var num1=parseInt(value);
    var num2=parseInt(input);
    switch (operator) {
        case '+':
            result=num1+num2;
            break;
    
        case '-':
            result=num1-num2;
            break;
            
        case '*':
            result=num1*num2;
            break;
            
        case '/':
            result=num1/num2;
            break;
    
        default:
            break;
    }
    answerFiedld.value=result;
    input=result.toString();
    operator="";
    value="";
}

function EnterClear(){
    input="";
    operator="";
    value="";
    answerFiedld.value="";
}