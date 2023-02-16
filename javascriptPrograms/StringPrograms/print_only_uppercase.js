let s = 'I am an employee of TestYantra'
let s1 = s.split(" ")
let upper=""
for (let i = 0; i < s.length; i++) 
{
if(s.charAt(i)>='A' && s.charAt(i)<='Z')  
{
    upper=upper+s.charAt(i)
}  
    
}
console.log(upper);


