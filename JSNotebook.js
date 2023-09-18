function inputCaloriesByDay(day){
    switch(day.toLowerCase()) {
        case 'monday':
            return 3500;
            break;
        case 'tuesday':
            return 1500;
            break;
            case 'wednesday':
           return 1800;
            break;
            case 'thursday':
            return 2300;
            break;
            case 'friday':
           return 2400;
            break;
            case 'saturday':
            return 1500;
            break;
            case 'sunday':
            return 1500;
            break;
        default:
            return 'Please choose a valid day';
      }
}

function getTotalCalories(){
    return inputCaloriesByDay('monday') + inputCaloriesByDay('tuesday') + inputCaloriesByDay('wednesday')
    + inputCaloriesByDay('thursday') + inputCaloriesByDay('friday') + inputCaloriesByDay('saturday') + 
    inputCaloriesByDay('sunday')
}

function getIdealCalories(){
    const idealDailyCalories = 2300;
    return idealDailyCalories * 7;
}

function calculateHealthPlan(){
    const actualCalories = getTotalCalories();
    const idealCalories = getIdealCalories();
    if(actualCalories === idealCalories){
        console.log('Congrats, you hit your goal!');
    } else if (actualCalories > idealCalories){
        console.log('You need to work out today.');
    } else {
        console.log("You're starving!");
    }
}



calculateHealthPlan();