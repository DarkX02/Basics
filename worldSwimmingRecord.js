function worldSwimmingRecord(input) {
    let record = Number(input[0])
    let distance = Number(input[1])
    let timeSecPer1M = Number(input[2])

    let time = distance*timeSecPer1M
    let timePer15 = Math.floor(distance/15)
    let resistanceTime= timePer15*12.5
    let totalTime=resistanceTime+time

    if (record > totalTime) {
        console.log(`Yes, he succeeded! The new world record is ${(totalTime).toFixed(2)} seconds.`)
    } else {
        let diff = Math.abs(record - totalTime)
        console.log(`No, he failed! He was ${(diff).toFixed(2)} seconds slower.`)
    }
}
worldSwimmingRecord(["556655.8",
    "3017",
    "5.03"])

