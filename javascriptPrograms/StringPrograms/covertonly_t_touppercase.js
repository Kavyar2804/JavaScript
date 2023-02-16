let s ='Testyantra'

s2= s.replaceAll('t' , 'T')
console.log(s2);

let s1 = s.toLocaleLowerCase


let c=""
for (let i = 0; i < s.length; i++) {
    
    ch = s.charAt(i)
    if(ch=='t')
    {
        c=c+'T'
    }
    else
    {
        c=c+ch
    }
}
console.log(c);