"use strict"
class encapsul
{

    a=10
}
let p = new encapsul()
//Object.freeze(p)
p.a = 40
console.log(p.a);

module.exports=p