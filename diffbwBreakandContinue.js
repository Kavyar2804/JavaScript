let arr =[2,3,4,1,2,9]
for (let i = 0; i < arr.length; i++) {
    if(arr[i]==2){continue}
    {
        console.log(arr[i]);
    }
    
}

arr.map((ele)=>{
    res = ele*3
console.log(res);})

let s = "my name is purvith"

s1 = s.split(" ")
s3 = s1.map((wr)=>wr.split('').reverse().join(''))
console.log(s3);
//console.log(s3.toString());
res = s3.join(' ')
console.log(res);