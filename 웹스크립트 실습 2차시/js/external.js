function random(number) {
  return Math.floor(Math.random() * number);
}
function bgChange() {
  const rndCol = 'rgb(' + random(256) + ',' + random(256) + ',' + random(256) + ')';
  document.body.style.backgroundColor = rndCol;
}
bgChange();