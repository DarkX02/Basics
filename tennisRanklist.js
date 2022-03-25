function tennisRanklist(input) {
    let index = 0
    let num = Number(input[index])
    index++
    let startingPoints = Number(input[index])
    index++
    let wonTournaments = 0

    let touramentPoints = 0
    for (let i = 0; i < num; i++) {
        let place = input[index]
        index++
        switch (place) {
            case "W":
                wonTournaments++
                touramentPoints+=2000
                break
            case "F":
                touramentPoints+=1200
                break
            case "SF":
                touramentPoints+=720
                break
        }
    }

    let totalPoints = startingPoints+touramentPoints
    let averagePoints = touramentPoints/num
    let percentWon = wonTournaments/num*100
    console.log(`Final points: ${totalPoints}`);
    console.log(`Average points: ${Math.floor(averagePoints)}`);
    console.log(percentWon.toFixed(2)+"%");
}
tennisRanklist(["5",
"1400",
"F",
"SF",
"W",
"W",
"SF"])
