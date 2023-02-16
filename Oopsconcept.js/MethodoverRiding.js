let accountdetails = 
{
    fname : 'Kavya',
    lname : 'R',
    det : function ()
    {
        //return 'this account belongs to' + " " + this.fname + " " + this.lname 

        return `this account belongs to ${this.fname} ${this.lname}`
    }

}

console.log(accountdetails.det());
data = Object.create(accountdetails)
console.log(data);
data.lname='H'
data.fname='Purvith'
console.log(data);
console.log(data.det());

console.log(accountdetails.det());

console.log(accountdetails);