function vowels(str)
{
let vow =[]
for(let i=0; i<str.length;i++)
{
ch = str.charAt(i)
if(ch=='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u')
{
vow.push(ch)
}
}
console.log(vow)
}

vowels("purvith")

