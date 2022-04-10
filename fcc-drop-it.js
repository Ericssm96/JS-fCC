function dropElements(arr, func) {
    const arr2=[];
    arr.forEach(item=>{
        if(func(item)){
            arr2.push(item);
        };
    })

    return arr2;
    //return arr.any(func(item));
  }
  
  console.log(dropElements([1, 2, 3], function(n) {return n < 3; }));