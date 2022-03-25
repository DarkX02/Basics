function skiTrip(input) {
    let days = Number(input[0])
    let flat = input[1]
    let rating = input[2]

    let nights = days - 1
    let totalSum = 0

    switch (flat) {
        case "room for one person":
            totalSum = nights * 18.00
            break
        case "apartment":
            totalSum = nights * 25.00
            break
        case "president apartment":
            totalSum = nights * 35.00
            break
    }

    if (days < 10) {
        switch (flat) {
            case "apartment":
                totalSum = totalSum * 0.70
                break
            case "president apartment":
                totalSum = totalSum * 0.90
                break
        }
    } else if (days <= 15) {
        switch (flat) {
            case "apartment":
                totalSum = totalSum * 0.65
                break
            case "president apartment":
                totalSum = totalSum * 0.85
                break
        }
    } else if (days > 15) {
        switch (flat) {
            case "apartment":
                totalSum = totalSum * 0.50
                break
            case "president apartment":
                totalSum = totalSum * 0.80
                break
        }
    }

    switch (rating) {
        case "positive":
            totalSum = totalSum *1.25
            break
        case "negative":
            totalSum = totalSum * 0.90
            break
    }

    console.log(totalSum.toFixed(2))
}
skiTrip(["30",
"president apartment",
"negative"])

