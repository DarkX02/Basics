function arch(input){
    let name = input[0]
    let count = input[1]
    let hours = count*3
    console.log(`The architect ${name} will need ${hours} hours to complete ${count} project/s.`)
}
arch(["Ivan Ivanov",6])