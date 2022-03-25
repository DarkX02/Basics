function sequence(input) {
    let num = Number(input[0])
    let digit = 1

    while (digit <= num) {
        console.log(digit);
        digit = digit * 2 + 1;
    }
}
sequence(["31"])