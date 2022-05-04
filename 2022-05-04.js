//43번 문제
// 10진수를 2진수로
// parseint 와 tostring
// 십진수에서 다른 진수로 변환시 tostring
// 다른진수에서 십진수로 변환시 parseint


// const read = require("readline");
// const rl = read.createInterface({
//     input:process.stdin,
//     output:process.stdout

// })

// rl.on("line", (line) =>{
//     let num = parseInt(line);
//     let chagnenum = num.toString(2);
//     console.log(chagnenum);
//     rl.close();
// })
// 내장 함수를 사용하지 않고 만들기

// rl.on("line", (line) =>{
//   let n = parseInt(line); 
//   let answer = [];
//   let result = '';
//    while(n){
//      answer.push(n%2);
//      n = Math.floor(n/2);
//  }
//  answer.reverse().forEach(n => result +=n)
//     rl.close();
// })


//44번 문제
//각 자리수의 합

// let sum = 0;
 
// const read = require("readline");
// const rl = read.createInterface({
//     input:process.stdin,
//     output:process.stdout

// })

// rl.on("line", (line) =>{
//     let count = line.split('');
//     for(var i in count){
//         sum += parseInt(count[i]);
//     }
//     console.log(sum);
//     rl.close();
// })

//다른사람의 정답

// const read = require("readline");
// const rl = read.createInterface({
//     input:process.stdin,
//     output:process.stdout

// })

// rl.on('line', (line)=>{
//     let n = line.split('').map((n)=>parseInt(n,10));
//     let result = 0;

//     for( let i =0; i< n.length; i++){
//         result += n[i];
//     }
//     console.log(result);
//     rl.close();
// })

//또 다른사람의 정답


// const read = require("readline");
// const rl = read.createInterface({
//     input:process.stdin,
//     output:process.stdout

// })

// rl.on('line', (line) =>{
//     let n = line;
//     let sum = 0;
//     while(n !== 0){
//         sum +=(n % 10);
//         n = Math.floor(n/10);
//     }
//     console.log(sum);
//     rl.close();
// })

//45번
//gettime()함수를 사용하기
//밀리초를 연도로 바꾸는 법
//초 * 분 * 시간 * 일 * 1000(밀리초를 일반 초 단위로 바꾸기 위해)
// let date = new Date();
// let Time = date.getTime();
// let year= Math.floor(Time/(60*60*24*365*1000) + 1970)
// console.log(year);

//46번 문제
//각 자리수의 합

// let sum = 0;
// let n = '';
// for(var i = 1; i < 21; i++){
//     n +=i;
// }
// for(let j = 0; j < n.length; j++){
//     sum += parseInt(n[j],10);
// }
// console.log(sum);

//47번 문제
//set 자료형의 응용
//중복된 객체 set
// set을 이용하여 객체에 값을 넣기 위해서는 add를 활용
// const people =[
//     ('이호준', '01050442903'),
//     ('이호상', '01051442904'),
//     ('이준호', '01050342904'),
//     ('이호준', '01050442903'),
//     ('이준', '01050412904'),
//     ('이호', '01050443904'),
//     ('이호준', '01050442903'),
// ]


// let answer = new Set();

// for(let i in people){
//     answer.add(people[i])
// }
// console.log(answer.size)

//48번문제
// 대 소문자 바꿔 출력하기


// let answer;
// const read = require("readline");
// const rl = read.createInterface({
//     input:process.stdin,
//     output:process.stdout

// })

// rl.on('line', (line) =>{
//     input = line;
//     answer = '';

//     for(var i in input){
//         if(input[i] === input[i].toUpperCase()){        
//             answer+= input[i].toLowerCase();
//         }
//         else{
//            answer += input[i].toUpperCase();
//         }   
//     }
//     console.log(answer);
//     rl.close();
// })

//49번문제
// max값 구하기

// let answer;
// var arr ;
// const read = require("readline");
// const rl = read.createInterface({
//     input:process.stdin,
//     output:process.stdout

// })

// rl.on('line', (line)=>{
//     answer = line.split(' ');
//     for(var i in answer){
//         arr = Math.max(answer[i]);
//     }   
//     console.log(arr);
// })

//50번 문제
//버블정렬 구현하기
// function bubble(arr){
//     let result = arr.slice();
//     for(let i =0; i< result.length -1; i++){
//         for(let j = 0; j < result.length -i -1; j++){
//             if(result[j] > result[j + 1 ]){
//              let temp = result[j];
//              result[i] = result[j+1];
//              result[j+1] = temp;   
//             }
//         }
//     }
//     return result;
// }