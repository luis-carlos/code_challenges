function Meeting(start_time, end_time){
    this.start_time = new Date(start_time);
    this.end_time = new Date(end_time);
}

let meetingsArray = [];

meetingsArray.push(new Meeting("2021-12-10 9:00:00", "2021-12-10 12:00:00"));
meetingsArray.push(new Meeting("2021-12-10 12:00:00", "2021-12-10 11:00:00"));

console.log(meetingsArray[1].start_time < meetingsArray[0].end_time);


