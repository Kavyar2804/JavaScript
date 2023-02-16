let s="I am an Employee of Testyanta    "
let s1=""

for (let i = 0; i < s.length; i++) 
{
    let ch=s.charAt(i)
    if(s[i]==" ")
    {
        s1[i]=""
    }
    else{
        s1=s1+ch
    }
    
    
}

console.log(s1);