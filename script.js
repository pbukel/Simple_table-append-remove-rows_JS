"use stric";
let vardas = document.getElementById("vardas");
let pavarde = document.getElementById("pavarde");
let amzius = document.getElementById("amzius");
let prideti = document.getElementById("prideti");
let istirntiPirma = document.getElementById("istrinti-pirma");
let istrintiPaskutini = document.getElementById("istrinti-paskutini");
let lentele = document.getElementById("lentele");
let rowkiekis = document.getElementsByTagName("th");
prideti.addEventListener("click", function (e) {
  if (
    vardas.value == "" ||
    pavarde.value == "" ||
    amzius.value == "" ||
    amzius.value <= 0 ||
    amzius.value > 100
  ) {
    alert("Įvaskite duomenys");
  } else {
    e.preventDefault();
    let inputvardas = vardas.value;
    console.log(inputvardas);
    let newRow = lentele.insertRow(-1);
    let newCell0 = newRow.insertCell(0);
    let newCell1 = newRow.insertCell(1);
    let newCell2 = newRow.insertCell(2);
    let newText0 = document.createTextNode(vardas.value);
    let newText1 = document.createTextNode(pavarde.value);
    let newText2 = document.createTextNode(amzius.value);
    newCell0.appendChild(newText0);
    newCell1.appendChild(newText1);
    newCell2.appendChild(newText2);

    vardas.value = "";
    pavarde.value = "";
    amzius.value = "";
  }
});
istirntiPirma.addEventListener("click", function () {
  let rowCount = lentele.rows.length;
  if (rowCount > "1") {
    lentele.deleteRow(1);
    rowCount--;
  } else {
    alert("Daugiau nėra ko ištrinti...");
  }
});
istrintiPaskutini.addEventListener("click", function () {
  let rowCount = lentele.rows.length;
  if (rowCount > "1") {
    lentele.deleteRow(rowCount - 1);
    rowCount--;
  } else {
    alert("Daugiau nėra ko ištrinti...");
  }
});
