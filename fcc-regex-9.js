const jotaro = "Ora Ora Ora";
const dio = "Muda Muda Muda Muda";
const josuke = "Dorarara";
const regexOra = /(\w{3}) \1 \1/i;
const regexDora = /(\w{2})(\w{2})\2\2/i;
const regexMuda = /\w{4}/i;

console.log(regexOra.test(jotaro));
console.log(regexDora.test(josuke));
console.log(regexMuda.test(dio));