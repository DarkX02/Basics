function vacation(input) {
    let index = 0
    let moneyNeeded = Number(input[index])
    index++
    let moneySaved = Number(input[index])
    let days = 0
    let spendDays=0
    let isHaveMoney = true

    while (moneyNeeded > moneySaved) {
        index++
        let action = input[index]
        index++
        let actionMoney = Number(input[index])
        days++

        if (action === "save") {
            spendDays = 0
            moneySaved += actionMoney
        } else {
            spendDays++
            if(spendDays >=5){
                isHaveMoney = false
                console.log("You can't save the money.");
                console.log(days);
                break
            }
            if (moneySaved <= actionMoney) {
                moneySaved = 0
            } else {
                moneySaved -= actionMoney
            }
        }
    }

    if(isHaveMoney){
        console.log(`You saved the money for ${days} days.`);
    }
}
vacation(["250",
"150",
"spend",
"50",
"spend",
"50",
"save",
"100",
"save",
"100"])


