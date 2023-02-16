
function add(data1, data2)
{
    console.log(data1+data2);
}
function difference(data1, data2)
{
    console.log(data1 , data2);
    console.log(arguments); //printing arguments which wre passed
    console.log(arguments[3]); //printing arguments by index

}

function perform(data1, data2, opertaion)
{
console.log( "Passed values are"+ " "+data1 + " "+ data2);
opertaion(data1,data2)
}

perform(3, 5, add)
perform(3, 5, difference)

//arguments array or unassigned values
difference(3,2,4,5)  

//whatever the arguments we pass first it will be stored in an argument array later the values will be assigned 
//to the parameters based upon the index