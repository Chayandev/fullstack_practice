import readline from "readline";

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

rl.question("Enter anything:",(input)=>{
     console.log(input)
})