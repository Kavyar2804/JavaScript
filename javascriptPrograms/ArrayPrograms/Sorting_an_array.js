var a =[1,2,5,4,1,4,4]

for (let index = 0; index < a.length; index++) 
{
    for (let j = index+1; j < a.length; j++) {
        
        if(a[index]>a[j])
        {
            var temp = a[j]
            a[j]= a[index]
            a[index]= temp
        }
        
    }
    
}

for (let k = 0; k < a.length; k++)
 {
    console.log(a[k]);
    
}