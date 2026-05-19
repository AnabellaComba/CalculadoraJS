let pantalla = document.getElementById("resultado");

function agregar(valor) {
  pantalla.value += valor;
}

function calcular() {
  try {
    pantalla.value = eval(pantalla.value);
  } catch (e) {
    pantalla.value = "Error";
  }
}

function limpiar() {
  pantalla.value = "";
}
