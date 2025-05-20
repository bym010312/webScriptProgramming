const firstDay = new Date("2025-01-01");
const today = new Date(); // 오늘 날짜
const result = document.querySelector("#result");

let passedTime = today.getTime() - firstDay.getTime(); // 경과 시간 (밀리초)
let passedDay = Math.round(passedTime / (1000 * 60 * 60 * 24)); // 경과 일수

result.innerText = passedDay; // 결과를 화면에 출력