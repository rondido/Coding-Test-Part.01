//31번문제
//자바스크립트 자료형의 복잡도
//배열 내장 함수의 시간 복잡도 O(1)이 아닌 것을 모두 고르시오.
// arr[i]
// arr.push(5)
// arr.slice()
// arr.pop()
// arr.includes(5)
// 3,5번



//32번문제
//문자열을 입력받으면 단어의 갯수를 출력

// const read = require("readline");

// const rl = read.createInterface({
//     input:process.stdin,
//     output:process.stdout

// })

// var arr = [];
// rl.on('line', (line) =>{
//     arr = line.split(' ').map(el =>(String(el)));
//     console.log(arr.length);
//      rl.close();
// })

//33번문제
//입력받은 숫자를 역순으로 정렬하기

// const read = require("readline");

// var arr = [];

// const rl = read.createInterface({
//     input:process.stdin,
//     output:process.stdout

// })

// rl.on('line', (line) =>{
//     arr = line.split(' ').reverse();
//     console.log(arr);
//     var result = "";
//     for (let i = 0; i < arr.length; i++){
//         result += arr[i];
//     }
//     console.log(result);
//     rl.close();
// })


//34번문제
//sort 구현
// 민주를 위해 키가 주어지면 순서대로 제대로 섰는지 확인하는 프로그램
// 키는 공백을 구분

const read = require("readline");

var arr = [];

const rl = read.createInterface({
    input:process.stdin,
    output:process.stdout

})


rl.on('line', (line) =>{
    arr = line.split(' ').map(el =>(parseInt(el)));
    arr.sort((a, b) =>{
        return a - b;
    })

    if(arr.sort == 1 ){
        console.log('yes');
    }
    else{
        console.log('no');
    }
    rl.close();
})