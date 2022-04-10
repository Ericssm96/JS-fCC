function translatePigLatin(str) {
    let cRegex = /([^aeiouAEIOU0-9\W]+)(\w*)/g;
    let vRegex = /(^[aeiouAEIOU])(\w*)/g
    let strV = str.replace(vRegex, "$&way")
    let strC = str.replace(cRegex, "$2$1$'ay")
    return vRegex.test(str) ? strV : strC;
}

console.log(translatePigLatin("rhythm"));