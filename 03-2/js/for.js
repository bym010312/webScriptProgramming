const students = ["park", "Kim", "Lee", "Kang"];

document.write(`기본 for문: <br>`);
for (let i = 0; i < students.length; i++) {
    document.write(`${students[i]}. `);
}

document.write(`<br><br>`);

//forEach문
document.write(`forEach문: <br>`);
students.forEach(function(student){
    document.write(`${student}. `)   
});

document.write(`<br><br>`);

//forEach 화살표함수
document.write(`forEach 화살표 함수 사용: <br>`);
students.forEach(student => document.write(`${student}. `));

document.write(`<br><br>`);

//forof문
document.write(`forof문: <br>`);
for(let student of students){
    document.write(`${student}. `);
}

document.write(`<br><br>`);

//forin문
document.write(`forin문: <br>`);
for (let student in students){
    document.write(`${student}. `)// 객체 인덱스
}

document.write(`<br><br>`);
document.write(`forin문: <br>`);
for (let student in students){
    document.write(`${students[student]}. `) 
}