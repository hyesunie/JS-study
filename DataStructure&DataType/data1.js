//문자열에 프로퍼티를 추가할 수 있을까요?

let str = "Hello";

str.test = 5;

alert(str.test);

//비 엄격 모드에서는 프로프티를 추가하지만 래퍼객체가 바로 삭제되기 떄문에
//alert가 undefined로 나옴!!
