// 1.print months using switch case.

month=12;
switch(month){
    case 1:
        console.log("January");
        break
    case 2:
        console.log("February");
        break
    case 3:
        console.log("March");
        break
    case 4:
        console.log("April");
        break 
    case 5:
        console.log("May");
        break
    case 6:
        console.log("June");
        break
    case 7:
        console.log("July");
        break
    case 8:
        console.log("August");
        break
    case 9:
        console.log("September");
        break
    case 10:
        console.log("October");
        break
    case 11:
        console.log("November");
        break
    case 12:
        console.log("December");
        break
    default:
        console.log("Invalid Month")
}

// Output: December

// 2.Print the grades using switch case.    

let score=91;
switch(true){
    case (score>=90):
        console.log("Excellent A Grade");
        break
    case (score>=80):
        console.log("Very Good B Grade");
        break
    case (score>=70):
        console.log("Good C Grade");
        break
    case (score>=60):
        console.log("Needs Improvement D Grade");
        break
    default:
        console.log("Fail");
}

// Output: Excellent A Grade