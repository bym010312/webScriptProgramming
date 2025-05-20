window.onload = function() {
    let randomNumber = Math.floor(Math.random() * 5) + 1; // 1~5 랜덤 숫자
    document.body.style.backgroundImage = `url(images/bg-${randomNumber}.jpg)`; // 랜덤으로 배경 이미지 설정
}