function getElement(num){
    console.log(num);
    var result = document.getElementById('result');
    result.value += num;
}


function getResult(){
    var result = document.getElementById('result');
    result.value = eval(result.value);
}

function clr(){
    var result = document.getElementById('result');
    result.value = "";
}