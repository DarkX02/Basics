function accountBalance(input) {
    let index = 0
    let currentInput = input[index]
    let sum = 0

    while (currentInput !== "NoMoreMoney") {
        let num = Number(currentInput)
        if (currentInput > 0) {
            sum += num
            console.log(`Increase: ${num.toFixed(2)}`);
        }else{
            console.log("Invalid operation!");
            break
        }

        index++
        currentInput = input[index]
    }
    console.log(`Total: ${sum.toFixed(2)}`);

}
accountBalance(["120",
"45.55",
"-150"])

