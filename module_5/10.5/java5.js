const age = +prompt(`Введите свой возраст`, 21);
let sum = +prompt(`Введите желаемую сумму, кратную 1000`, 45434)
sum = Math.floor(sum/1000)*1000

if (age < 18) {
    alert(`Лицам до 18 лет кредит не выдаем`);
    } 
else if (17 < age && age < 22 && sum <= 50000 ) {
    alert(`Мы можем выдать Вам ${sum}`);
    } 
 else if (21 < age && age < 36 && sum <= 400000 ) {
    alert(`Мы можем выдать Вам ${sum}`);
    } 
else if (35 < age && age < 66 && sum <= 1000000) {
    alert(`Мы можем выдать Вам ${sum}`)
    }  
else alert(`Неподходящие данные`) 

