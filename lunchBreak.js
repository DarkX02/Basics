function lunchBreak(input) {
    let title = input[0]
    let episode = Number(input[1])
    let breakLenght = Number(input[2])

    let lunchTime = breakLenght / 8
    let rest = breakLenght / 4
    let totalTime = lunchTime + rest + episode

    let diff = Math.ceil(Math.abs(totalTime - breakLenght))
    if (totalTime <= breakLenght) {
        console.log(`You have enough time to watch ${title} and left with ${diff} minutes free time.`)
    } else {
        console.log(`You don't have enough time to watch ${title}, you need ${diff} more minutes.`);
    }
}
lunchBreak(["Teen Wolf", "48", "60"])

