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
function totalExpense(food,rent,cloth){
    const expense= food+rent+cloth;
    return expense;
}


document.getElementById('calculate-btn').addEventListener('click',function(){
    const incomeTotal= inputBox('income-input');
    // console.log('Total Income: ',incomeTotal);
    const foodTotal= inputBox('food-input');
    // console.log('Total Food: ',foodTotal);
    const rentTotal= inputBox('rent-input');
    // console.log('Total rent: ',rentTotal);
    const clothesTotal= inputBox('clothes-input');
    // console.log('Total cloth: ',clothesTotal);

    const expenseTotal=  totalExpense(foodTotal,rentTotal,clothesTotal);
    const balanceTotal= incomeTotal - expenseTotal;

    const note= document.getElementById('last-note');
    
    // console.log('Total Expense: ',expenseTotal);

    if(incomeTotal < expenseTotal){
        note.innerText='Income Can not be less than Expense';
        // return alert('Income Can Not be Less Than Expense')
    }
    else{
        document.getElementById('total-expense').innerText = expenseTotal;
        document.getElementById('total-balance').innerText = balanceTotal;
        note.innerText='';
    }

});

document.getElementById('save-btn').addEventListener('click',function(){
    const incomeTotal= inputBox('income-input');
    // console.log('Total Income: ',incomeTotal);
    const foodTotal= inputBox('food-input');
    // console.log('Total Food: ',foodTotal);
    const rentTotal= inputBox('rent-input');
    // console.log('Total rent: ',rentTotal);
    const clothesTotal= inputBox('clothes-input');
    // console.log('Total cloth: ',clothesTotal);

    const expenseTotal=  totalExpense(foodTotal,rentTotal,clothesTotal);
    const balanceTotal= incomeTotal - expenseTotal;

    const savePercent= inputBox('save-input');
    //console.log('Saving Percentage: ',savePercent);
    const savingAmount= incomeTotal * (savePercent/100);
    //console.log('saving amount: ',savingAmount);

    const note= document.getElementById('last-note');

    if(balanceTotal > savingAmount){
        document.getElementById('saving-amount').innerText = savingAmount;
        const remainingBalance = balanceTotal - savingAmount;
        document.getElementById('remaining-balance').innerText = remainingBalance;
        console.log('remaining amount: ',remainingBalance);
        note.innerText='';
    }
    else{
        note.innerText='Balance Can not be less than Savings';
        // return alert('Balance Can not be less than savings')
    }
});