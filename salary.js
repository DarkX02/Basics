function salary(input){
    let index = 0;
    let numTabs = Number(input[index]);
    index++;
    let salary = Number(input[index]);
    index++;
    let isHaveMoney = true

    for(let i =0;i<=numTabs;i++){
        let tab = input[index]
        index++
        if(tab==="Facebook"){
            salary-=150
        }else if(tab==="Instagram"){
            salary-=100
        }else if(tab === "Reddit"){
            salary-=50
        }

        if(salary<=0){
            isHaveMoney = false
            console.log("You have lost your salary.");
            break;
        }
    }

    if(isHaveMoney){
        console.log(salary);
    }
}
salary(["10",
"900",
"Facebook",
"Dev.bg",
"Instagram",
"Facebook",
"Reddit",
"Facebook",
"Facebook"])