//11번
//1부터 100까지의 합

let s= 0;

for(var i = 0; i <= 100; i++){
    s +=i;
}
console.log(s);

//12번
//클래스를 이용하여 게임의 능력치와 파이어볼을 출력

class Wizard{
    constructor(health,mana,armor){
        this.health = health
        this.mana = mana
        this.armor = armor
    }
    attack(){
        console.log("파이어볼");
    }
}

const x = new Wizard(545,210,10)
console.log(x.health,x.mana,x.armor)
x.attack();
//13번
// n번째 수성,금성,지구,목성,토성 천왕성, 해왕성
// const readline = require('readline');
// const r1 = readline.createInterface({
//     input: process.stdin, 
//     output:process.stdout
// })

// const plants=["수성","금성","지구","목성","토성","천완성","해왕성"]
// r1.question("입력: ",(answer)=>{
//     console.log(`출력:${plants[Number(answer)-1]} `);
//     r1.close();
// })

//14번
//3의 배수는 짝 3의 배수가 아니라면 n을 그대로 출력

// const read = require('readline');
// const rl = read.createInterface({
//     input:process.stdin,
//     output:process.stdout
// })
// rl.question("입력 :",(answer) =>{
//     if(answer % 2 == 1){
//         console.log("짝");
//         rl.close();
//     }else{
//         console.log(`3의 배수가 아닌 : ${answer}`);
//         rl.close();
//     }
// })

//15번
// 자개소개

const readline = require('readline');
const rl = readline.createInterface({
   input:process.stdin,
   output:process.stdout
})
rl.question("입력 :", (answer)=>{
    console.log(`안녕하세요 저는 ${answer} 입니다.`);
    rl.close();
})