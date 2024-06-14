//a random color 
alert("hi there");
const chooseColorBtn = document.getElementById("choose-color-btn");

chooseColorBtn.addEventListener("click", chooseRandomColor());

function chooseRandomColor(){
  const redValue = Math.floor(Math.random() * 256);
  const greenValue = Math.floor(Math.random() * 256);
  const blueValue = Math.floor(Math.random() * 256);
  
  document.getElementById("color-display").style.backgroundColor = "#FF99CC";
  document.getElementById("color-display").textContent = "Hi Randy";
  alert("ok");
};

