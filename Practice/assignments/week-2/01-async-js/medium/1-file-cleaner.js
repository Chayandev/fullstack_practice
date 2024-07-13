const fs=require('fs');

function readFile(file,callback){
    fs.readFile(file,'utf-8',(err,data)=>{
        if(err){
            callback(err.message,null)
        }else{
            callback(err,data)
        }
    })
}

function writeFile(file,data,callback){
    fs.writeFile(file,data,(err)=>{
        if(err){
            callback(err.message,null)
        }else{
            callback(null,"Write SucessFull");
        }
    })
}
function performOperation(data){
     const splitedWords=data.split(' ');
     const filterNonEmptyWords=splitedWords.filter((word)=> word.trim()!='');
     return filterNonEmptyWords.join(' ');
}
readFile('file.txt',(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(`Data: ${data}`)
        const result = performOperation(data);
        console.log(`modifiedData: ${result}`)
        writeFile('file.txt',result,(err,res)=>{
            if(err){
                console.log(err);
            }else{
                console.log(res)
            }
        })
    }
})