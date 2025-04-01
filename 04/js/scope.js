//var를 썼을 때
function greeting(){
    hi = "hello" // var를 썼을땐 실행X, var는 함수 안에서만 유효
}
greeting()
document.write(`greeting 함수 실행: ${hi}<br>`)

let bye = "bye" // 전역변수
function greeting2(){
    document.write(`greeting2 함수 실행: ${bye}<br>`);
}
greeting2();

function change(){
    bye = 'bye bye' //전역변수는 변경가능
}
change();
document.write(`change 함수 실행: ${bye}<br>`);