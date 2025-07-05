const leftToRight = 'довод';
 let rightToLeft = '';
for (let i = leftToRight.length - 1; i >= 0; i -= 1) {
    rightToLeft += leftToRight[i];
}

if (leftToRight === rightToLeft) {
    console.log(`Слово ${leftToRight} является палиндромом`);
    } else {
    console.log(`Слово ${leftToRight} не является палиндромом`);
    }

const leftToRight1 = 'сантимент';
 let rightToLeft1 = '';
for (let i = leftToRight1.length - 1; i >= 0; i -= 1) {
    rightToLeft1 += leftToRight1[i];
}

if (leftToRight1 === rightToLeft1) {
    console.log(`Слово ${leftToRight1} является палиндромом`);
    } else {
    console.log(`Слово ${leftToRight1} не является палиндромом`);
    }

