function areaOfFigures(input) {
    let figure = input[0]
    if (figure === "square") {
        let a = Number(input[1])
        console.log((Math.pow(a, 2)).toFixed(3))
    } else if (figure === "rectangle") {
        let a = Number(input[1])
        let b = Number(input[2])
        console.log((a * b).toFixed(3))
    } else if (figure === "circle") {
        let r = Number(input[1])
        console.log((Math.PI * Math.pow(r, 2)).toFixed(3))
    } else if (figure === "triangle") {
        let a = Number(input[1])
        let ha = Number(input[2])
        console.log(((a * ha) / 2).toFixed(3))
    }
}
areaOfFigures(["square", "5"])
areaOfFigures(["rectangle", "7", "2.5"])
areaOfFigures(["circle", "6"])
areaOfFigures(["triangle", "4.5", "20"])