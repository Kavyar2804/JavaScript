class accdetails
{
#accno = 123456

get accno()
{
    return this.#accno
}
set accno(val)
{
    this.#accno=val
}

}

let ac = new accdetails()
console.log(ac.accno);
ac.accno=45678
console.log(ac.accno);