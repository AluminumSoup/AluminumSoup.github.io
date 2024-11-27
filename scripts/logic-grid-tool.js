/* document.getElementById("") += `<label for=""></label><br>
      <input type="text" name="" id=""/>`*/
const nameInputs = document.getElementById("name-inputs");
let namingNum1 = document.getElementById("row-num").innerText; 
let namingNum2 = document.getElementById("left-col-num").innerText; 
let namingNum3 = document.getElementById("right-col-num").innerText; 


nameInputs.innerHTML += `<label for="row-${j}">Row</label><br><input type="text" name="row-${j}" id="row-${j}"/><br>`;


for (let i = 0; i < 3; i++;){

}
