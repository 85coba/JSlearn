let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}

start();

let appData = {
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: true,
        chooseExpenses: function () {
            for (let i = 0; i < 2; i++) {
                let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
                    b = prompt("Во сколько обойдется?", "");
                if ((typeof (a) === "string") && (typeof (a)) != null && (typeof (b)) != null &&
                    a != '' && b != '' && a.length < 50) {
                    console.log('done');
                    appData.expenses[a] = b;
                } else {
                    i--;
                }
            }
        },
        chooseOptExpenses: function () {
            for (let i = 1; i <= 3; i++) {
                let answer = prompt("Статья необязательных расходов?");
                appData.optionalExpenses[i] = answer;
            }
        },
        detectDayBudget: function () {
            appData.moneyPerDay = (appData.budget / 30).toFixed(2);
            alert('Ежедневный бюджет: ' + appData.moneyPerDay);
        },
        detectLevel: function () {
            if (appData.moneyPerDay < 100) {
                console.log('Минимальный уровень достатка');
            } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
                console.log('Средний уровень достатка');
            } else if (appData.moneyPerDay > 2000) {
                console.log('Високий уровень достатка');
            } else {
                console.log('Произошла ошибка');
            }
        },
        chekSavings: function () {
            if (appData.savings == true) {
                let save = +prompt("Какова сумма накоплений?"),
                    precent = +prompt("Под какой процент?");
                appData.monthIncome = save / 100 / 12 * precent;
                alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
            }
        },
        chooseIncome: function () {
            let items = prompt("Что принесет дополнительный доход? (Перечислите через зяпятую)", "");
            if (typeof (items) != "string" || items == "" || items == null) {
                console.log("Введите коректные даные");
            } else {
                appData.income = items.split(',');
                appData.income.push(prompt("Может что-то еще?"));
                appData.income.sort();
            }
            appData.income.forEach(function (item, i) {
                    alert("Способы доп. заработка:" + i + 1 + " - " + item);
                });
            }
        };

        for (let property in appData) {
            console.log("Наша программа включает в себя данные: " + property + " - " + appData[property])
        }

        // let i = 0;
        // while (i < 2) {
        //     let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        //         b = prompt("Во сколько обойдется?", "");
        //     if ((typeof (a) === "string") && (typeof (a)) != null && (typeof (b)) != null &&
        //         a != '' && b != '' && a.length < 50) {
        //         console.log('done')
        //         appData.expenses[a] = b;
        //     }
        //     i++;
        // }
        // do {
        //     i++;
        //     let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        //         b = prompt("Во сколько обойдется?", "");
        //     if ((typeof (a) === "string") && (typeof (a)) != null && (typeof (b)) != null &&
        //         a != '' && b != '' && a.length < 50) {
        //         console.log('done')
        //         appData.expenses[a] = b;
        //     }
        // } while (i < 2);