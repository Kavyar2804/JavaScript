//if else
var country = 'India'
if(country = 'india')
{
    console.log("eligible to open account")
}
else
{
    console.log("not eligible to open account")
}

//else if
var accountno = 12
if( accountno = 12)
{
    console.log("valid account no.")
}
else if( accountno< 12)
{
    console.log("invalid account no")
}
else{
    console.log("account no cannot be blank")
}

//switch cases

var amount = 500

switch (amount)
{
case 1000: console.log("minimum balance maintained")
break
case 2000 : console.log("Above minimum balance maintained")
break
case 5000:console.log("coustomer will get intreset of 1%")
break
case -500 : console.log("amount will be deducted")
break
default:console.log("insufficient balance")
break
}