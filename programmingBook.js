function programmingBook(input) {
    let pagePrice = Number(input[0])
    let coverPrice = Number(input[1])
    let discountPercent = Number(input[2])
    let designerPay = Number(input[3])
    let teamPayPercent = Number(input[4])

    let totalSum = pagePrice * 899 + coverPrice * 2
    let discount = 1 - (discountPercent / 100)
    totalSum = totalSum * discount
    totalSum += designerPay
    let teamPay = 1 - (teamPayPercent / 100)
    totalSum = totalSum * teamPay

    console.log(`Avtonom should pay ${totalSum.toFixed(2)} BGN.`);
}
programmingBook(["0.05",
    "1.20",
    "40",
    "19.99",
    "20"])

