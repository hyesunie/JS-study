# 객체
---
- property : (key:value)의 쌍
- key는 문자형, value는 모든 자료형이 허용 됨
  

## object1.js



### 객체 생성 방법
- object constructor syntax `let user = new Object()`
- object literal syntax `const user = { key: value }`


### property 값 읽기
- dot notation `user.key`
    -> property key가 여러단어의 조합이라면 dot noitation을 사용할 수 없음
- square bracket notation `user[key]`


### computed property
- 오브젝트 리터럴 안의 프로퍼티 키가 대괄호로 둘러싸여 있는경우
```
let fruit = "apple";

let bag = {
    [fruit]: 5
}
```
- property key값을 동적으로 할당 해줌


### in operator
- 프로퍼티의 존재 여부를 확인할 수 있음 (true, false)   `"key" in user`
- `undefined`와 비교하여 존재 여부를 확인 할 수 있지만 프로퍼티 값에 `undefined`이 할당 될 경우에는 제대로 확인이 불가능함




## object2.js



### 참조에 의한 객체 복사
- 객체는 원시타입과 다르게 변수에 객체가 그대로 저장되는 것이 아니라, 객체에 대한 참조값이 저장됨
- 객체가 할당된 변수를 복사할 땐 객체의 참조 값이 복사 됨, 객체는 복사되지 않음


### 객체 복제, 병합
- 자바스크립트에서 지원하는 내장 메소드는 없음
- 새로운 객체를 만든 다음 반복문을 이용해서 원시 수준까지 프로퍼티를 복제
- Object.assign을 사용하는 방법도 있음 : 얕은 복사(shallow copy)
- 중첩 객체를 복제하기 위해서는 깊은 복사가 필요함!! 
- (structured cloning algorithm)[https://html.spec.whatwg.org/multipage/structured-data.html#safe-passing-of-structured-data]
- 또는 라이브러리 이용 (lodash의 메소드 _.cloneDeep(obj))