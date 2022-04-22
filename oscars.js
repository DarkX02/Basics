function oscars(input) {
    let index = 0
    let actorName = input[index]
    index++
    let academyPoints = Number(input[index])
    index++
    let numJudges = Number(input[index])
    index++
    let points = 0
    let sumPoints = 0
    sumPoints += academyPoints
    let isLessPoints = true

    for (let i = 0; i < numJudges; i++) {
        let judgeName = input[index]
        index++
        let judgePoints = input[index]
        index++

        points = ((judgeName.length) * judgePoints) / 2
        sumPoints += points

        if (sumPoints > 1250.5) {
            isLessPoints = false
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${sumPoints.toFixed(1)}!`);
            break
        }
    }
    if (isLessPoints) {
        let diff = 1250.5 - sumPoints
        console.log(`Sorry, ${actorName} you need ${diff.toFixed(1)} more!`);
    }
}
oscars(["Zahari Baharov",
"205",
"4",
"Johnny Depp",
"45",
"Will Smith",
"29",
"Jet Lee",
"10",
"Matthew Mcconaughey",
"39"])

