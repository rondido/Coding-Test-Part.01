//51번 문제
//merger sort
//병합정렬은 대표적인 정렬 알고리즘 중 하나로 다음과 같이 동작
//리스트의 길이가 0 또는 1이면 이미 정렬된것으로 본다. 그렇지 않은 경우에는
//정렬되지 않는 리스트를 절반으로 잘라 비슷한 크기의 두 부분 리스트로 나눈다.
//각 부분 리스트를 재귀적으로 합병 정렬을 이용하여 정렬
//두 부분 리스트를 다시 하나의 정렬된 리스트로 합병


// function mergeSort(arr){
//     if(arr.length <=1){
//     return arr;
// }
//     const mid = Math.floor(arr.length/2);
//     const left = arr.slice(0,mid);
//     const right = arr.slice(mid);

//     return merge(mergeSort(left), mergeSort(right));
// }

// function merge(left, right){
//     let result = [];
    
//     while(left.length &&  right.length ){
//         if(right[0] > left[0]){
//             result.push(left.shift());
//         }else{
//             result.puh(right.shift());
//         }
//     }
//     while(left.length){
//         result.push(left.shift());
//     }
//     while(right.length){
//         result.push(right.shift());
//     }
//     return result;
// }

//52번 문제
//퀵 정렬
function quickSort(arr){
    if(arr.length <=1){
        return arr;
    }

    const pivot = arr[0];
    const left = [];
    const right = [];
   
    for(let i = 1; i<arr.length; i++){
        if(arr[i] < pivot){
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat(pivot, quickSort(right));
}

//53번 문제
//괄호 문자열
// 올바른 괄호인지 판별 yes or no

// const read = require("readline");
// const rl = read.createInterface({
//     input:process.stdin,
//     output:process.stdout

// })

// rl.on("line", (line) =>{
    
// })