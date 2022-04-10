function mutation(arr) {
    let arr1 = arr[0].split("");
    let arr2 = arr[1].split("");
    let checker;
    for(let i=0; i<arr2.length; i++){
        if (arr1.includes(arr2[i].toLowerCase())||arr1.includes(arr2[i].toUpperCase())){
            checker = true;
        } else {
            return false;
        }
    }
    return checker;
}
  
console.log(mutation(["Mary", "Aarmy"]));
