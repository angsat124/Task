const name = prompt(`Как тебя зовут?`, `Игорь`);
const age = 2023 - +prompt(`В каком году ты родился?`, 2000);
    if (age === 23) {
    alert(`${name}: ${age}`);
    } else {
    alert(`Год должен быть числом!`);
    }


