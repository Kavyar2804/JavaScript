
let coustomername = 
{
    cname : 'champu',
    accountno : 123456,
    facility :['creditcartd', 'internetbanking', 'debitcard'],
    details : function( name , balance)
    {
        console.log(name +"---->"+ balance);
        return 'hello'
    },
    family_details : 
    {
        relation : 'spouse',
        sname: 'xyz',
        age : 45,
    }
}

console.log(coustomername);  //fetching full objcet
console.log(coustomername.cname); //fetching data inside object
console.log(coustomername.facility[2]); // fetching data inside array
coustomername.details('a',123)//passing parameters to function
console.log(coustomername.details()); //invoking the function
console.log(coustomername.details('x' , 456)) //invoking function and passing data
console.log(coustomername.family_details.relation) //invoking object inside another object
 
//type 2
//calling function with object
function custom(name,age,acc,mobile ,xyz)
{
this.name= name
this.age= age
this.acc= acc
this.mobile =mobile
this.xyz=xyz
}

data1 = new custom('abc',30,12345, [1234,4567,890],function(){return 'efg'}) //creating object and passing
data2 = new custom('xyz',25,45678,)

console.log(data1)
console.log(data2)
console.log(data1.acc)
console.log(data1.mobile);
console.log(data1.xyz());

//type 3

var accountdetails = new Object()
accountdetails.name='purvith'
accountdetails.phone = 12345
accountdetails.address= 'Rajajinagar'
accountdetails.type = 'Savings'
accountdetails.branch = 'Vijaynagar'

console.log(accountdetails.phone);