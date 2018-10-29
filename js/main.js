

var now = new Date();
console.log(now)

var minutes= now.getMinutes();
console.log(minutes)


var seconds= now.getSeconds();
console.log(seconds)

setInterval(function(){
	 var now = new Date();
	 var hours = now.getHours();
	 var minutes= now.getMinutes();
	 var seconds= now.getSeconds();
console.log(hours + ":" + minutes + ":"  + seconds)
}, 1000
)

 document.getElementById("showDate").innerHTML = Date();
  
document.body.style.backgroundColor = "coral";
