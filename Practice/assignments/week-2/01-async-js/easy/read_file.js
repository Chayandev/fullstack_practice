const fs=require('fs')

// Read the contents of the file asynchronously
function fileReading(){
    console.log("Read....")
fs.readFile('sample.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err.message);
    } else {
        console.log('File contents:');
        console.log(data);
    }
    // Simulate an expensive operation (delay) after reading the file
    setTimeout(() => {
        console.log('\nExpensive operation completed.');
    }, 2000); // Adjust the delay time (in milliseconds) as needed
});
}
console.log("start");
fileReading()
for(let i=0;i<1000;i++){
    console.log(`log${i}`);
}