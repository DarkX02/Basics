function suppliesForSchool(input){
    let pens = Number(input[0])
    let colorPens = Number(input[1])
    let liquid = Number(input[2])
    let discount = Number(input[3])
    let sum = pens*5.8 + colorPens*7.20 + liquid*1.20
    let finalResult = sum - (sum*(discount/100))
    console.log(finalResult)
}
suppliesForSchool(["2", "3", "4", "25"])