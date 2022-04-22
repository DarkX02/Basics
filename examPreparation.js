function examPreparation(input) {
    let index = 0
    let failNum = Number(input[index])
    index++
    let failCount = 0
    let gradeSum = 0
    let gradeCount = 0
    let taskCount = 0
    let isEnough = false
    let lastTask = ""

    while (failCount < failNum) {
        let task = input[index]
        if (task !== "Enough") {
            index++
            let grade = Number(input[index])
            index++
            if (grade <= 4) {
                failCount++
            }
            gradeSum += grade
            gradeCount++
            taskCount++
        } else {
            isEnough = true
            let averageScore = gradeSum / gradeCount
            console.log(`Average score: ${averageScore.toFixed(2)}`);
            console.log(`Number of problems: ${taskCount}`);
            console.log(`Last problem: ${lastTask}`);
            break
        }
        lastTask = task
    }

    if (isEnough === false) {
        console.log(`You need a break, ${failCount} poor grades.`);
    }
}
examPreparation(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"])


