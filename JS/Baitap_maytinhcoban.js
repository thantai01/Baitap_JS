function set(op) {
    document.getElementById('show').value += op;
}
function answer() {
    let Exp = document.getElementById("show");
    let Exp1 = Exp.value;
    let result = eval(Exp1);
    Exp.value = result ;
}
function C() {
    let elem = document.getElementById('show').value;
    let length = elem.length;
    length--;
    let x = elem.substr(0, length);
    document.getElementById('show').value = x;



}
