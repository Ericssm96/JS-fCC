function largestOfFour(arr) {
    let newArr = [];
    arr.forEach((subArr)=>{
        let gtNum = 0;
        subArr.forEach((num)=>{
            if(num > gtNum){
                gtNum = num;
            }
        });
        newArr.push(gtNum);
    });
    return newArr;
}
console.log(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));