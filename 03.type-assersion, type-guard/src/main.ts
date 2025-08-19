let falsBoolean : boolean = false;

let number : number;
let integer : number = 6;
let float : number = 3.14;

let string : string
let firstName  = 'Doe';
let lasstName  = 'my';

//array
//한가지 타입만 가지는 배열
let names1: string[] = ['join','kim'];
let names2: Array<string> = ['john', 'kim'];

//여러 타입을 가지는 배열 (유니온 타입 사용)
let array1: (string | number) [] = ["John", 1,2];
let array2: Array<string | number> = ["John", 1,2];

//여러 타입
let anyArray: Array<any>  = ['1',1,2,false] 

//읽기 전용 배열 생성
let stringArray : readonly string[] = ['a','n'];
let numberArray : ReadonlyArray<number> = [1,2,3];



//튜플
let tuple1 : [string,number] = ['a',1];
tuple1 = ['b',1];

let users: [number , string][]
users = [[21,'name'], [19,'kim']]


let tuple2 :[string, number]
tuple2 = ['a',1]
tuple2.push(2)
console.log(tuple2)


//unknown
let unknown: unknown = false;
// 불가함 : 컾마일러 입장에서 불리안 안에 불리안만 넣을 수 있음. 따라서 해당 타입을 as boolean 을 지정해주면 끝 
// let string1: boolean = unknown;
let string2: boolean = unknown as boolean;


//Object
let obg : object = {};
let arr : object = [];

// 원래 Null 도 object 로 인식은 되지만 원래는 Null object 객체가 아님 
// config 파일에서 strict 를 false 로 한다면 애러 발생 안함
// let nul : object = null; 

let date : object = new Date();

const obj1 : {id: number , title : string} = {
    id : 1,
    title : "title1"
}

const user2 :  {id : number , title : string} = {
    id : 1,
    title : "wtirng"
} 

//union 타입
let union12 : (string | number)
union12 = 'h1';
union12 = 1;


//함수 선언 
let func1 : (arg1 :number, arg2 :number ) => number;

func1 = function(arg1, arg2){
    return arg1 + arg2;
}


//반환타입 없는 메서드
let func2 : () => void;
func2 = function(){
    console.log("hi!")
}

// //Null, Undefinde
// let number11123 : number = undefined;
// let string090 : string = null;
// let obj: {a:10, b:false} = undefined;
// let array : any[] = null;

// let nul1: null = undefined;
// let void1 : void = null;
// let void2: void = undefinedl;



//void

function greeting() : void{
    console.log('h1')
}

const h1 : void = greeting();
console.log(h1);

//never
function throwError(): never{
    throw new Error('error')
}


function keepPricessing() : never{
    while(true) {

    }
    
}

const never: number[] = []
never.push(1)