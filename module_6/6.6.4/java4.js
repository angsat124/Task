const o = `o`
const x = `x`

for (let i = 0; i < 3; i +=1) {
    if (i % 2 === 0) {
        console.log(`${o} ${x} ${o}`)
    } else {
        console.log(`${x} ${o} ${x}`)
    }
    console.log()
}


