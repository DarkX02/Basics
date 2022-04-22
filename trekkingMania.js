function trekkingMania(input) {
    let index = 0
    let numGroups = Number(input[index])
    index++
    let sum = 0

    let Musala = 0
    let Monblan = 0
    let Kilim = 0
    let K2 = 0
    let Everest = 0

    for (let i = 0; i < numGroups; i++) {
        let currentGroup = Number(input[index])
        index++
        sum += currentGroup

        if (currentGroup <= 5) {
            Musala += currentGroup
        } else if (currentGroup <= 12) {
            Monblan += currentGroup
        } else if (currentGroup <= 25) {
            Kilim += currentGroup
        } else if (currentGroup <= 40) {
            K2 += currentGroup
        } else if (currentGroup > 40) {
            Everest += currentGroup
        }
    }

    let p1 = Musala / sum * 100
    let p2 = Monblan / sum * 100
    let p3 = Kilim / sum * 100
    let p4 = K2 / sum * 100
    let p5 = Everest / sum * 100
    console.log(p1.toFixed(2) + "%");
    console.log(p2.toFixed(2) + "%");
    console.log(p3.toFixed(2) + "%");
    console.log(p4.toFixed(2) + "%");
    console.log(p5.toFixed(2) + "%");
}
trekkingMania(["10",
    "10",
    "5",
    "1",
    "100",
    "12",
    "26",
    "17",
    "37",
    "40",
    "78"])
