//const incomeInput= document.getElementById('income-input').value;
//console.log(incomeInput);

function inputBox(inputField){
    const userInput = document.getElementById(inputField);
    const inputValue = parseFloat(userInput.value);
    if(typeof(inputValue)!='number' || inputValue <= 0)
    {
        return alert('Please Enter Valid Number > 0');  
    }
    else{
        console.log(typeof(inputValue));
        //return parseFloat(inputValue);
    }
}

document.getElementById('calculate-btn').addEventListener('click',function(){
    const incomeTotal= inputBox('income-input');
    // console.log("Total Income: ",incomeTotal);
});