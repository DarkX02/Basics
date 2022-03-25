function hotelRoom(input) {
    let month = input[0]
    let nights = Number(input[1])
    let studio = 0
    let apartment = 0

    switch (month) {
        case "May":
        case "October":
            studio = nights * 50
            apartment = nights * 65
            break
        case "June":
        case "September":
            studio = nights * 75.20
            apartment = nights * 68.70
            break
        case "July":
        case "August":
            studio = nights * 76
            apartment = nights * 77
            break
    }

    if (nights > 14) {
        apartment = apartment * 0.90
        if (month === "May" || month === "October") {
            studio = studio * 0.70
        } else if (month === "June" || month === "September") {
            studio = studio * 0.80
        }
    } else if (nights > 7 && (month === "May" || month === "October")) {
        studio = studio * 0.95
    }
    console.log(`Apartment: ${apartment.toFixed(2)} lv.`);
    console.log(`Studio: ${studio.toFixed(2)} lv.`);
}
hotelRoom(["June", "14"])