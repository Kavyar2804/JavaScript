var a = [1,2,5,4,1,4,4]
var min =a[0]
for (let index = 0; index < a.length; index++) 
{
    if (a[0]>a[index]) {
        a[0]= a[index]
        
    }
    
}
console.log(a[0]);