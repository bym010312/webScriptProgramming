const today = new Date(); // 오늘 날짜
const displayDate = document.querySelector('#today'); // 날짜를 표시할 요소 선택
const displayTime = document.querySelector('#clock'); // 시계를 표시할 요소 선택

const year = today.getFullYear(); // 연도
const month = today.getMonth() + 1; // 월 (0부터 시작하므로 +1)
const date = today.getDate(); // 일
const day1 = today.getDay(); // 요일 (0: 일요일, 1: 월요일, ..., 6: 토요일)

let day2 = " "; // 요일을 문자열로 저장할 변수

// 요일에 따라 문자열 설정
switch (day1) {
    case 0:
        day2 = "일요일";
        break;
    case 1:
        day2 = "월요일";
        break;
    case 2:
        day2 = "화요일";
        break;
    case 3:
        day2 = "수요일";
        break;
    case 4:
        day2 = "목요일";
        break;
    case 5:
        day2 = "금요일";
        break;
    case 6:
        day2 = "토요일";
        break;
}

displayDate.innerHTML = `${year}년 ${month}월 ${date}일 <span style="font-weight:bold">${day2}</span>`; // 날짜를 화면에 출력

let clock = () => {
    let current = new Date();
    let hrs = current.getHours();
    let mins = current.getMinutes();
    let secs = current.getSeconds();

    let period = "AM"; // 오전/오후 구분
    if (hrs === 0) {
        hrs = 12;
    } else if (hrs > 12) {
        hrs = hrs - 12;
        period = "PM";
    }

    hrs = (hrs < 10) ? "0" + hrs : hrs; // 시
    mins = (mins < 10) ? "0" + mins : mins; // 분
    secs = (secs < 10) ? "0" + secs : secs; // 초 

   
    displayTime.innerText = `${period} ${hrs}:${mins}:${secs}`; // 시계에 시간 표시
};

setInterval(clock, 1000); // 1초마다 시계 업데이트