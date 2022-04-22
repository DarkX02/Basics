function coins(input) {
    let money = Number(input[0])
    let coinCount = 0
    let coins = Math.floor(money * 100)

    while (coins !== 0 ){
        if(coins>=200){
            coins -= 200
            coinCount++
        }else if(coins>=100 ){
            coins-=100
            coinCount++
        }else if(coins>=50){
            coins-=50
            coinCount++
        }else if(coins>=20){
            coins-=20
            coinCount++
        }else if(coins>=10){
            coins-=10
            coinCount++
        }else if(coins>=5){
            coins-=5
            coinCount++
        }else if(coins>=2){
            coins-=2
            coinCount++
        }else if(coins>=1){
            coins-=1
            coinCount++
        }
    }
    console.log(coinCount);
}
coins(["0.56"])