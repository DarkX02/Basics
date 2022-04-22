function basketballEquipment(input) {
    let fee = Number(input[0])
    let shoes = fee - fee * 0.40
    let suit = shoes - shoes * 0.20
    let ball = suit / 4
    let acc = ball / 5
    let sum = fee + shoes + suit + ball + acc
    console.log(sum)
}
basketballEquipment(["365"])