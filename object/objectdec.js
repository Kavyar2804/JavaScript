let bankdetails =
{
    name : 'ICICI bank',
    location : 'Bangalore',
    employees : 150,
    Branches : ['Bangalore','Mysore', 'Mandya'],
    details : function()
    {
        return 'Bangalore';

    },
    CEO : 'AllbranchOneCEO'
}

console.log(bankdetails.name);
console.log(bankdetails.details());

// To modify the existing data
bankdetails.employees = 200
console.log(bankdetails.employees);

//To add new data to the existing object
bankdetails.intrestrate = '13.5%'
console.log(bankdetails);

//To delete the data in object
delete bankdetails.employees
console.log(bankdetails);

//fetching data through for in loop
for (const alldata in bankdetails) {
    
    console.log(alldata + " " + bankdetails[alldata] );
}

// //for of not itteratable
// for (const alldata of bankdetails) {
    
//     console.log(alldata + " " + bankdetails[alldata] );
// }
