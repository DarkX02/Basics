function fruitShop(input) {
    let fruit = input[0]
    let day = input[1]
    let quant = Number(input[2])
    let totalSum = 0

    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            switch (fruit) {
                case "banana": totalSum = quant * 2.50; break;
                case "apple": totalSum = quant * 1.20; break;
                case "orange": totalSum = quant * 0.85; break;
                case "grapefruit": totalSum = quant * 1.45; break;
                case "kiwi": totalSum = quant * 2.70; break;
                case "pineapple": totalSum = quant * 5.50; break;
                case "grapes": totalSum = quant * 3.85; break;
                default: console.log("error"); break;
            }
            break;
        case "Saturday":
        case "Sunday":
            switch (fruit) {
                case "banana": totalSum = quant * 2.70; break;
                case "apple": totalSum = quant * 1.25; break;
                case "orange": totalSum = quant * 0.90; break;
                case "grapefruit": totalSum = quant * 1.60; break;
                case "kiwi": totalSum = quant * 3.00; break;
                case "pineapple": totalSum = quant * 5.60; break;
                case "grapes": totalSum = quant * 4.20; break;
                default: console.log("error"); break;
            }
            break;
        default: console.log("error"); break
    }
    if (totalSum !== 0) {
        console.log(totalSum.toFixed(2));
    }
}
fruitShop(["orange", "Sunday", "3"])

