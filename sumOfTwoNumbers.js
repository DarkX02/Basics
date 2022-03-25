function sumOfTwoNumbers(input){

    let start = Number(input[0])
    let end = Number(input[1])
    let num = Number(input[2])
    let combinations = 0
    let isFound = false

    for(let i = start;i<=end;i++){
        for(let j = start;j<=end;j++){
            combinations++
            let result = i+j
            if(result === num){
                isFound = true
                console.log(`Combination N:${combinations} (${i} + ${j} = ${result})`);
                return
            }
        }
    }

    if(isFound === false){
        console.log(`${combinations} combinations - neither equals ${num}`);
    }
}
sumOfTwoNumbers(["1",
"10",
"5"])