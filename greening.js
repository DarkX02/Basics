function calc(input){
    let sqmt = input[0]
    let price = sqmt * 7.61
    let discount = price * 0.18
    let finalPrice = price - discount
    console.log(`The final price is: ${finalPrice} lv.`)
    console.log(`The discount is: ${discount} lv.`)

}
calc([100])