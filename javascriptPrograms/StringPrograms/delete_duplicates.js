function deletedupli(ch)
{
    for (let i = 0; i < ch.length; i++) 
    {
        let count=0
        for (let j = 0; j < ch.length; j++)
         {
            if(ch[i]==ch[j])
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
            console.log(ch[i]);
        } 
        
    }
}

deletedupli('Testyantra')