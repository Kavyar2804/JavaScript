let accountdata =
{
    acname:'kav',
    accno:123456,
   delta : function()
   {
    console.log(this.acname);
    x=50,
    console.log(x);
    console.log(this.accno);
   } 

}

let y = 100

let branchdata =
{
    name:'ICICI',
    location:'vijaynagar',
    alpha :  function()
    {
    console.log(this.acname); //undefined bcz this keyword works only within that object
    console.log(this.y);
    console.log(this.location)
    accountdata.delta() //accessing the object with object name and function name
    console.log(accountdata.acname)
        
    }
}

accountdata.delta()
branchdata.alpha();