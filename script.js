function sum(a, b){
    s = a+b;
    return s;
}

console.log(sum(2,3));

const u = (a, b)=>{
    console.log(a+b);
}

u(2,3)

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

//CALLBACK FUNCTIONS
let arr = [1,2,3,4,5];
arr.forEach((y)=>{
    console.log(y);
})




let arr1 = [1,2,3,4,5];
arr.forEach((val)=>{
    console.log(val*val)
})

//map callback
let arr2 = [2,3,4,5,6];
let newArr = arr2.map((val)=>{
    return val*val;
})

console.log(newArr);

//filter callback

let arr3 = [1,2,3,4,5,6,7,8,9];
let newArr1 = arr3.filter((val)=>{
    return val%2===0;
})

console.log(newArr1);

//reduce Callback => It takes many input values and return a single input value(like if we want to find average or sum)

let arr4 = [4,3,6,2,7,9,2];
let x = arr4.reduce((max, el)=>{
    if(max>el){
        return max;
    }else{
        return el;
    }
})

console.log(x);


let marks = [92, 90, 78, 95, 93, 99, 100, 87, 5];
let newArrr = marks.filter((val)=>{
    return val>90;
})

console.log(newArrr);

let size = prompt("Enter the size : ");
let arrr = [];
let newA = (size)=>{

    for(let i=0;i<size;i++){
        arrr.push(i);
    }
    return arrr;
}
console.log(newA(size));

let uu = arrr.reduce((prev, curr)=>{
    return prev+curr;
})

console.log(uu);

let tu = arrr.reduce((prev, curr)=>{
    return prev*curr;
})

console.log(tu);

