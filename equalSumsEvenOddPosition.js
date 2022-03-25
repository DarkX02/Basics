function equalSumsEvenOddPosition(input) {
    let start = Number(input[0])
    let end = Number(input[1])

    let result = ""

    for (let i = start; i <= end; i++) {
        let numToString = "" + i
        let evens = 0
        let odds = 0
        for (let index = 0; index < numToString.length; index++) {
            if (index % 2 === 0) {
                evens += Number(numToString[index])
            } else {
                odds += Number(numToString[index])
            }
        }
        if (odds === evens) {
            result += numToString + " "
        }
    }
    console.log(result);

}
equalSumsEvenOddPosition(["100115",
    "100120"]) 

