let date = new Date()

console.log(date.getDate());
console.log(date.getDay());
console.log(date.getFullYear());
console.log(date.getHours());
console.log(date.getMilliseconds());
console.log(date.getMinutes());
console.log(date.getMonth());
console.log(date.toDateString());
console.log(date.toISOString());
tdate = date.toDateString().split(" ")
console.log(tdate);
console.log(tdate[1]); //gives month
