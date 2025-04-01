function sum (a,b){
    return a+b;
}
document.write(`1과 2를 더한 값: ${sum(1,2)}`)

//익명 함수로 바꿨을 때 sum2
let sum2 = function(a,b){
    return a+b
}
document.write(`<br>익명함수로 1과 2를 더한 값: ${sum(1,2)}`)

//화살표 함수로 바꿨을 때
let sum3 = (a,b) => {
    return a+b
}
document.write(`<br>화살표 함수로 1과 2를 더한 값: ${sum(1,2)}`)

//즉시 실행 함수로 바꿨을 때
document.write(`<br>즉시 실행 함수로 1과 2를 더한 값: 
    ${(function(a,b){
        return a+b;
    })(1,2)}`)