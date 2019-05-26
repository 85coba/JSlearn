
let money = prompt("Ваш бюджет на месяц?","");
let time = prompt("Введите дату в формате YYYY-MM-DD","");
let forExpenses1 = prompt("Введите обязательную статью расходов в этом месяце","");
let forExpensesSum1 = prompt("Во сколько обойдется?","");
let forExpenses2 = prompt("Введите обязательную статью расходов в этом месяце","");
let forExpensesSum2 = prompt("Во сколько обойдется?","");
let appData = {
    budjet: money,
    timeData: time,
    expenses: {
        [forExpenses1] : forExpensesSum1,
        [forExpenses2] : forExpensesSum2 
    },
    optionalExpenses: null,
    income: [],
    savings: false
};
console.log(appData);
alert(money/30);