function exam(input) {
    let index = 0
    let students = Number(input[index])
    index++
    let counter1 = 0
    let counter2 = 0
    let counter3 = 0
    let counter4 = 0
    let gradeSum = 0

    for(let i = 0;i<students;i++){
        let grade = Number(input[index])
        index++
        if(grade>=5){
            counter1++
        }else if(grade>=4){
            counter2++
        }else if(grade>=3){
            counter3++
        }else if(grade<3){
            counter4++
        }
        gradeSum+=grade
    }

    let group1 = counter1/students*100
    let group2 = counter2/students*100
    let group3 = counter3/students*100
    let group4 = counter4/students*100
    let avgGrade = gradeSum/students

    console.log(`Top students: ${group1.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${group2.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${group3.toFixed(2)}%`);
    console.log(`Fail: ${group4.toFixed(2)}%`);
    console.log(`Average: ${avgGrade.toFixed(2)}`);

}
exam(["6",
"2",
"3",
"4",
"5",
"6",
"2.2"])

