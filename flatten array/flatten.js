//Flatten Number/String Array
let result=[]
const helperFn=(arr)=>{

if(typeof arr==="number"|| typeof arr==="String"){
    result.push(arr);
}
else
{
    if(Array.isArray(arr)){
        arr.forEach(element => {
            helperFn(element);
        });
    }
    
}

}
