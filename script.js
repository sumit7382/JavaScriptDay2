// function sum(a, b){
//     s = a+b;
//     return s;
// }

// console.log(sum(2,3));

// const y = (a, b)=>{
//     console.log(a+b);
// }

// y(2,3)

function vowels(msg){
    let num = 0
    for(let i=0;i<msg.length;i++){
        if(msg[i]=='a' || msg[i] =='e' || msg[i] =='i' || msg[i] =='o' || msg[i] == 'u'){
            num++;
        }
    }
    return num;
}

console.log(vowels("aeiou"));

const y = (msg) => {
    let num = 0
    for(let i=0;i<msg.length;i++){
        if(msg[i]=='a' || msg[i] =='e' || msg[i] =='i' || msg[i] =='o' || msg[i] == 'u'){
            num++;
        }
    }
    console.log(num);
}
y("aeious");

