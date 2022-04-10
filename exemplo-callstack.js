function A() {
    return "Olá, " + B();
}
function B() {
    return "meu " + C();
}
function C(){
    return "amigo.";
}

console.log(A())
