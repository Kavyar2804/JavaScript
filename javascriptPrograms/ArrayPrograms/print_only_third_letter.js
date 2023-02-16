function thirdletter(input)
{
for(let i=0; i<input.length; i++)
{
    s = input[i]
    d = s.charAt(2)
    console.log(d);
//console.log(input[i].slice(2,3)+" ");

	
 }

console.log(input.map(val=>val.charAt(2).toString()));


}
thirdletter(['javascript','selenium','api','cypress'])
