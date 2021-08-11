const btnInserir = document.querySelector(".btnInserir");
let input = document.querySelector("input");
let arrValor = [];
let arrTotal;
let arrMedia;
let duplicidade;
btnInserir.addEventListener("click", function () {
  let $ul = document.querySelector(".ulValores");

  let valor = Number(input.value);

  duplicidade = arrValor.find((element) => element == valor);
  if (duplicidade || isNaN(valor) || valor > 100) {
    alert("valor duplicado ou invalido");
  } else {
    let li = document.createElement("li");
    li.append("numero: " + valor);
    $ul.appendChild(li);

    arrValor.push(valor);
    arrTotal = arrValor.reduce((a, b) => a + b);
    arrMedia = arrTotal / arrValor.length;
  }

  console.log(arrTotal);
  console.log(arrMedia);
  document.querySelector(".total").innerText = "Total: " + arrTotal;
  document.querySelector(".media").innerText = "media: " + arrMedia.toFixed(2);

  document.querySelector("input").value = "";
});
