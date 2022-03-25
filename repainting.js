    function repainting(input){
        let nylon = Number(input[0])
        let paint = Number(input[1])
        let liquid = Number(input[2])
        let hours = Number(input[3])
        let sum = (paint+(paint*0.10))*14.50 + ((nylon + 2)*1.50) + liquid*5 +0.40
        let pay = (sum*0.30)*hours
        let total = sum + pay
        console.log(total)
       }
       repainting(["10", "11", "4", "8"])