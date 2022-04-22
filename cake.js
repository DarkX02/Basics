function cake(input) {
    let index = 0
    let cakeWidth = Number(input[index])
    index++
    let cakeLength = Number(input[index])
    index++
    let next = input[index]
    let isEnough = true
    let piecesSum = 0

    let cakeArea = cakeLength * cakeWidth
    let cakePieces = cakeArea 

    while (cakePieces > 0) {
        if (next !== "STOP") {
            let pieces = Number(next)
            cakePieces -= pieces
            piecesSum += pieces
        } else {
            break
        }

        if (cakePieces < 0) {
            isEnough = false
            break
        }
        index++
        next = input[index]
    }

    let diff = Math.abs(cakeArea - piecesSum)
    if (isEnough) {
        console.log(`${diff} pieces are left.`);
    } else {
        console.log(`No more cake left! You need ${diff} pieces more.`);
    }
}
cake(["10",
"2",
"2",
"4",
"6",
"STOP"])

