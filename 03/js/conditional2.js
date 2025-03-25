//90이상 받으면 alret로 "A학점" 출력
//80이상 - B
//나머지 - C
let score = parseInt(prompt("점수를 입력하세요"));

if (score !== null){
    if (score >= 90){
        alert("A학점");
    } else if (score >= 80){
        alert("B학점");
    } else{
        alert("C학점");
    }
}
