const title = document.querySelector('#title');
const user = document.querySelector('#desc p');
const pfImage = document.querySelector('#profile img');

title.onclick = () => {
  title.innerHTML = "프로필"
  // if (title.classList.contains("clicked")) {
  //   title.classList.add("clicked");
  // } else {
  //   title.classList.remove("clicked");
  // }
  title.classList.toggle("clicked");
}

user.onclick = () => {
  user.innerHTML = `이름: <b>민들래</b>`
  user.classList.toggle("blue-italic");
  user.style.color = "red";
};
pfImage.onclick = () => pfImage.src = "images/pf2.png"