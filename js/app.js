//const incomeInput= document.getElementById('income-input').value;
//console.log(incomeInput);

function inputBox(inputField){
    const userInput = document.getElementById(inputField);
    const inputValue = parseFloat(userInput.value);
    if(typeof(inputValue)!='number' || inputValue <= 0)
    {
        return alert('Please Enter Valid Number > 0');  
    }
    else if(userInput.value == ''){
        return alert('Please Fill the Empty Field.')
    }
    else{
        return inputValue;
    }
}

document.getElementById('calculate-btn').addEventListener('click',function(){
    const incomeTotal= inputBox('income-input');
    console.log('Total Income: ',incomeTotal);
    const foodTotal= inputBox('food-input');
    console.log('Total Food: ',foodTotal);
    const rentTotal= inputBox('rent-input');
    console.log('Total rent: ',rentTotal);
    const clothesTotal= inputBox('clothes-input');
    console.log('Total cloth: ',clothesTotal);

    const expenseTotal= foodTotal+rentTotal+clothesTotal;
    console.log('Total Expense: ',expenseTotal);




});