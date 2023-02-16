class  account
{
    constructor(fname , lname)
    {
        this.fname=fname
        this.lname=lname
    }

    a=10            //non satic variable
    static b=20     //satatic variable

static demo()           // static method
{
    console.log(this.b); //acessing static variable //20
    console.log(this.a); //accessing non static variable //undefined

    var p = new account() //accessing non static variable through object 
    console.log(p.a); //10
}

demo1()                 //non static method
{
    console.log(this.a);  //acessing non static variable //10
    console.log(this.b);  //accessing static variable //undefined
    console.log(account.b);//20
}   
}

//creatng object for class and passing value for constructor
 data = new account('hi','hello')

 console.log(data.a);  //accessing non satic varible outside the class
 console.log(account.b); //accessing satic varible outside the class

 console.log(data.fname); //accessing constructor through object
 console.log(data.lname);

account.demo()   //accessing static method outside the class

data.demo1()   //accessing non static method

// console.log(data.demo1());
// console.log(account.demo());