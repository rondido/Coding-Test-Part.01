//38번 문제
//호준이의 아르바이트


// var arr = [];
// const read = require("readline");
// const rl = read.createInterface({
//     input:process.stdin,
//     output:process.stdout

// })

// rl.question("입력 :", (answer) => {
//     arr = answer.split(' ').map((n)=>{
//         return parseInt(n,10);
//     })
//     arr.sort((a,b) =>{
//         return a-b;
//     });

//     let count =0;
//     let array = [];
//     while(array.length <3){ // 1등에서 3등까지 3가지 점수만 들어가기 때문에 3이 되면 그만 둔다.
//         let n = arr.pop();
//         if(!arr.includes(n)){ // 값이 있는지 없는지 확인하고 없으면 넣는다 -> n이라는 값이 있다면 true를 반환 !는 false를 반환
//             array.push(n);
//         }
//         count += 1;
//     }
//     console.log(count);
//     rl.close();
// })


//39번
//오타 수정하기


// const read = require("readline");
// const rl = read.createInterface({
//     input:process.stdin,
//     output:process.stdout

// })

// rl.question("입력 :", (answer)=>{
    
//     console.log(answer.replace("q","e"));
   
//     rl.close();
// })

//40번
//놀이동산에 가자
//제한 무게 
//탈수 있는 인원수  n


let arr = [];
const read = require("readline");
const rl = read.createInterface({
    input:process.stdin,
    output:process.stdout

})

rl.on('line', function(line){
    rl.on('line', function(answer) {
        arr = answer.split(' ').map((el) =>{
            arr(el);
        })
        
        rl.close();
    })
   
})