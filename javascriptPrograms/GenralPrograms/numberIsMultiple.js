
function multiple(num)
{
if(num%5==0 && num%10==0)
{
console.log(`${num} divisible by both 5 and 10`)
}
else(num%5==0)
{
    console.log(`${num} divisible only by 5`)
}

}

multiple(10)