function showText() {
    var inputValue = document.getElementById("inputField").value
    console.log(inputValue);
  }
  document.getElementById("showbutton").addEventListener("click", showText);