let mapT=new Map();
function stringify(obj) {
   
    let objString = '';
    
    const lastKey = Object.keys(obj).pop();
    // We add the first curly brace
    objString += '{';
   
    for (const key in obj) {
        if(mapT.get(key)!=null && mapT.get(key)!=undefined){
            return mapT.get(key);
          }
             
        const value = obj[key];
        
        objString += `"${key}":`;
        if(Array.isArray(value)){
 objString += `"[${value}]"`;
        }
        else if (typeof obj[key] === 'object' && !Array.isArray(value)) {
            debugger
        objString += `${stringify(value)}`;

          

        } else if (typeof value === 'string') {
            objString += `"${value}"`;
        } else if (typeof obj[key] === 'number') {
            objString += `${value}`;
        }
        
        // We add the comma
        if (key !== lastKey) {
            objString += ',';
        }
        mapT.set(key,objString);
    }
    // We add the last curly brace
  
    objString += '}';
   
    return objString;
}
