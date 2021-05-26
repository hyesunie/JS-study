// 함수 두 개로 동일한 객체 만들기
function A() {
  this.msg = "hello";
}
function B() {
  return a;
}

let a = new A();
let b = new B();

console.log(a == b);

a.msg = "yo";

console.log(a.msg, b.msg);

// 계산기 만들기
function Calculator() {
  this.read = function () {
    this.a = parseInt(prompt("첫 번째 수를 입력해주세요."));
    this.b = parseInt(prompt("두 번째 수를 입력해주세요."));
  };

  this.sum = function () {
    return this.a + this.b;
  };

  this.mul = function () {
    return this.a * this.b;
  };
}

let cal = new Calculator();
cal.read();
console.log(cal.sum(), cal.mul());

//누산기 만들기
function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function () {
    this.value += +prompt("add number");
  };
}

let acc = new Accumulator(1);
acc.read();

alert(acc.value);
