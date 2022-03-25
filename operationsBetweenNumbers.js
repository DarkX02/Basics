function operationsBetweenNumbers(input) {
    let n1 = Number(input[0])
    let n2 = Number(input[1])
    let op = input[2]
    let result = 0

    switch (op) {
        case "+":
            result = n1 + n2
            break
        case "-":
            result = n1 - n2
            break
        case "*":
            result = n1 * n2
            break
        case "/":
            result = n1 / n2
            break
        case "%":
            result = n1 % n2
            break
    }

    if (op === "+" || op === "-" || op === "*") {
        if (result % 2 === 0) {
            console.log(`${n1} ${op} ${n2} = ${result} - even`);
        } else {
            console.log(`${n1} ${op} ${n2} = ${result} - odd`)
        }
    } else if ((op === "/" || op === "%") && n2 === 0) {
        console.log(`Cannot divide ${n1} by zero`);
    } else if (op === "/") {
        console.log(`${n1} ${op} ${n2} = ${result.toFixed(2)}`);
    } else if (op === "%") {
        console.log(`${n1} ${op} ${n2} = ${result}`)
    }
}
operationsBetweenNumbers(["10", "1", "-"])





