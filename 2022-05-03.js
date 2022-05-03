//40번
//놀이동산에 가자
//제한 무게 
//탈수 있는 인원수  n


// let arr;
// let sum = 0; //총 아이들의 몸무게
// let count = 0; //원수
// const read = require("readline");
// const rl = read.createInterface({
//     input:process.stdin,
//     output:process.stdout

// })

// rl.on('line', function(line){ //무게 제한
//     rl.on('line', function(people) { //인원수
//         rl.on('line', function(answer) {       // 아이들의 몸무게                  
//             count = parseInt(people);
//             arr = parseInt(line);
//             for (let i=1; i<=count; i++){
//                 sum += parseInt(answer.split(' '));    
//                 if(sum <= arr){
//                     count = i;
//                 }
//             }                 
//             console.log(count);
//             rl.close();
//         })
//     })
// })

//41번
//소수 판별
// 소수이면 yes, 아니면 no


// const read = require("readline");
// const rl = read.createInterface({
//     input:process.stdin,
//     output:process.stdout

// })

// rl.question("정수를 입력하시오", (answer) =>{
//     for(let i =2; i< answer; i++){
//         const result = answer % i;
//         console.log(result);
//         if(result === 0) { 
//             console.log('NO'); 
//         } 
//     }       
//      if (answer === 1) { 
//         console.log('NO'); 
//     } 
//     console.log('YES');     
//     rl.close();
// })


//42번 문제
// 윤년 2020년의 a와 b일은 무슨요일 일까요?


const date = {
    0 : 'SUN',
    1 : 'MON',
    2 : 'TUE',
    3 : 'WED',
    4 : 'THU',
    5 : 'FRI',
    6 : 'SAT'    
};

const read = require("readline");
const rl = read.createInterface({
    input:process.stdin,
    output:process.stdout

})

rl.on("line", (a) =>{
    rl.on("line", (b)=>{
        const solution = (a,b) => {
          let today = new Date().getFullYear();
          let getday = new Date(`${today}-${a}-${b}`).getDay();          
          console.log(date.valeus(getday));
        }        
        solution(a,b);
        rl.close();
    })   
})