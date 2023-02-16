let accountdeatils =
{
    accname : "abc",
    accno : "def",
    details : function ()
    {
        console.log("This is" + " " + this.accname + " " + this.accno) ;
    }
}

let branchdetails =
{
    accname : 'ICICI',
    accno : 'Bangalore',
    bran : function()
    {
        console.log(this.accname + " " + this.accno);
    }
}

function welcome (name , designation)
{
    console.log("Welcome to the session"+ " " + name + " " + designation + " " + this.accname + " " + this.accno);
}

accountdeatils.details()
branchdetails.bran()
accountdeatils.details.call(branchdetails) //function barrowing  detials function is barrowing the properties from branchdetails object
branchdetails.bran.call(accountdeatils)  
welcome.call(accountdeatils , 'kav' , 'mentor')

//bind method

let data1 = welcome.bind(accountdeatils, 'purvith', 'Createor')
data1()
 
//apply method
welcome.apply(branchdetails,['RK', 'King'])

