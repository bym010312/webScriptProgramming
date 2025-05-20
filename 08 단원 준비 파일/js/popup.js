// popup.js
// 버튼 클릭 시 notice.html을 중앙에 팝업으로 여는 기능을 구현한 스크립트

const bttn = document.querySelector("button"); // 첫 번째 button 요소를 선택

const popWidth = 600;  // 팝업 창의 너비
const popHeight = 500; // 팝업 창의 높이

bttn.addEventListener('click', function() {
    // 팝업 창이 화면 중앙에 오도록 좌표 계산
    let left = (screen.availWidth - popWidth) / 2;
    let top = (screen.availHeight - popHeight) / 2;

    // 새로운 창을 열고 위치 및 크기를 설정
    window.open("notice.html", "event", `width = ${popWidth}
    height = ${popHeight} left = ${left} top = ${top}`);
});