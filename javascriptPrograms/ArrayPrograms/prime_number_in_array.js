let arr = [5,9,8,7,3,6,2,1]

for (let i = 0; i < arr.length; i++) 
{
   let n=arr[i]
   let j=2;
    while(j<=n)
    {
        if(n%j==0)
        {
            break
        }
        else
        {
            j++
        }

    }
    if(j==n)
    {
        console.log(n);
    }
    
}