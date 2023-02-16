st='good morning welcome to javascript session'
let words = st.split(' ')
const vowels = ['a','e','i','o','u']
let a=''
for(let i =0; i<words.length; i++)
{  
 let  s =words[i]
    if(vowels.includes(s[2]))
    {
       let firstchar=  s[0].toUpperCase()
       words[i]= firstchar+s.substring(1)
    }
  a = words.join(" ")
}
console.log(a);