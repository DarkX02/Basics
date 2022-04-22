function goldMine(input) {
    let index = 0
    let = locationCount = Number(input[index])
    index++

    for (i = 1; i <= locationCount; i++) {
        let avgGoldGoal = Number(input[index])
        index++
        let days = Number(input[index])
        index++
        let totalSum = 0
        for (let j = 1; j <= days; j++) {
            let goldPerDay = Number(input[index])
            index++
            totalSum += goldPerDay
        }
        let avgGold = totalSum / days
        if (avgGold >= avgGoldGoal) {
            console.log(`Good job! Average gold per day: ${avgGold.toFixed(2)}.`);
        } else {
            let diff = avgGoldGoal - avgGold
            console.log(`You need ${diff.toFixed(2)} gold.`);
        }
    }
}
goldMine(["1",
"5",
"3",
"10",
"1",
"3"])