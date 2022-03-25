function vacationBooksList(input){
    let numPages = Number(input[0])
    let pagesPerHour = Number(input[1])
    let days = Number(input[2])
    let pages = numPages/pagesPerHour
    let finalResult = pages/days
    console.log(finalResult)
    
}
vacationBooksList(["212", "20", "2"])