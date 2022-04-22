function tradeCommissions(input) {
    let town = input[0]
    let s = Number(input[1])
    let totalSum = 0

    if (s >= 0 && s <= 500) {
        switch (town) {
            case "Sofia": totalSum = s * 0.05; break;
            case "Varna": totalSum = s * 0.045; break;
            case "Plovdiv": totalSum = s * 0.055; break;
            default: console.log("error"); break;
        }
    } else if (s > 500 && s <= 1000) {
        switch (town) {
            case "Sofia": totalSum = s * 0.07; break;
            case "Varna": totalSum = s * 0.075; break;
            case "Plovdiv": totalSum = s * 0.08; break;
            default: console.log("error"); break;
        }
    } else if (s > 1000 && s <= 10000) {
        switch (town) {
            case "Sofia": totalSum = s * 0.08; break;
            case "Varna": totalSum = s * 0.10; break;
            case "Plovdiv": totalSum = s * 0.12; break;
            default: console.log("error"); break;
        }
    } else if (s > 10000) {
        switch (town) {
            case "Sofia": totalSum = s * 0.12; break;
            case "Varna": totalSum = s * 0.13; break;
            case "Plovdiv": totalSum = s * 0.145; break;
            default: console.log("error"); break;
        }
    } else {
        console.log("error");
    }
    if (totalSum !== 0) {
        console.log(totalSum.toFixed(2));
    }
}
tradeCommissions(["Varna", "500"])