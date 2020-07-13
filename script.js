//https://github.com/AshikSalehin/Javascript-Project-1-Calculator-.git

function getHistory(){
    return document.getElementById("history-value").innerText;
}
function printHistory(num){
    document.getElementById("history-value").innerText=num;
}
function getOutput(){
    return document.getElementById("output-value").innerText;
}
function printOutput(num){
    if(num==""){
        document.getElementById("output-value").innerText=num;
    }
    else{
        document.getElementById("output-value").innerText=getFormattedNumber(num);
    }
}
function getFormattedNumber(num){
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;
}
function reverseNumberFormat(num){
    return Number(num.replace(/,/g,''));
}

var operator = document.getElementsByClassName("operator");
for(var i=0; i<operator.length; i++){
    operator[i].addEventListener('click',function(){
        if(this.id=="clear"){
            printHistory("");
            printOutput("");
        }
        /*if(this.id=="backspace"){
            var output=reverseNumberFormat(getOutput());
            if(Number(output)!=NaN){
                if(output!=""){
                    output=Number(output);
                    var mod=output%10;
                    output=output-mod
                    printOutput(output/10);
                }
            }
            else{
                var output,num;
                num = getOutput();
                output=parseInt(num);
                printOutput(output);

            }
        }*/
        else if(this.id=="backspace"){
            var output=reverseNumberFormat(getOutput()).toString();
            if(output){
                output=output.substr(0, output.length-1);
                printOutput(output);
            }
        }
        else{
            var output=getOutput();
            var history=getHistory();
            if(output!=""){
                output=reverseNumberFormat(output);//console.log(output);
                history=history+output;
                if(this.id=="="){
                    var result=eval(history);
                    printOutput(result);
                    printHistory("");
                }
                else{
                    history=history+this.id;
                    printOutput("");
                    printHistory(history);
                }
            }
        }

    });
}
var number = document.getElementsByClassName("number");
for(var i=0; i<number.length; i++){
    number[i].addEventListener('click',function(){
        var output=reverseNumberFormat(getOutput());
        if(output!=NaN){
            output=output+this.id;
            printOutput(output);
        }
    });
}