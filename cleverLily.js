function cleverLily(input) {
    let years = Number(input[0])
    let price = Number(input[1])
    let toyPrice = Number(input[2])
    let toys = 0
    let money = 0
    let sum = 0

    for (let i = 1; i <= years; i++) {
        if (i % 2 === 0) {
            money += 10
            sum += money
            sum--
        } else {
            toys++
        }
    }
    let toySum = toys*toyPrice
    let totalSum = sum+toySum

    let diff = (Math.abs(totalSum-price)).toFixed(2)
    if(totalSum>=price){
        console.log(`Yes! ${diff}`);
    }else{
        console.log(`No! ${diff}`);
    }
}
cleverLily(["21",
"1570.98",
"3"])
