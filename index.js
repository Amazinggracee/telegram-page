
var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

let count = (parseInt(time));
count++;

if(count<=12){
  
  document.getElementById("p1").innerHTML = "Good morning";
}
else if(count >=16){
  
  document.getElementById("p1").innerHTML = "Good Evening";
}
else{
  document.getElementById("p1").innerHTML = "Good Afternoon";
}