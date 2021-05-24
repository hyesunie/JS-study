let user = null;
let x = 0;

user?.sayHi(x++);
console.log(x);

//함수가 있는지 확인할 떄

let user1 = {
  admin() {
    alert("관리자 계정입니다.");
  },
};

let user2 = {};

user1.admin?.();
user2.admin?.();
