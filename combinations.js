function combinations(input) {
    let num = Number(input[0])
    let count = 0

    for (let x = 0; x <= num; x++) {
        for (let y = 0; y <= num; y++) {
            for (let z = 0; z <= num; z++) {
                let sum = x + y + z
                if (sum === num) {
                    count++
                }
            }
        }
    }
    console.log(count);
}
combinations(["25"])