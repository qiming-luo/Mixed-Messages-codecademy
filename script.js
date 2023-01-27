// the goal is to randomly pick 2 different workouts(each workout time randomly assigned, can be same or different) in a day. 
// format: 'Monday', 'jogging 30minutes ; tai chi 30 minutes'


function workoutplaner(){
    const combos = {
        day: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        time:['30 minutes', '45 minutes', '60 minutes'],
        workouts:['pushup and squat', 'jogging', 'sprinting', 'jumping jack', 'burpee', 'kungfu', 'katate', 'taekwondo', 'Tai Chi', 'yoga']
    }

    //pick a day
    const dayArr = combos.day;
    let indexDay = Math.floor(Math.random()*dayArr.length); // generate a random dayArr index
    let pickDay = dayArr[indexDay]; // get a random day 

    // pick a time 
    const timeArr = combos.time;
    let indexTime1 = Math.floor(Math.random()*timeArr.length); // generate a random timeArr index
    let indexTime2 = Math.floor(Math.random()*timeArr.length);
    let pickTime1 = timeArr[indexTime1]; // get a random time for workout 1
    let pickTime2 = timeArr[indexTime2];  // get a random time for workout 2

    //pick 2 different workouts
    const workoutArr = combos.workouts;
    let indexWorkout1 = Math.floor(Math.random()*workoutArr.length); //  generate a random workoutArr index
    let indexWorkout2 = Math.floor(Math.random()*workoutArr.length); // generate another random workoutArr index
    let pickWorkout1 = workoutArr[indexWorkout1]; // get a random workout
    // get another different random workout
    while(indexWorkout2 === indexWorkout1){
        indexWorkout2 = Math.floor(Math.random()*workoutArr.length); // keep produce random workoutArr index untile it !== indexWorkout1
    } 
    let pickWorkout2 = workoutArr[indexWorkout2];

    //return result
    let result = `which day: ${pickDay} \nexercise 1: ${pickWorkout1}, ${pickTime1} \nexercise 2: ${pickWorkout2}, ${pickTime2}`;
    return result;
}

let workoutForADay = workoutplaner();

console.log(workoutForADay);