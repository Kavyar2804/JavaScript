let input = [{fname : "abc", address : "India"},
{fname : "def", address : "Europe"},
{fname : "rst", address : "India"},
{fname : "xyz", address : "Europe"},
{fname : "mno", address : "Russia"}
]

let count=0
for (let i = 0; i < input.length; i++) 
{
    if(input[i].address=="India")
    {
        count++
    }
    
    
}
console.log(`The count of India is ${count}`);

let icount=0
let rcount=0
let ecount=0
for (let i = 0; i < input.length; i++) 
{

    if(input[i].address=='India')
    {
        icount++
    }
    if(input[i].address=='Russia')
    {
        rcount++
    }
    if(input[i].address=='Europe')
    {
        ecount++
    }

}
console.log(`The India count is ${icount},
The Russia count is ${rcount},
The Europe count is ${ecount}`);