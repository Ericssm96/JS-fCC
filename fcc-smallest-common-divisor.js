function smallestCommons(arr) {
    let divisorGreater = [];
    let divisorLesser = [];
    arr = arr.sort((a,b)=>a-b);
    for(let i=1; i<=arr[1]; i++){
        if(arr[1]%i===0){
            divisorGreater.push(i);
        }
    }

    for(let i=0; i<=arr[0];i++){
        if(arr[0]%i===0){
            divisorLesser.push(i);
        }
    }

    for(let i=0; i<divisorLesser.length; i++){
        if(divisorGreater.includes(divisorLesser[i])){
            return divisorLesser[i];
        }
    }
}

console.log(smallestCommons([8,3]));