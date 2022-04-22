function fishTank(input) {
    let lenght = Number(input[0])
    let width = Number(input[1])
    let hight = Number(input[2])
    let percent = Number(input[3])
    let tank = lenght * width * hight
    let liters = tank * 0.001
    let other = liters * (percent / 100)
    let water = liters - other
    console.log(water)
}
fishTank(["85", "75", "47", "17"])