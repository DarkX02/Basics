function sumOfNumbers(input) {
    let num = input[0]
    let result = 0

    for (i = 0; i < num.length; i++) {
        let digit = Number(num[i])
        result += digit
    }
    console.log(`The sum of the digits is:${result}`);
}
sumOfNumbers(["56784"])