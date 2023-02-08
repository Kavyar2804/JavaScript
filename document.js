document.getElementById('gretting').innerHTML= "Hello good morning"
document.getElementById('js').innerHTML = "JS Session Started"

document.getElementById("clickbtn").onclick=demo
function demo()
{
    document.getElementById("clickbtn").innerHTML='Clicked'
}

document.getElementById("disdate").onclick=datee
function datee()
{
    document.getElementById("date").innerHTML=Date()
}