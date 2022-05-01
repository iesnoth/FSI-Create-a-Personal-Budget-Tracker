let weeklyExpenses = 0
let monthlyExpenses = 0
let annualExpenses = 0

// Your Code Here
for(let i =0; i <weeklyExpenseQuestions.length; i++){
    let answer= parseInt(window.prompt(weeklyExpenseQuestions[i]))
    console.log(answer);
    weeklyExpenses = weeklyExpenses + answer;
}

function iterateOverQuestions(array){
for(let i =0; i <monthlyExpenseQuestions.length; i++){
    let answer= parseInt(window.prompt(monthlyExpenseQuestions[i]))
    console.log(answer);
    monthlyExpenses = monthlyExpenses + answer;
}
}

iterateOverQuestions(annualExpenseQuestions)
/*for(let i =0; i <annualExpenseQuestions.length; i++){
    let answer= parseInt(window.prompt(annualExpenseQuestions[i]))
    console.log(answer);
    annualExpenses = annualExpenses + answer;
}
*/