## data1.js



### 원시값의 메서드
- JS는 primitive type을 객체처럼 다룰 수 있게 해줌 (하지만 원시값은 객체가 아님)
- Primitive type(string, number, bigint, boolean, symbol, null, undefined)
- 원시값의 작업을 수월하게 하기 위해서 메서드를 사용 가능하게 함 (null, undefined 제외)
- 객체가 너무 무겁기 때문에 원시값을 가능한 빠르고 가볍게 함
- 원시값의 메서드가 호출 될 때 과정
    1. 원시값의 메서트다 프로퍼티에 접근하려면  `object wrapper`를 만들어 줌
    2. 메서드가 실행
    3. `object wrapper` 파괴
