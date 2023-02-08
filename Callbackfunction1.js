function internetbanking()
{
return "login throgh internet banking"
}
function mobileapp()
{
return "login through mobile application"
}
function login(status , method)
{
if(status=='sucessfull')
{
   return method()
    //console.log(method());
}
else{
    
    console.log("login failed");
}
}
res = login("sucessfull", mobileapp)
console.log(res);
//login('unsucessfull', internetbanking )