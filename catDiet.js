function catDiet(input) {
    let fatPercent = Number(input[0])
    let protinPercent = Number(input[1])
    let carbohydratesPercent = Number(input[2])
    let calories = Number(input[3])
    let waterPercent = Number(input[4])

    let fat = (calories * (fatPercent / 100)) / 9
    let protein = (calories * (protinPercent / 100)) / 4
    let carbohydrates = (calories * (carbohydratesPercent / 100)) / 4
    let foodWeight = fat + protein + carbohydrates
    let caloriesPerGram = calories/foodWeight
    let water = (100 - waterPercent)/100
    let caloriesWithoutWater = caloriesPerGram*water
    console.log(caloriesWithoutWater.toFixed(4));

}
catDiet(["60",
"25",
"15",
"2500",
"60"])