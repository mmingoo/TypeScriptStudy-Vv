// interface Animal{
//     name : string
// };

// interface Bear extends Animal{
//     honey : boolean
// };


// // Animal 로 하면 에러 발생
// const bear2: Animal = {
//     name : "honey bear",
//     honey : true
// }


//타입 사용법, 타입에선 병합 안됨
type Animal2  = {
    name : string;
}

type Bear = Animal2 &{
    honey : boolean;
}

const bear1: Bear = {
    name : 'honey bear',
    honey : true
}


// type Animal = {
//     name : string;
// }
// type Animal = {
//     honey : boolean;
// }


// 타입과 인터페이스 모두 클래스에 implements 사용 가능
