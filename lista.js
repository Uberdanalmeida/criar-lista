function clique() {
  const textInput = document.getElementById("ttexto");

  if (textInput.value.trim() == "") {
    alert("Item inválido");
    return;
  }

  const product = document.createElement("li");

  product.innerHTML = textInput.value + '<span onclick="delet(this)">❌</span>';

  document.querySelector("ul").appendChild(product);

  textInput.value = "";
}

function delet(product) {
  product.parentElement.remove();
}
