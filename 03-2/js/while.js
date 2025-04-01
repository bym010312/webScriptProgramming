let stars = parseInt(prompt("별의 갯수 : "))
let stars2 = stars
//while 문으로 별 찍기
document.write(`while 문으로 별 찍기: <br>`)
while(stars > 0){
    document.write('*')
    stars--;
}
document.write(`<br><br>`)

//do while 문으로 별 찍기
document.write(`do while 문으로 별 찍기: <br>`)
do{
    document.write('*')
    stars2--;
}   while (stars2 > 0) // stars2를 만든 이유: 위에 stars는 0이 되었기 때문