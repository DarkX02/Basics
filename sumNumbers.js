function sumNumbers(input) {
    let index = 0
    let num = Number(input[index])
    index++
    let currentNum = Number(input[index])
    let sum = 0

    while (sum < num) {
        sum += currentNum
        index++
        currentNum = Number(input[index])
    }
    console.log(sum);
}
sumNumbers(["20",
"1",
"2",
"3",
"4",
"5",
"6"])
