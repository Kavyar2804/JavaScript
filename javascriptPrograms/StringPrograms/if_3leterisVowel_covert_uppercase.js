// function uppercase(input)
// {
// var vowels='aeiouAEIOU'
// let s1 = input.split(" ")
// for(let i=0; i<s1.length; i++)
// {
//   let ch =  s1[i].s.charAt(2)
// if(vowels.indexOf(ch)!=-1) 
// {
// var fir =s1[i].split('')[0].toUpperCase()
// s1[i].subString(1).to
// }
// else
// {
// console.log(s1[i])
// }

// }
// }
// uppercase('good morning welcome to javascript session')


var s = 'good morning'
var arr = s.split(" ").map((wr)=>{
    if('aeiouAEIOU'.includes(wr.charAt(2))&& wr.length>2)
    {
        return wr.split(('')[0].toUpperCase()+ wr.slice(1))
    }
    else{
        return wr
    }
})

console.log(arr.join(" "));