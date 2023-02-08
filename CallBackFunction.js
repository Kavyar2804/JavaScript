function add(data1, data2)
{
    console.log(data1+data2);
}
function difference(data1, data2)
{
    console.log(data1-data2);
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

//arguments
difference(3,2,4,5)

