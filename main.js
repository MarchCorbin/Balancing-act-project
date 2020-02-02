var close = document.querySelector(".oscarButton")
var welcome = document.querySelector(".welcome")
var walletButton = document.querySelector(".walletButton")
var clipboardButton = document.querySelector(".clipboardButton")

function closeWindow(){
  welcome.classList.add("hidden");
}

function hidePage(){
  var visible = document.querySelector(".visible");
  visible.classList.add("hidden")
  visible.classList.remove("visible")
}
function showTransactions(){
  hidePage();
  var transactionsPage = document.querySelector("#transactionsPage")
  transactionsPage.classList.remove("hidden")
  transactionsPage.classList.add("visible")
}
function showWelcome(){
  hidePage()
  var welcomePage = document.querySelector("#welcomePage")
  welcomePage.classList.remove("hidden")
  welcomePage.classList.add("visible")
}


walletButton.addEventListener("click", showTransactions);
close.addEventListener("click", closeWindow);
clipboardButton.addEventListener("click", showWelcome)
