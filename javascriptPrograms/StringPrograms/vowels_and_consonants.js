let s='testyantra'
let vcount=0
let ccount=0
for (let i = 0; i < s.length; i++) {
    ch = s.charAt(i)
    if(ch=='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u')
    {
        vcount++
    }
    else{
        ccount++
    }
}

console.log("vowels" +"---->" + vcount);
console.log("consonants"+"----->" + ccount);