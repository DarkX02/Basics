function onTimeForTheExam(input) {
    let hourExam = Number(input[0]);
    let minExam = Number(input[1]);
    let hourArrive = Number(input[2]);
    let minArrive = Number(input[3]);

    let timeExamInMin = hourExam * 60 + minExam;
    let timeArriveInMin = hourArrive * 60 + minArrive;
    let diff = Math.abs(timeArriveInMin - timeExamInMin);
    let h = Math.floor(diff / 60);
    let m = diff % 60;

    if (timeArriveInMin > timeExamInMin) {
        console.log("Late");
        if (diff >= 60) {
            if (m < 10) {
                console.log(`${h}:0${m} hours after the start`);
            } else {
                console.log(`${h}:${m} hours after the start`);
            }
        } else {
            console.log(`${m} minutes after the start`);
        }
    } else if (timeArriveInMin <= timeExamInMin && diff <= 30) {
        console.log("On time");
        if (diff !== 0) {
            console.log(`${m} minutes before the start`);
        }
    } else {
        console.log("Early");
        if (diff >= 60) {
            if (m < 10) {
                console.log(`${h}:0${m} hours before the start`);
            } else {
                console.log(`${h}:${m} hours before the start`);
            }
        } else
            console.log(`${m} minutes before the start`);
    }
}
onTimeForTheExam(["11", "30", "10", "55"])