## Reading the contents of a file

Write code to read contents of a file and print it to the console. 
You can use the fs library to as a black box, the goal is to understand async tasks. 
Try to do an expensive operation below the file read and see how it affects the output. 
Make the expensive operation more and more expensive and see how it affects the output. 




const fs=require('fs)

// Read the contents of the file asynchronously
fs.readFile('sample.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err.message);
    } else {
        console.log('File contents:');
        console.log(data);

        // Simulate an expensive operation (delay) after reading the file
        setTimeout(() => {
            console.log('\nExpensive operation completed.');
        }, 2000); // Adjust the delay time (in milliseconds) as needed
    }
});

