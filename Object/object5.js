//optional chainning
let user = {}; // 주소 정보가 없는 사용자

console.log(user?.address?.street);

//함수가 있는지 확인할 떄

let user1 = {
  admin() {
    alert("관리자 계정입니다.");
  },
};

let user2 = {};

user1.admin?.();
user2.admin?.();

//symbol
let id = Symbol("id");
let user = {
  name: "John",
  age: 30,
  [id]: 123,
};

for (let key in user) alert(key); // name과 age만 출력되고, 심볼은 출력되지 않습니다.

// 심볼로 직접 접근하면 잘 작동합니다.
alert("직접 접근한 값: " + user[id]);
