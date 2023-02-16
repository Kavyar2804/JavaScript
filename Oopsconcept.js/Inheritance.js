class bankdetails 
{

    balance = 123456
static branchd = 'Vijaynagar'

branch()
{
    console.log(`Branch details ${this.balance} ${bankdetails.branchd}`);
}

}
class persondetails extends bankdetails
{

fname = 'Kavya'
static lname = "R"
}

p = new persondetails()
console.log(p.balance);
p.branch()
console.log(bankdetails.branchd);
console.log(p.fname);

module.exports = p