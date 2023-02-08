var s = "testyantra"

for (let i = 0; i < s.length; i++) 
{
   let count =0
    ch = s.charAt(i)

    for (let j = 0; j < s.length; j++) 
    {
        if(s.charAt(i)==s.charAt(j))
        {
            if(j<i)
            {
                break
            }
            count++
        }
        
    }
    if(count>=1)
    {
    if(ch=='a'||ch=='e'||ch=="i"||ch=='o'||ch=='u')
    {
        
        console.log(ch +".....>"+ count);

    }
    }
    
}
