//26번
// 행성문제2
// 수성,금성,지구,화성,목성,토성,천왕성,해왕성
// 영어 이름은 Mercury,venus,Earth,Mars,Jupiter,Saturn,Uranus,Neptune

// const read = require("readline");

// let map = new Map();

// map.set('수성','Mercury');
// map.set('금성','Venus');
// map.set('지구','Earth');
// map.set('화성','Mars');
// map.set('목성','Jupiter');
// map.set('토성','Saturn');
// map.set('천왕성','Uranus');
// map.set('해왕성','Neptune');

// const rl =read.createInterface({
//     input:process.stdin,
//     output:process.stdout
// })
// rl.question("입력 :", (answer)=>{
//     console.log(map.get(answer));
//     rl.close();
// })


//27번
//객체 만들기

// var count = 0;
//  const read = require("readline");

//  const rl =read.createInterface({
//     input:process.stdin,
//     output:process.stdout
// })
// rl.on('line', (line) =>{
//     let obj = new Object();
//     obj.key =line.split(' ').map(el => String(el));    
//     obj.value =line.split(' ').map(el => Number(el));
//     console.log(obj);        
// }).on('close',()=>process.exit())

// const name = window.prompt("이름을 입력하세요").split(" ");
// const number = window.prompt("점수를 입력하세요").split(" ");

// const answer = {};

// for( let i=0; i < name.length; i++){
//     answer[name[i]] = parseInt(number[i], 10);
// }



//28번문제
// 2-gram문제

//  const read = require("readline");

//  const rl =read.createInterface({
//     input:process.stdin,
//     output:process.stdout
// })
// rl.on('line', (line) =>{
//     for(let i = 0; i < line.length-1; i++){
//         console.log(line[i], line[i + 1]);        
//     }      
//     rl.close();
// })



//29번문제
// 대문자만 지나가세요

// const read = require("readline");

// const rl = read.createInterface({
//     input:process.stdin,
//     output:process.stdout

// })

// rl.question("입력 : ",(answer)=>{
//     if(answer === answer.toUpperCase()){
//         console.log('yes');
//     }
//     else{
//         console.log('no');
//     }
//     rl.close();
// })


//30번문제
//문자열 속 문자 찾기

// const read = require("readline");

// const rl = read.createInterface({
//     input:process.stdin,
//     output:process.stdout

// })
// var arr =[];

// rl.on('line', function(line){
//     rl.on('line', function(answer) {
//         arr = line;
//         if (arr.length >= 0){
//             li = line;
//             console.log(arr.indexOf(answer));
//         }
//         rl.close();
//     })
   
// })

//31번문제
//자바스크립트 자료형의 복잡도
//배열 내장 함수의 시간 복잡도 O(1)이 아닌 것을 모두 고르시오.
// arr[i]
// arr.push(5)
// arr.slice()
// arr.pop()
// arr.includes(5)
// 3,5번

