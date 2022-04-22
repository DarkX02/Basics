function toyShop(input) {
    let price = Number(input[0])
    let puzzle = Number(input[1])
    let doll = Number(input[2])
    let teddyBear = Number(input[3])
    let minion = Number(input[4])
    let truck = Number(input[5])

    let totalCount = puzzle + doll + teddyBear + minion + truck
    let total = puzzle * 2.60 + doll * 3 + teddyBear * 4.10 + minion * 8.20 + truck * 2
    if (totalCount >= 50) {
        total = total * 0.75
    }

    total = total * 0.90

    let diff = Math.abs(total - price)
    if (total >= price) {
        console.log(`Yes! ${diff.toFixed(2)} lv left.`)
    } else if (price > total) {
        console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`)
    }
}
toyShop(["40.8", "20", "25", "30", "50", "10"])
