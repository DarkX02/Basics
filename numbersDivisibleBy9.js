function numbersDivisibleBy9(input) {
    let n1 = Number(input[0])
    let n2 = Number(input[1])
    let result = 0
    let nums= ""

    for (let i = n1; i <= n2; i++) {
        if(i%9===0){
            result+=i;
            nums+=`${i}\n`
        }
    }

    console.log(`The sum: ${result}`);
    console.log(nums);
}
    numbersDivisibleBy9(["100","200"])