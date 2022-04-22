function godzillaVsKong(input) {
    let budget = Number(input[0])
    let extra = Number(input[1])
    let pricePerExtra = Number(input[2])
    let decoration = budget * 0.10
    let price = extra * pricePerExtra

    if (extra > 150) {
        price = price * 0.90
    }
    
    let totalPrice = price + decoration

    let diff = (Math.abs(totalPrice - budget)).toFixed(2)
    if (totalPrice > budget) {
        console.log("Not enough money!")
        console.log(`Wingard needs ${diff} leva more.`)
    } else {
        console.log("Action!")
        console.log(`Wingard starts filming with ${diff} leva left.`)
    }

}
godzillaVsKong(["15437.62", "186", "57.99"])
