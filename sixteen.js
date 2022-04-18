//16번
//거꾸로 말하기
// const readline = require("readline");


// const rl = readline.createInterface({
//     input:process.stdin,
//     output:process.stdout    
// })

// rl.question('입력 : ', function(answer) {
    
//     var n = answer;
//     console.log(n.split('').reverse().join(''));
//     rl.close();
// })

//split을 사용하여 문자열을 배열로 치환
//reverse를 사용하여 배열을 반대로 정렬 
// join을 이용하여 문자 열로 반환

//17번
//키가 150을 넘으면 yes 그렇지 않다면 no

// const readline = require("readline");

// const rl = readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// })

// rl.question("입력 :", (answer) => {
//     if(answer > 150){
//         console.log("yes");
//     }
//     else{
//         console.log("no");
//     }
//     rl.close();
// })


//18번
//수학 국어 영어 평균점수 구하기
// 단 소숫점 자리는 모두 버린다.

// const readline = require("readline");

// const rl = readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// })
// var array = [];
// var count = 0;

// rl.on('line', (answer) =>{
//     array.push(parseInt(answer, 10)) ;
    
//     count += 1;
//     console.log(Math.floor((array[0] + array[1] + array[2]) / 3));
//     if(count === 3){
//         rl.close();
//     }
// })

//19번
// a와 b의 제곱

// const readline = require("readline");
// const rl = readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// })

// var count = 0;
// var array = [];
// rl.on('line', (answer) =>{
//     array.push(parseInt(answer,10));
    
//     count += 1;
//     console.log(array[0] ** array[1]);
//     if(count === 2){
//         rl.close();
//     }
// })

//20번


// var count = 0;
// var array = [];

// const readline = require("readline");
// const rl = readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// })

// rl.on('line', (answer) =>{
//     array.push(parseInt(answer,10));

//     count += 1;
//     console.log(array[0] / array[1]);
//         if(count === 2){
//             rl.close();
//     }            
// })


//21번
// set은 어떻게 만드나요?
// 1) var x = {1,2,3,4,5};
// 2) var x = {};
// 3) var x = new Set('javacript');
// 4) var x = new Set(range(5));
// 5) var x = new Set();
// 3번

//22번
// 배수인지 확인하기
// 1) i / 6  == 0
// 2) i % 6  == 0
// 3) i & 6  == 0
// 4) i | 6  == 0
// 5) i // 6 == 0
// 2번

//23번
// OX문제
//X
//console.log(10/3);

//24번
//대문자로 바꾸기

// const fs = require("fs");

// var text = fs.readFileSync('input.txt','utf8');
// console.log(text.toUpperCase());


//25번
//원의 넓이를 구하세요
//  const fs = require("fs");

// var text = fs.readFileSync('circle.txt','utf8');
// console.log(text * text * 3.14);