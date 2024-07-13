
function counter(count){
    console.log(count);
  setTimeout(()=>{
    count++;
      counter(count)
  },1000)
}

counter(0);