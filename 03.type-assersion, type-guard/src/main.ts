// 만약에 index.html에서 body 가 없으면 타입스크립트에서 null 이라고 생각할 수 있음
//Null 반환 가능성

// 첫번째 방법
const bodyElement = document.querySelector('body') as HTMLBodyElement;
bodyElement.innerText = "hello";

//두번째
//!를 붙여서 널이 아니라고 알려주는 것 
const bodyElement1 = document.querySelector('body');
bodyElement!.innerText = "hello";

// 세번째
//타입 가이드를 사용하기도 함 
const bodyElement2 = document.querySelector('body');
if(bodyElement){
    bodyElement2.innerText = "hello";
}


//타입 단언은 조심히 써야함
function func1(arg: String | null){
    return (arg as string).toLowerCase();   
}

// hello 를 넣어줄 땐 에러가 발생하진 않음
// 근데 Null 을 넣어줄 땐 에러가 발생
// 그래서 타입 단언을 사용할 경우 null 이 들어가면 에러가 발생하기 때문에 조심해야 함
func1('hello');
func1(null) 

// 타입 가드를 사용해서 문제를 해결할 수 있음
function func2(arg: String | null){
    if(arg){
        return arg .toLowerCase();   
    }
}