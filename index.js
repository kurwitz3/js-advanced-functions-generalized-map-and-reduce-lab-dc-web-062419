function map(sourceArray,func){
 return sourceArray.map(number => func(number))
}

function reduce (array, func, start) {
    let value;
 
    if(start) {
        value = start;
        for (let i = 0; i < array.length; i++) {
         return func(array[i], value);
        }
       
    }
 
    else {
        value = array[0];
        for (let i = 1; i < array.length; i++) {
            value = func(array[i], value);
        }
    }
    return value;
 }
