const string = prompt("문자열을 입력하세요:");
const letter = prompt("어떤 문자를 체크하겠습니까?");

function counting(str, ch){
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === ch)
            count++;
     // if (str.charAt(i) === ch)
    }
    return count;
}

const result = counting(string, letter);
document.writeln(`"${string}"에는 "${letter}" ${result}개 있습니다.`);