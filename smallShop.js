function smallShop(input) {
    let product = input[0]
    let town = input[1]
    let quant = Number(input[2])
    let totalSum = 0

    if (town === "Sofia") {
        switch (product) {
            case "coffee": totalSum = quant * 0.50; break;
            case "water": totalSum = quant * 0.80; break;
            case "beer": totalSum = quant * 1.20; break;
            case "sweets": totalSum = quant * 1.45; break;
            case "peanuts": totalSum = quant * 1.60; break;
        }
    } else if (town === "Plovdiv") {
        switch (product) {
            case "coffee": totalSum = quant * 0.40; break;
            case "water": totalSum = quant * 0.70; break;
            case "beer": totalSum = quant * 1.15; break;
            case "sweets": totalSum = quant * 1.30; break;
            case "peanuts": totalSum = quant * 1.50; break;
        }
    } else if (town === "Varna") {
        switch (product) {
            case "coffee": totalSum = quant * 0.45; break;
            case "water": totalSum = quant * 0.70; break;
            case "beer": totalSum = quant * 1.10; break;
            case "sweets": totalSum = quant * 1.35; break;
            case "peanuts": totalSum = quant * 1.55; break;
        }
    }

    console.log(totalSum);
}
smallShop(["coffee", "Varna", "2"])
