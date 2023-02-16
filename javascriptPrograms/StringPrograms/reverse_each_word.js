let s='I am an employeee of Testyantra'
let s1=""
s1 = s.split(" ").map(function(word)
{
    return word.split("").reverse().join('')
}
).join(" ")

console.log(s1);






