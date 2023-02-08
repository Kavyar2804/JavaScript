class customerdetails
{
    constructor(cname, accountno, address,phoneNo)
    {
        this.cname=cname
        this.accountno=accountno
        this.address=address
        this.phoneNo=phoneNo
    }
}
data1 = new customerdetails('pur', 123456789, 'Bangalore', 9966778844)
data2 = new customerdetails('champ', 556677899, 'mysore', 8866441100)

console.log(data1.cname);
console.log(data2.address);