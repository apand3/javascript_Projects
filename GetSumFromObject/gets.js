const getSum=(obj)=>{
    let sum=0;

    for (const key in obj) 
    {
        
             
       const value = obj[key];
       if(Array.isArray(value)){
           sum+=getSum(value);
       }
       else if(!Array.isArray(value) && typeof value=="object"){
           sum+=getSum(value);
       }
       else if(typeof value=="number"){
           sum+=value;
       }
    
}
 return sum;
}
let ob={
    key1:{
        key5:8,
        key6:{
            key7:[3,{key9:2}]
        }
    },
    key2:4,
    key3:[1,2,true,'abc']
}
