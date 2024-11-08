//  1. Print License using conditional statement. 

let isname="Sairaj"
let age=19;
if(age>=16){
    console.log(`${isname}, you are eligible for a driver's license.`)
}
else if(age<16 && age>=0){
    let yearsUntilEligible=16-age;
    console.log(`${isname}, you are not eligible for a driver's license. you will be eligible in ${yearsUntilEligible} years`);
}
else{
    console.log("Invalid age")
}

// Output: Sairaj, you are eligible for a driver's license.


// 2.Traffic Light System
// Simulate a traffic light system:
// If the light is red, log "Stop."
// If the light is yellow, log "Get ready to move."
// If the light is green, log "Go."
// If the input doesn't match any color, log "Invalid input."

let light_color="yellow";
if(light_color==="red"){
    console.log("Stop.");
}
else if(light_color==="yellow"){
    console.log("Get ready to move.");
}
else if(light_color==="green"){
    console.log("Go.");
}
else{
    console.log("Invalid input.")
}

// Output: Get ready to move.

// 3.voter Id
// If the person age is 18 or greater than 18, print "he/she can vote."
// If the person age is 17, print "Wait for one year."
// If the person age is less than 17, print "he/she can not vote."
// If the input doesn't match age, prnt "Invalid input."

let f_name="kanna";
let Age=23;
if(Age>=18){
    console.log(`${f_name}, you can vote.`);
}
else if(Age==17){
    console.log(`${f_name}, Wait for one year.`);
}
else if(Age<17){
    console.log(`${f_name}, you can not vote.`);
}
else{
    console.log("Invalid input.");
}

// Output: kanna, you can vote.

// 4.Speed driving
// If the speed is greater than 75, print "Over Speed."
// If the speed is in between 25 and 60, print "Normal Speed."
// If the speed is less than 25, print "Under Speed."
// If the input doesn't match, print "Invalid input."

let speed=58;
if(speed>75){
    console.log("Over Speed.");
}
else if(speed>=25 && speed<=60){
    console.log("Normal Speed.");
}
else if(speed<25){
    console.log("Under Speed.");
}
else{
    console.log("Invalid input.");
}

// Output: Normal Speed.