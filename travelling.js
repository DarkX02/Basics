function travelling(input) {
    let index = 0
    let destination = input[index]

    while (destination !== "End") {
        index++
        let budget = Number(input[index])
        let sum = 0
        while (sum < budget) {
            index++
            let savings = Number(input[index])
            sum += savings
            if (sum >= budget) {
                console.log(`Going to ${destination}!`);
                index++
                destination = input[index]
            }
        }

    }
}
travelling(["France",
"2000",
"300",
"300",
"200",
"400",
"190",
"258",
"360",
"Portugal",
"1450",
"400",
"400",
"200",
"300",
"300",
"Egypt",
"1900",
"1000",
"280",
"300",
"500",
"End"])

