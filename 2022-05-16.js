//54번 문제
//연속되는 수
// 연속된 숫자이면 yes or no

// const arr = (input) =>{
//     const arrsort = input.sort();
//     for(let i = 0; i < arrsort.length-1; i++){
//         if(arrsort[i] =1 !== arrsort[i +1]){            
//             return "No";
//         }
//     }
//     return "Yes";
// }

// const input = " 1 4 2 5 3 ".split(" ").map((el) => parseInt(el,10));
// arr(input);

//55번 문제
//하노이의 탑
// 1. 처음에 모든 원판은 A 기둥에 꽂혀 있다.
// 2. 모든 원판의 지름은 다르다.
// 3. 이 원반은 세 개의 기둥 중 하나에 반드시 꽂혀야 한다.
// 4. 작은 원반 위에 큰 원반을 놓을 수 없다.
// 5. 한번에 하나의 원판(가장 위에 있는 원판)만을 옮길 수 있다.

// const route = [];

// function hanoi(num,start,end,temp){
//     //원판이 한개일 때에는 바로 옮기면 됩니다.
//     if(num === 1){
//         route.push([start, end]);
//         return NaN;
//     }
//     //원반이 n-1개를 경유기둥으로 옮기고
//     hanoi(num -1 , start, temp , end)
//     //가장 큰 원반은 목표기둥으로
//     route.push([start,end]);
//     //경유기둥과 시작기둥을 바꿉니다.
//     hanoi(num -1, temp, end ,start);
// }
// hanoi(3, 'A','B','C');
// console.log(route);
// console.log(route.length);

//56번 문제
// 객체의 함수 응용
//한국의 면적과 가장 비슷한 국가와 차이를 출력

nationWidth = {
    'korea' : 220877,
    'rusia' : 170898242,
    'china' : 9596961,
    'france': 543965,
    'japan' : 377915,
    'england' : 242900
}
