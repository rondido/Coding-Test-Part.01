// 35번 문제
//2제곱,3제곱,4제곱을 할 수 있는 factory 함수를 만들려고 한다.


// function one(n){
//     function two(m){
//         const answer = Math.pow(m,n)
//         return answer;   
//     }
//     return two;
// }

// const a = one(2);
// const b = one(3);
// const c = one(4);

// console.log(a(10));
// console.log(b(10));
// console.log(c(10));

//math.pow는 제곱

//클로저 함수 예제
// let name = 'epitone' 
// function log() { 
//     console.log(name);
//  } 
// function wrapper() { 
//     let name = 'epitone'; 
//     log();
//  } wrapper();


// 자바스크립트의 기본 함수 단위는 스코프가 생성
// function outer()
// {
// 	var a = 1; 
//     console.log(a); 
// }
// 	outer();

// function outer(){ 
//     var a = 1; 
//     function inner(){
//         var a = 2;
//         console.log(a);
//     }
//         inner(); 
// } 
// outer();


// 클로저 실습
// var d = 'X'; 
// function outer(){ 
//     var a = 1; 
//     var b = 'B';
//      function inner(){
//         var a = 2; 
//         console.log(b); 
//     } 
//     return inner; 
// } 
// var someFun = outer();
// someFun();

//36번문제
// 구구단 출력하기
// const read = require("readline");
// const rl = read.createInterface({
//     input:process.stdin,
//     output:process.stdout

// })

// rl.question("입력 :", (answer)=>{
//         for(var j =0; j<10; j++){
//             console.log(answer * j);
//         }
//     rl.close();
// })

//37번 문제
//반장 선거
// const read = require("readline");
// const rl = read.createInterface({
//     input:process.stdin,
//     output:process.stdout

// })
// let result = {};
// let winner = "";

// rl.question("입력 :", (answer)=>{
//         var array = answer.split(' ');
//         for(index in array) {
//             let val = array[index];
//             result[val] = result[val] === undefined ? 1 : result[val] = result[val] + 1;
//         }
//         winner = Object.keys(result).reduce((a,b)=>{
//             return result[a] > result[b] ? a : b
//         })
//         console.log(`${winner}(이)가 총 ${result[winner]}표로 반장이 되었습니다.`)
//         rl.close();
// })
