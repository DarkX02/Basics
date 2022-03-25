function shopping(input) {
    let budget = Number(input[0])
    let n = Number(input[1])
    let m = Number(input[2])
    let p = Number(input[3])

    let videocard = n * 250
    let processor = m * (videocard * 0.35)
    let RAM = p * (videocard * 0.10)
    let sum = videocard + processor + RAM

    if (n > m) {
        sum = sum * 0.85
    }

    let diff = (Math.abs(budget - sum)).toFixed(2)
    if (sum <= budget) {
        console.log(`You have ${diff} leva left!`)
    } else {
        console.log(`Not enough money! You need ${diff} leva more!`);
    }
}
shopping(["900",
    "2",
    "1",
    "3"])
