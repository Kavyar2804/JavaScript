
async function synch()
{
    console.log("login");
   let p =  new Promise((resolve, reject)=>
   {
    setTimeout(() => 
    {
        resolve("Sucess")
        reject("Deleted")
        
    }, 2000);
   })
   
   await p.then((message)=>console.log(message)).catch((message)=>{console.log(message);})

   let p1 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve("hello sucess")
        reject("unsucessful")
        
    }, 1000);
   })
   await p1.then((message)=>{console.log(message);}).catch((message)=>{console.log(message);})

   console.log("logout");

}

synch()