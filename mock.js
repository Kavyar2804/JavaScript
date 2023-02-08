var a =[5,8,9,1,2]

for(let i=0; i<a.length; i++)
{
for(let j=i+1; j<a.length; j++)
{
if(a[j]<a[i])
{
var temp = a[j]
a[j]=a[i]
a[i]= temp

}
}
}

for(let k=0; k<a.length; k++)
{
console.log(a[k])
}