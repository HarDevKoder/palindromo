"use strict";

// Referencia de los elementos del DOM
const getEl = (id) => document.getElementById(id);
const cajaTexto = getEl("cajaTexto");
const btnCheck = getEl("btnCheck");
const cajaResultado = getEl("cajaResultado");

// Acciones al borrar contenido del input
cajaTexto.addEventListener("input", () => {
  if (cajaTexto.value === "") {
    document.location.reload();
    cajaTexto.focus();
  }
});

// Acciones al hacer click en el boton
btnCheck.addEventListener("click", () => {

  // acciones si el input está vacio
  if (cajaTexto.value === "") {
    cajaResultado.classList.add("error");
    cajaResultado.textContent = "No has ingresado Datos!";
  } else {
    // acciones si hay contenido e el input
    let palabra = cajaTexto.value.toLowerCase();
    let palabraInvertida = palabra.split("").reverse().join("");

    // Verificar si la palabra es o no un palindromo
    if (palabra === palabraInvertida) {
      cajaResultado.classList.remove("error");
      cajaResultado.classList.add("correcto");
      cajaResultado.textContent = "Es Palíndromo!";
    } else {
      cajaResultado.classList.remove("correcto");
      cajaResultado.classList.add("error");
      cajaResultado.textContent = "No es Palíndromo!";
    }

  }
});
