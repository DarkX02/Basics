function excursionCalculator(input) {
    let people = Number(input[0])
    let season = input[1]

    let pricePerPerson = 0

    switch (season) {
        case "spring":
            if (people <= 5) {
                pricePerPerson = 50
            } else {
                pricePerPerson = 48
            }
            break
        case "summer":
            if (people <= 5) {
                pricePerPerson = 48.50
            } else {
                pricePerPerson = 45
            }
            break
        case "autumn":
            if (people <= 5) {
                pricePerPerson = 60
            } else {
                pricePerPerson = 49.50
            }
            break
        case "winter":
            if (people <= 5) {
                pricePerPerson = 86
            } else {
                pricePerPerson = 85
            }
            break
    }

    let price = pricePerPerson * people
    if(season === "summer"){
        price = price*0.85
    }else if(season === "winter"){
        price = price*1.08
    }
    console.log(`${price.toFixed(2)} leva.`);
}
excursionCalculator(["10",
"summer"])

