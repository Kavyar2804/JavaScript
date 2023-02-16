function consonantsOccurance(str)
{
for(let i =0; i<str.length; i++)
{
    let count=0
for(let j=0; j<str.length; j++)
{
    if(str[i]==str[j])
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
    if(str[i]!='a' && str[i] !='e' && str[i]!= 'i' && str[i]!='o' && str[i]!='u')
    {
        console.log(str[i] + "----->" + count);
    }
}
}
}
consonantsOccurance('harshitha')