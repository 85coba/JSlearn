let btnStartCount = document.getElementById('start'),
    divResultValue = document.querySelectorAll('.result-table [class *= "-value"]'),
    expensesItem = document.getElementsByClassName("expenses-item"),
    btnExpenses = document.getElementsByTagName('button')[0],
    btnOptExpenses = document.getElementsByTagName('button')[1],
    btnCount = document.getElementsByTagName('button')[2],
    inputOptExpenses = document.querySelectorAll('.optionalexpenses-item'),
    inputIncome = document.getElementById('income'),
    checkSavings = document.getElementById('savings'),
    inputSavingsSum = document.getElementById('sum'),
    inputSavingsPercent = document.getElementById('percent'),
    inputDateValue = document.querySelectorAll('.time-data [class *= "-value"]')


let money, time;

btnOptExpenses.disabled = true;
btnExpenses.disabled = true;
btnCount.disabled = true;

btnStartCount.addEventListener('click', function () {
    
    btnOptExpenses.disabled = false;
    btnExpenses.disabled = false;
    btnCount.disabled = false;

    time = prompt("Введите дату в формате YYYY-MM-DD", "");
    money = +prompt("Ваш бюджет на месяц?", "");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
    appData.timeData = time;
    appData.budget = money;
    divResultValue[0].textContent = money.toFixed();
    inputDateValue[0].value = new Date(Date.parse(time)).getFullYear();
    inputDateValue[1].value = new Date(Date.parse(time)).getMonth() + 1;
    inputDateValue[2].value = new Date(Date.parse(time)).getDate();

    
});

btnExpenses.addEventListener('click', function () {
    let sum = 0;
    for (let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;
        if ((typeof (a) === "string") && (typeof (a)) != null && (typeof (b)) != null &&
            a != '' && b != '' && a.length < 50) {
            console.log('done');
            appData.expenses[a] = b;
            sum += +b;
        } else {
            i--;
        }
    }
    divResultValue[3].textContent = sum;
});

btnOptExpenses.addEventListener('click', function () {
    for (let i = 0; i <= inputOptExpenses.length; i++) {
        let answer = inputOptExpenses[i].value;
        appData.optionalExpenses[i] = answer;
        divResultValue[4].textContent += appData.optionalExpenses[i] + ' ';
    }
});

btnCount.addEventListener('click', function () {
    if (appData.budget != undefined) {
        expenses = 0;
        for (exp in appData.expenses) {
            expenses += +appData.expenses[exp];
            console.log(exp);
        }
        expensesPerDay = expenses / 30;
        appData.moneyPerDay = (appData.budget / 30 - expensesPerDay).toFixed(2);
        divResultValue[1].textContent = appData.moneyPerDay;

        if (appData.moneyPerDay < 100) {
            divResultValue[2].textContent = 'Минимальный уровень достатка';
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            divResultValue[2].textContent = 'Средний уровень достатка';
        } else if (appData.moneyPerDay > 2000) {
            divResultValue[2].textContent = 'Високий уровень достатка';
        } else {
            divResultValue[2].textContent = 'Произошла ошибка';
        }
    } else {
        divResultValue[1].textContent = 'Budget does not exist';
    }
});

inputIncome.addEventListener('input', function(){
    let items = inputIncome.value;
    appData.income = items.split(',');
    divResultValue[5].textContent = appData.income;
});

checkSavings.addEventListener('click', function(){
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

inputSavingsSum.addEventListener('input', function(){
    if (appData.savings == true) {
        let sum = +inputSavingsSum.value,
            precent = +inputSavingsPercent.value;

        appData.monthIncome = sum / 100 / 12 * precent;
        appData.yearIncome = sum / 100 * precent;

        divResultValue[6].textContent = appData.monthIncome.toFixed(2);
        divResultValue[7].textContent = appData.yearIncome.toFixed(2);
    }
});

inputSavingsPercent.addEventListener('input', function(){
    if (appData.savings == true) {
        let sum = +inputSavingsSum.value,
            precent = +inputSavingsPercent.value;
        appData.monthIncome = sum / 100 / 12 * precent;
        appData.yearIncome = sum / 100 * precent;

        divResultValue[6].textContent = appData.monthIncome.toFixed(2);
        divResultValue[7].textContent = appData.yearIncome.toFixed(2);
    }
});

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};