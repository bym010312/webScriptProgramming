const string = prompt("영문 소문자로 된 문자열을 입력하세요");

//const firstCh = string[0].toUpperCase();
//const remainStr = string.slice(1);
//const result = firstCh + remainStr;

//시험에 나올 수 있음
const result =  [string[0].toUpperCase(), ...string.slice(1)].join('');

document.writeln(result);