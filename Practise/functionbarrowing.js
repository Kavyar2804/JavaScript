let acdetails = 
{
fname:'Kavya',
lname : 'R',
details : function()
{
console.log(`this account belongs to ${this.fname} ${this.lname}`)
}
}

let acdetails2 = 
{
fname : 'Purvith',
lname : 'H',
}

 function invite(manager, branch)
{
console.log(`Welcome to the ${branch} branch by ${manager} to ${this.fname} ${this.lname}`)
}

//call method
acdetails.details.call(acdetails2)


//bind method
data = acdetails.details.bind(acdetails2) 
data()


//apply method

acdetails.details.apply(acdetails2)


invite.apply(acdetails, ['Purvith' , 'Vijaynagar'])
