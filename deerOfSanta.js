function deerOfSanta(input) {
    let days = Number(input[0])
    let food = Number(input[1])
    let foodFor1 = Number(input[2])
    let foodFor2 = Number(input[3])
    let foodFor3 = Number(input[4])

    food1 = foodFor1*days
    food2 = foodFor2*days
    food3 = foodFor3*days
    let foodForAll = food1 + food2 + food3
    let diff = Math.abs(food - foodForAll)
    if (foodForAll > food) {
        let num = Math.ceil(diff)
        console.log(`${num} more kilos of food are needed.`);
    } else {
        let num = Math.floor(diff)
        console.log(`${num} kilos of food left.`);
    }
}
deerOfSanta(["5",
    "10",
    "2.1",
    "0.8",
    "11"])

