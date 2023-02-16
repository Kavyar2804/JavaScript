
function vowUpr(input) 
{
    for(let i=0; i<input.length; i++)
    {
        ch = input.charAt(i)
        if(ch=='a'|| ch=='e'||ch=='i'||ch=='o'||ch=='u')
        {
            c=ch.toUpperCase()
            console.log(c);
        }
        else{
            console.log(ch);
        }
    }
    
}
vowUpr('good morning')