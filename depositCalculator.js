function depositCalculator(input){
    let deposit = Number(input[0])
    let date = Number(input[1])
    let interest = Number(input[2])
    let sum = deposit + date *((deposit*(interest/100))/12)
    console.log(sum)
}
depositCalculator(["200", "3","5.7"])