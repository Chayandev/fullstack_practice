const fs=require("fs");

/*
fs.writeFileSync(): writes data to a file. If the file dose not exist, it will be created. IF the file exists, it overwrites the content.
//! Syntax: fs.writeFileSync(filepath,data,operations);
//? filepath: The File path to write to.
//? data: The content to write to the file
//? options: Optional. Include encoding ('utf8'), mode, or falgs.
*/

const writeFile=fs.writeFileSync("data.txt","Hello Node.js fs","utf-8");

console.log(writeFile);


/*
fs.readFileSync(): Reads a file's content and returns it as a string or buffer.
//! syntax: const data = fs.readFileSync(filePath,options);
//? filepath: Path of the file to read
//? options: Optional. Encoding ('utf8) to get data a string
*/

const readFile=fs.readFileSync("data.txt","utf-8");

console.log(readFile);

//without utf
//console.log(readFile.toString());

fs.appendFileSync("data2.txt","Hello Node.js fs appended","utf-8");


fs.unlinkSync("data.txt"); //to delete the file

fs.renameSync("data2.txt","data.txt");