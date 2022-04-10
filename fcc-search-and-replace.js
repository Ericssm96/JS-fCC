//buscar uma palavra em uma string e substituir ela por outra palavra
function myReplace(str, before, after) {
    let wordIndex = str.indexOf(before.slice(1));
    let firstLetter = str[wordIndex-1];
    if (wordIndex!=-1 && firstLetter == before[0].toUpperCase()){
        return str.replace(firstLetter+before.slice(1), after[0].toUpperCase()+after.slice(1))
    } else {
        return str.replace(firstLetter+before.slice(1), after[0].toLowerCase()+after.slice(1))
    }

}

console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms"));