function minNumber(input){
    let index = 0
    let currentInput = input[index]
    let min = Number.MAX_SAFE_INTEGER

    while (currentInput !== "Stop") {
        let num = Number(currentInput)
        if (num < min) {
            min = num
        }

        index++
        currentInput = input[index] 
    }
    console.log(min);
}
minNumber(["100",
"99",
"80",
"70",
"Stop"])
