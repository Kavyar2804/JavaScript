let importedcls = require("./Inheritance.js")
console.log(importedcls);

class importing
{
    cname = "xyz"
}

let z = new importing()
console.log(z.cname)
