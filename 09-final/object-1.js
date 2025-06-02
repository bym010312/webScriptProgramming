const book1 = {
  title : "웹 표준의 정석",
  pages : 648,
  done : true,
  finish : function () {
    this.done = true;
  }
}

const book2 = {
  title : "점프 투 파이썬",
  pages : 360,
  done : false,
  finish : function () {
    this.done = true;
  }
}

(book1.done === false) ? console.log("book 1 읽는 중") : console.log("book1 완독");
(book2.done === false) ? console.log("book 2 읽는 중") : console.log("book2 완독");