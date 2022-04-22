function building(input) {
    let floors = Number(input[0])
    let roomsPerFloor = Number(input[1])
    let table = ""

    for (let i = floors; i > 0; i--) {
        let row = ""
        for (let j = 0; j < roomsPerFloor; j++){

            if (i === floors) {
                row += `L${i}${j} `;
            } else if (i % 2 === 0) {
                row += `O${i}${j} `;
            } else {
                row += `A${i}${j} `;
            }
        }
        console.log(row);
    }
 
}
building(["9", "5"])