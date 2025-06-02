const email = document.querySelector('#userEmail');
const button = document.querySelector('button');
const result = document.querySelector('#result');

button.addEventListener('click', () => {
    let username, domain, half;

    // if (email.value !== "")
    //     username = email.value.split('@')[0];                   // @기준으로 쪼개어 앞부분 저장
    //     username = username.substring(0, 3);                    // username 중 3자리만 필요
    //     domain = email.value.split('@')[1];                     // @기준으로 쪼개어 뒷부분 저장
    //     result.innerText = `${username}...@${domain}`;

    if(email.value !== "") {
        username = email.value.split('@')[0];                        // @ 기준으로 쪼개어 앞부분 저장
        half = username.length / 2;                                  // username 길이의 절반
        username = username.substring(0, (username.length - half));  // username 중 절반만 필요
        domain = email.value.split('@')[1];                          // @ 기준으로 쪼개어 뒷부분 저장
        result.innerText = `${username}...@${domain}`;               // 결과 출력
        email.value = "";                                            // 입력창 지우기
    }
})