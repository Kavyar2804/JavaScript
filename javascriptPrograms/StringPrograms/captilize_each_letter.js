let s = 'i am emplyoee of testyantra'
let s1 = s.split(" ")


for(let i=0; i<s1.length; i++)
{
    s1[i]=s1[i].charAt(0).toUpperCase + s1[i].slice(1)
}
let s3 = s1.join(" ");
console.log(s3);