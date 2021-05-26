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




## object3.js



### method and this
- 객체의 프로퍼티에 함수를 할당할 수 있음 -> 객체에게 행동 능력 부여
- 이렇게 생성된 메소드는 객체에 저장된 정보에 접글 할 수 있어야함
- 메소드 내부에서 `this` 키워드를 사용하면 객체에 접근 할 수 있다.
- `this` 외에도 프로퍼티 키를 이용해서 객체에 접근 할 수 있지만 외부에서 프로퍼티 자체를 다른 값으로 변경하거나 덮어쓴다면 원치않는 값이 나옴
- 모든 함수에서 `this`를 사용가능 함
- `this`의 값은 런타임에 결정 됨
- 화살표 함수는 일반 함수와 달리 고유한 this를 가지지 않음





## object4.js



### constructor function
- 유사한 객체를 여러개 만들어야 할 떄 사용 함
- 일반함수와 기술적인 차이는 없지만 두 관례를 따름
  1. 함수 이름의 첫 글자는 대무자로 시작함
  2. `new`연산자를 붙여 실행함
- `new`를 사용해서 함수를 실행할 경우
  1. 빈 객체를 반들어 `this`에 할당
  2. 함 수 본문을 실행
  3. `this`에 새로운 프로퍼티를 추가
  4. `this`를 반환
  ```
  function User(name) {
  // this = {};  (빈 객체가 암시적으로 만들어짐)

  // 새로운 프로퍼티를 this에 추가함
  this.name = name;
  this.isAdmin = false;

  // return this;  (this가 암시적으로 반환됨)
} ```

### new.target
- new.target 프로퍼티를 사용하면 new와 함께 호출됐는지를 알 수 있음
```
function User() {
  alert(new.target);
}

// "new" 없이 호출함
User(); // undefined

//"new"를 붙여 호출함
new User(); // function User { ... }
```

### return
- 생성자 함수에는 보통 `return`문이 없음
- 반환해야할 것들이 모두 `this`에 저장 후 자동으로 반환 됨
- `return`문이 존재할 경우
    1. 객체 `return`, `this` 대신 객체가 반환
    2. 원시형 `return`은 무시 됨





## object5.js



### Optional chaining
- 프로퍼티가 없는 중첩 객체를 에러 없이 안전하게 접근 가능
- 존재하지 않는 요소에 접근해서 정보를 가져오려고 하면 에러가 발생하는데 이 문제를 해결하기 위한 방법
- 존재하지 않아도 괜찮은 대상에만 사용해야 함


### Symbol
- 객체 프로퍼티 키로 문자형과 심볼형만을 허용함
- 유일한 식별자(unique identifier)를 만들고 싶을 때 사용
- `Symbol()`을 사용해 생성, `id`라는 설명을 추가해 생성하고 싶다면 `Symbol(id)`로 생성
- 설명이 동일한 여러개의 심볼을 만들어도 각 심볼 값은 다름
- 문자형으로 자동 형 변환 되지 않음 (alert 사용 안됨)
- `symbol.description` 이용하면 설명만 보여주는 것도 가능


### Symbol - hidden property
- 외부 코드에서 접근이 불가능하고 덮어쓸 수 없는 프로퍼티
- 대괄호를 사용해 심볼형 키를 만들 수 있음
- for-in 반복문에서 제외 됨
- `Object.assign`은 키가 심볼인 프로퍼티도 포함하여 복사함





## object6.js



### Converting object to primitive type

