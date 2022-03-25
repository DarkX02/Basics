function newHouse(input) {
    let typeFlower = input[0]
    let numFl = Number(input[1])
    let budget = Number(input[2])
    let totalSum = 0

    switch (typeFlower) {
        case "Roses":
            totalSum = numFl * 5;
            if (numFl > 80) {
                totalSum = totalSum * 0.90
            }
            break;
        case "Dahlias":
            totalSum = numFl * 3.80;
            if (numFl > 90) {
                totalSum = totalSum * 0.85
            }
            break;
        case "Tulips":
            totalSum = numFl * 2.80;
            if (numFl > 80) {
                totalSum = totalSum * 0.85
            }
            break;
        case "Narcissus":
            totalSum = numFl * 3;
            if (numFl < 120) {
                totalSum = totalSum * 1.15
            }
            break;
        case "Gladiolus":
            totalSum = numFl * 2.50;
            if (numFl < 80) {
                totalSum = totalSum * 1.20
            }
            break;
    }

    let diff = (Math.abs(budget - totalSum)).toFixed(2)
    if (budget >= totalSum) {
        console.log(`Hey, you have a great garden with ${numFl} ${typeFlower} and ${diff} leva left.`);
    } else {
        console.log(`Not enough money, you need ${diff} leva more.`);
    }
}
newHouse(["Tulips", "88", "260"])
