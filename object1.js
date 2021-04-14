// const와 함꼐 선언한 객체를 변경
const user = {
  name: "John",
};

user.name = "Pete";
console.log(user.name);
// Property 변경은 막지 않음

//모든 팀원의 월급 합계 구하기
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = 0;

for (let key in salaries) {
  sum += salaries[key];
}

console.log(sum);
//

//obj property value가 숫자인 경우 그 값을 두배 해주는
//multiplyNumeric(obj) 만들기
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

function multiplyNumeriwc(obj) {
  for (let key in obj) {
    if (typeof obj[key] !== "number") continue;
    obj[key] *= 2;
  }
}

multiplyNumeriwc(menu);

console.log(menu);



