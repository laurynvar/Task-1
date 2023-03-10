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
  const Ounces = document.getElementById("search").value * 35.274;
  console.log(Ounces);

  const PrintedPounds = document.createElement("div");
  output.appendChild(PrintedPounds);
  PrintedPounds.id = "pounds-holder";
  PrintedPounds.innerText =
    `Your entered kilograms are equal to ` + Pounds + ` Pounds (lb)`;

  const PrintedGrams = document.createElement("div");
  output.appendChild(PrintedGrams);
  PrintedGrams.id = "grams-holder";
  PrintedGrams.innerText =
    `Your entered kilograms are equal to ` + Grams + ` Grams (g)`;

  const PrintedOunces = document.createElement("div");
  output.appendChild(PrintedOunces);
  PrintedOunces.id = "ounces-holder";
  PrintedOunces.innerText =
    `Your entered kilograms are equal to ` + Ounces + ` Ounces (oz)`;
});
