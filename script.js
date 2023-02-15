/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio konvertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

const convertButton = document.getElementById("submit-btn");
convertButton.addEventListener("click", function (event) {
  event.preventDefault();
  const Pounds = document.getElementById("search").value * 2.2046;
  console.log(Pounds);
  const Grams = document.getElementById("search").value / 0.001;
  console.log(Grams);
  const Ounce = document.getElementById("search").value * 35.274;
  console.log(Ounce);

  const PrintedPounds = document.createElement("div");
  output.appendChild(PrintedPounds);
  PrintedPounds.id = "pounds-holder";
  PrintedPounds.innerText = Pounds;
});
