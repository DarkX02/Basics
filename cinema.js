function cinema(input) {
    let type = input[0];
    let rows = Number(input[1]);
    let columns = Number(input[2]);

    let seats = rows * columns
    let totalSum = 0

    switch (type) {
        case "Premiere": totalSum = seats * 12.00;
            break;
        case "Normal": totalSum = seats * 7.50;
            break;
        case "Discount": totalSum = seats * 5.00;
            break;
    }
    console.log(`${totalSum.toFixed(2)} leva`);
}
cinema(["Premiere",
"10",
"12"])