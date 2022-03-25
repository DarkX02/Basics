function multiplyTable(input) {
    let num = Number(input[0])

    let numtoString = num + ""
    let n1 = Number(numtoString[0])
    let n2 = Number(numtoString[1])
    let n3 = Number(numtoString[2])

    for(let i = 1;i<=n3;i++){
        for(let j = 1;j<=n2;j++){
            for(let k = 1;k<=n1;k++){
                let result = i*j*k
                console.log(`${i} * ${j} * ${k} = ${result};`);
            }
        }
    }

}
multiplyTable([222])