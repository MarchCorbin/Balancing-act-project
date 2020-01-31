var close = document.querySelector(".oscarButton")
var welcome = document.querySelector(".welcome")

close.addEventListener("click", closeWindow);

function closeWindow(){
  welcome.classList.add("hidden");
}
