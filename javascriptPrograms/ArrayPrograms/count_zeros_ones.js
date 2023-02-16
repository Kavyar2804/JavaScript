let arr = [0,1,0,0,1,1,1]

let zcount=0
let ocount=0
for (let i = 0; i < arr.length; i++)
 {
    if(arr[i]==0)
    {
        zcount++
    }
    else
    {
        ocount++
    }
    
}

console.log( `the number of zero's in an array are ${zcount},
the number of one's in an array are ${ocount}`)