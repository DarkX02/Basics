function hairSaloon(input) {
    let index = 0
    let goal = Number(input[index])
    index++
    let command = input[index]

    let sum = 0
    let isEnough = false

    while (command !== "closed") {
        index++
        let type = input[index]
        if (command === "haircut") {
            switch (type) {
                case "mens":
                    sum += 15
                    break
                case "ladies":
                    sum += 20
                    break
                case "kids":
                    sum += 10
                    break
            }
        } else {
            switch (type) {
                case "touch up":
                    sum += 20
                    break
                case "full color":
                    sum += 30
                    break
            }
        }

        if(sum>=goal){
            isEnough = true
            break
        }

        index++
        command = input[index]
    }

    let diff = Math.abs(goal-sum)
    if(isEnough===false){
        console.log(`Target not reached! You need ${diff}lv. more.`);
        console.log(`Earned money: ${sum}lv.`);
    }else{
        console.log("You have reached your target for the day!");
        console.log(`Earned money: ${sum}lv.`);
    }
}
hairSaloon(["50",
"color",
"full color",
"haircut",
"ladies"])

