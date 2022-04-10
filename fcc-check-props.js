function truthCheck(collection, pre) {
    allChecker = collection.every(obj => obj.hasOwnProperty(pre))
    return allChecker;
}
  
console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));