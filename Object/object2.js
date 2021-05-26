//참조에 의한 복사 예제
let user = { name: "Jogn" };
let admin = user;

admin.name = "Pete";

console.log(user.name);

//

// 객체 복제 반복문 이용
let user2 = { name: "sun", age: 10 };
let clone = {};

for (let key in user2) {
  clone[key] = user2[key];
}

clone.name = "sarah";

console.log(user2, clone);
//

// Object.assign을 사용한 복제
let person = { name: "july" };

let exercise = { runnig: true };
let read = { book: true };

Object.assign(person, exercise, read);

const info = Object.assign({}, person, read, exercise);

console.log(person);
console.log(info);
//

//Object.assign은 깊은복사가 되지 않음
let room = {
  bookshelf: {
    novel: 3,
    study: 2,
  },
};

let room2 = Object.assign({}, room);

console.log(room2.bookshelf === room.bookshelf); // 같은 객체

room.bookshelf.novel = 1;

console.log(room2);
