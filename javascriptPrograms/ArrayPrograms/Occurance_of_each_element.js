var a = [1,2,5,4,1,4,4]
//a1 = new Boolean[a.length]
for (let i = 0; i <a.length; i++) 
{
 var count=0   

 for (let j = 0; j <a.length; j++) 
 {
    if(a[i]==a[j])
    {
       if(j<i)
       {
        break
       }
        count++
    }
 } 

 if (count>=1) 
 {
  
    console.log(a[i] + "----->" + count);
 }
    
}