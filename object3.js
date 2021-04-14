//this 사용해보기
function makeUser() {
  return {
    name: "John",
    ref: function () {
      return this;
    },
  };
}

let user = makeUser();

console.log(user.ref().name);
//
// 계산기 만들기
let calculator = {
  //   read() {
  //     this.a = +prompt("a 값을 입력하세요!");
  //     this.b = +prompt("b 값을 입력하세요!");
  //   },
  sum() {
    return this.a + this.b;
  },
};

// calculator.read();
console.log(calculator.sum());
//
// 체이닝
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    console.log(this.step);
    return this;
  },
};

ladder.up().up().down().up().down().showStep();
