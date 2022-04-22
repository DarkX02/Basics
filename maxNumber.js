function maxNumber(input) {
    let index = 0
    let currentInput = input[index]
    let max = Number.MIN_SAFE_INTEGER

    while (currentInput !== "Stop") {
        let num = Number(currentInput)
        if (num > max) {
            max = num
        }

        index++
        currentInput = input[index] 
    }
    console.log(max);
}
maxNumber(["-1",
"-2",
"Stop"])


