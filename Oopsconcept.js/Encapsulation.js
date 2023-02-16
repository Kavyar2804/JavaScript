"use strict";

class encapsul
{
    account=123456
    #accno='confidentia data'

    // disaccno()
    // {
    //     console.log(this.#accno);
    // }

    // get accno()
    // {
    //     return this.#accno
    // }

    // set newaccno(val)
    // {
    //     this.#accno=val
    // }

}

let en = new encapsul()
 en.disaccno()
console.log(en.accno);
en.newaccno=56789
console.log(en.accno);