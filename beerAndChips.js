function beerAndChips(input) {
    let name = input[0]
    let budget = Number(input[1])
    let beerCount = Number(input[2])
    let chipsCount = Number(input[3])

    let beerSum = beerCount * 1.20
    let chipsPrice = beerSum * 0.45
    let chipsSum = Math.ceil(chipsCount * chipsPrice)
    let totalSum = beerSum + chipsSum

    let diff = Math.abs(budget - totalSum)
    if (totalSum > budget) {
        console.log(`${name} needs ${diff.toFixed(2)} more leva!`);
    } else {
        console.log(`${name} bought a snack and has ${diff.toFixed(2)} leva left.`);
    }
}
beerAndChips(["Valentin",
    "5",
    "2",
    "4"])