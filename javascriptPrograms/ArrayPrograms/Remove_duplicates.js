var a =[1,2,5,4,1,4,4]
for (let i = 0; i < a.length; i++) {
    
    for (let j = i+1; j < a.length; j++) {
        if(a[i]==a[j])
        {
            a[j]=0
        }   
    }    
}
for (let k = 0; k < a.length; k++) 
{
    if(a[k]!=0)
    {
        console.log(a[k]);
    } 
}