//to make data protected UNDERSCORE _
//TO MAKE DATA private $ or #

class accountno
{
     $accno=123456

    get accno()
    {
        return this.$accno
    }
}

ac = new accountno()
console.log(ac.accno);
ac.accno=56789
console.log(ac.accno);