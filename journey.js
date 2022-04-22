function journey(input) {
    let budget = Number(input[0])
    let season = input[1]
    let destination
    let place
    let spendings = 0

    if (budget <= 100) {
        destination = "Bulgaria"
        switch (season) {
            case "summer":
                spendings = budget * 0.30
                break
            case "winter":
                spendings = budget * 0.70
                break
        }
    } else if (budget <= 1000) {
        destination = "Balkans"
        switch (season) {
            case "summer":
                spendings = budget * 0.40
                break
            case "winter":
                spendings = budget * 0.80
                break
        }
    } else {
        destination = "Europe"
        spendings = budget * 0.90
    }

    if (destination ==="Europe"){
        place = "Hotel"
    }else{
        if(season ==="summer"){
            place ="Camp"
        }else{
            place = "Hotel"
        }
    }
    
    console.log(`Somewhere in ${destination}`);
    console.log(`${place} - ${spendings.toFixed(2)}`);
}
journey(["75", "winter"])