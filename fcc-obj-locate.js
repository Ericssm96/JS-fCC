function whatIsInAName(collection, source) {
    let arr = [];
    let obj = {};
    // Only change code below this line
    const sKeys = Object.keys(source);
    arr = collection.filter(obj=>{
        return sKeys.every(key=>{
            return obj.hasOwnProperty(key) && obj[key] == source[key];
        })
    })
    // Only change code above this line
    return arr;
}

console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }));