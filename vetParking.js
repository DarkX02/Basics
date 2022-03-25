function vetParking(input) {

    let days = Number(input[0])
    let hours = Number(input[1])
    let tax = 0
    let total = 0

    for (let d = 1; d <= days; d++) {
        let sumTax = 0
        for (let h = 1; h <= hours; h++) {
            if (d % 2 === 0 && h % 2 !== 0) {
                tax = 2.50
            } else if (d % 2 !== 0 && h % 2 === 0) {
                tax = 1.25
            } else {
                tax = 1
            }
            sumTax += tax
        }
        total+=sumTax
        console.log(`Day: ${d} - ${sumTax.toFixed(2)} leva`);
    }
    console.log(`Total: ${total.toFixed(2)} leva`);

}
vetParking([5,2])