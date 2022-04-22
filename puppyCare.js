function puppyCare(input) {
    let index = 0
    let foodInKG = Number(input[index])
    index++
    let command = input[index]

    let foodInGrams = foodInKG * 1000
    let sum = 0

    while (command !== "Adopted") {
        let dayFood = Number(command)
        sum+=dayFood

        index++
        command = input[index]
    }

    let diff = Math.abs(foodInGrams - sum)
    if(foodInGrams>=sum){
        console.log(`Food is enough! Leftovers: ${diff} grams.`);
    }else{
        console.log(`Food is not enough. You need ${diff} grams more.`);
    }
}
puppyCare(["3",
"1000",
"1000",
"1000",
"Adopted"])
