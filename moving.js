function moving(input) {
    let index = 0
    let apartmentWidth = Number(input[index])
    index++
    let apartmentLength = Number(input[index])
    index++
    let apartmentHeight = Number(input[index])
    index++
    let currentElement = input[index]

    let cardboardCount = 0
    let isEnough = true
    let apartmentSpace = apartmentHeight * apartmentLength * apartmentWidth
    let apartmentCubics = apartmentSpace

    while (currentElement !== "Done") {
        let cardboardBoxes = Number(currentElement)
        cardboardCount+=cardboardBoxes
        if(cardboardCount>apartmentSpace){
            isEnough=false
            break
        }

        index++
        currentElement = input[index]
    }

    let diff = Math.abs(apartmentSpace - cardboardCount)
    if(isEnough){
        console.log(`${diff} Cubic meters left.`);
    }else{
        console.log(`No more free space! You need ${diff} Cubic meters more.`);
    }
}
moving(["10", 
"1",
"2",
"4", 
"6",
"Done"])

