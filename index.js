let weeklyExpenses = iterateOverQuestions(weeklyExpenseQuestions);
let monthlyExpenses = iterateOverQuestions(monthlyExpenseQuestions)
let annualExpenses = iterateOverQuestions(annualExpenseQuestions)

// Your Code Here
function iterateOverQuestions(array){
    let sum = 0;
    for(let i =0; i <array.length; i++){
    let answer= parseInt(window.prompt(array[i]))
    console.log(answer);
    sum += answer;
    }
    return sum;
}
