function footballSouvenirs(input) {
    let team = input[0]
    let typeSouvenier = input[1]
    let souvenierCount = Number(input[2])

    let totalSum = 0
    let isValid = true
    switch (team) {
        case "Argentina":
            switch (typeSouvenier) {
                case "flags":
                    totalSum = souvenierCount * 3.25
                    break
                case "caps":
                    totalSum = souvenierCount * 7.20
                    break
                case "posters":
                    totalSum = souvenierCount * 5.10
                    break
                case "stickers":
                    totalSum = souvenierCount * 1.25
                    break
                default:
                    isValid = false
                    console.log("Invalid stock!");
                    break
            }
            break
        case "Brazil":
            switch (typeSouvenier) {
                case "flags":
                    totalSum = souvenierCount * 4.20
                    break
                case "caps":
                    totalSum = souvenierCount * 8.50
                    break
                case "posters":
                    totalSum = souvenierCount * 5.35
                    break
                case "stickers":
                    totalSum = souvenierCount * 1.20
                    break
                default:
                    isValid = false
                    console.log("Invalid stock!");
                    break
            }
            break
        case "Croatia":
            switch (typeSouvenier) {
                case "flags":
                    totalSum = souvenierCount * 2.75
                    break
                case "caps":
                    totalSum = souvenierCount * 6.90
                    break
                case "posters":
                    totalSum = souvenierCount * 4.95
                    break
                case "stickers":
                    totalSum = souvenierCount * 1.10
                    break
                default:
                    isValid = false
                    console.log("Invalid stock!");
                    break
            }
            break
        case "Denmark":
            switch (typeSouvenier) {
                case "flags":
                    totalSum = souvenierCount * 3.10
                    break
                case "caps":
                    totalSum = souvenierCount * 6.50
                    break
                case "posters":
                    totalSum = souvenierCount * 4.80
                    break
                case "stickers":
                    totalSum = souvenierCount * 0.90
                    break
                default:
                    isValid = false
                    console.log("Invalid stock!");
                    break
            }
            break
        default:
            isValid = false
            console.log("Invalid country!");
            break
    }

    if (isValid) {
        console.log(`Pepi bought ${souvenierCount} ${typeSouvenier} of ${team} for ${totalSum.toFixed(2)} lv.`);
    }
}
footballSouvenirs(["Agfddfna",
    "shirts",
    "35"])
