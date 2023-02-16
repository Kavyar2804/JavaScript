//type 1

let persondata =
{
    name:'kav',
    age:100,
    dob:'Apr 28 1993',
    dod:'Unknown',
    family : 
    {
    Father: 'yes',
    Mother:'yes',
    Brother:'yes',
    Husband:'yes',
    kids: 'no as of now'
    },
    Favourite_person : 'Purvith'
}

// console.log(persondata.Favourite_person);


//type 2

function persondetails(name,age,phn)
{
    this.name=name,
    this.age = age,
    this.phn = phn
}

data1 = new persondetails('abc',500,1234567890)

console.log(data1.phn);
