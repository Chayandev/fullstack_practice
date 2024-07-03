//create a counter in javascript counts down(30,0)


/*
function counter(count){
    console.log(count);
    count--;
    if(count>=0)
        setTimeout(()=>counter(count),1000)

}
counter(30);

*/

//calculate the time it takes between a settimeout call and the inner fucntion actually running
function displayClock() {
    setInterval(clock, 1000); // Update every second
}
function clock() {
    // Get current time
    let now = new Date();
    
    // Format hours, minutes, and seconds to ensure two digits
    let hours = ('0' + now.getHours())
    let minutes = ('0' + now.getMinutes())
    let seconds = ('0' + now.getSeconds())

    // Print the time in HH:MM:SS format
    console.log('\r' + hours + ':' + minutes + ':' + seconds);
}

// Call the function to start displaying the clock
displayClock();
