function oldBooks(input) {
    let index = 0
    let favBook = input[index]
    index++
    let currentBook = input[index]
    let isBookFound = false

    while (currentBook !== "No More Books") {

        if (currentBook === favBook) {
            isBookFound = true
            break
        }

        index++
        currentBook = input[index]
    }

    if (isBookFound === false) {
        console.log("The book you search is not here!");
        console.log(`You checked ${index-1} books.`);
    }else{
        console.log(`You checked ${index-1} books and found it.`);
    }

}
oldBooks(["Troy",
"Stronger",
"Life Style",
"Troy"])




