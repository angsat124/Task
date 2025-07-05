const discount = prompt(`Введите промокод`);
switch (discount) {
    case "скиДка": {
        alert(`Промокод не работает`);
        break;                     
    }
    case "Cкидка": {
        alert(`Промокод не работает`);
        break;
    }
    case "СКИДКА": {
        alert(`Промокод не работает`);
        break;
    }    
    case "CкиДка": {
        alert(`Промокод применен`);
        break;
    } 
    default: {
        alert(`Промокод не работает`);
    }
}