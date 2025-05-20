// 원의 넓이를 계산하는 함수
function area(r) {
    return Math.PI * r * r;
}
// 원의 둘레를 계산하는 함수
function circum(r) {
    return 2 * Math.PI * r;
}

// 사용자로부터 반지름 값을 입력받고 결과 영역 요소를 선택
const result =  document.querySelector("#result");
const radius = prompt("반지름의 크기는?");

// 계산된 결과를 화면에 출력 (소수점 반올림)
result.innerText = `반지름 : ${radius} \n원의 넓이 : ${Math.round(area(radius))} \n원의 둘레 : ${Math.round(circum(radius))}`;