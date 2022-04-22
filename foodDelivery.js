function foodDelivery(input) {
    let chicken = Number(input[0])
    let fish = Number(input[1])
    let vegy = Number(input[2])
    let order = chicken * 10.35 + fish * 12.40 + vegy * 8.15
    let dessert = order * 0.20
    let result = order + dessert + 2.50
    console.log(result)
}
foodDelivery(["2", "4", "3"])