function password(input){
    let index = 0
    let username = input[index]
    index++
    let password = input[index]
    index++
    let current = input[index]

    while(current !== password){
        index++
        current = input[index]
    }
    console.log(`Welcome ${username}!`);
}
password(["Nakov",
"1234",
"Pass",
"1324",
"1234"])
