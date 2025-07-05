const name = prompt(`Как тебя зовут?`, `Игорь`);
const age = 2023 - +prompt(`В каком году ты родился?`, 2000);

const result = +age % 10

    if (result === 1) {
    alert(`${name}: ${age} год`);
    } 
    else if (1 < result && result < 5) {
    alert(`${name}: ${age} года`);
    } 
    else if (result === 0  ||  result > 4) {
    alert(`${name}: ${age} лет`);
    } 
    else {
    alert(`Год не число или пустое имя!`)
    }  
    