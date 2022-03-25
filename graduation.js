function graduation(input) {
    let index = 0
    let name = input[index]
    index++
    let mark = Number(input[index])
    let grade = 1
    let failCounter = 0
    let markSum = 0
    let isExpelled = false

    while (grade <= 12) {
        if (mark < 4) {
            failCounter++
        } else {
            markSum += mark
        }

        if (failCounter > 1) {
            isExpelled = true
            let expletionGrade = grade - 1
            console.log(`${name} has been excluded at ${expletionGrade} grade`);
            break
        }

        grade++
        index++
        mark = Number(input[index])
    }

    let averageGrade = markSum / 12
    if (isExpelled = false) {
        console.log(`${name} graduated. Average grade: ${averageGrade.toFixed(2)}`);
    }

}
graduation(["Mimi",
    "5",
    "6",
    "5",
    "6",
    "5",
    "6",
    "6",
    "2",
    "3"])

