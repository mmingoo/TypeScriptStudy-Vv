"use strict";
let boolean;
let falsBoolean = false;
let number;
let integer = 6;
let float = 3.14;
let string;
let firstName = 'Doe';
let lasstName = 'my';
//array
//한가지 타입만 가지는 배열
let names1 = ['join', 'kim'];
let names2 = ['john', 'kim'];
//여러 타입을 가지는 배열 (유니온 타입 사용)
let array1 = ["John", 1, 2];
let array2 = ["John", 1, 2];
//여러 타입
let anyArray = ['1', 1, 2, false];
//읽기 전용 배열 생성
let stringArray = ['a', 'n'];
let numberArray = [1, 2, 3];
//튜플
let tuple1 = ['a', 1];
tuple1 = ['b', 1];
let users;
users = [[21, 'name'], [19, 'kim']];
let tuple2;
tuple2 = ['a', 1];
tuple2.push(2);
console.log(tuple2);
