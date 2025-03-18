// 섭씨 온도 = (화씨온도 - 32) / 1.8
// 섭씨 : celsius, 화씨 : fahrenheit

let fah = parseFloat(prompt("변환할 ℉ 온도"));
let cel;
// 소수점 첫째 자리 까지표시
cel = ((fah - 32) / 1.8).toFixed(1);
alert(`${cel}℃는 ${fah}℉ 입니다.`)