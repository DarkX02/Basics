function walking(input) {
    let stepsNeeded = 10000
    let index = 0
    let steps = 0
    let stepsSum = 0

    while (stepsSum < stepsNeeded) {
        let action = input[index]
        if(action !== "Going home"){
            steps = Number(action)
        }else{
            index++
            steps = Number(input[index])
            stepsSum += steps
            break
        }
        stepsSum += steps

        index++
    }

    let diff = Math.abs(stepsSum - stepsNeeded)
    if(stepsSum > stepsNeeded){
        console.log("Goal reached! Good job!");
        console.log(`${diff} steps over the goal!`);
    }else{
        console.log(`${diff} more steps to reach goal.`);
    }
}
walking(["125",
"250",
"4000",
"30",
"2678",
"4682"])



