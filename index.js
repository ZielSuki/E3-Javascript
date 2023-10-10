const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];
const input = document.getElementById("pizza-number");
const resultado = document.querySelector(".resultado");
const div = document.createElement("div");
const img = document.createElement("img");
const pName = document.createElement("p");
const pPrice = document.createElement("p");

let pizzaObj;

document.addEventListener("DOMContentLoaded", () => {
  pizzaObj = JSON.parse(localStorage.getItem("pizzaObj"));
  if (pizzaObj != null) {
    showCard(pizzaObj);
  }
});

function isNumberValid(inputId) {
  let returnThis;
  pizzas.forEach(function (pizza) {
    if (inputId == pizza.id) {
      returnThis = true;
      return;
    } else if (inputId == "") {
      returnThis = "errorNoNumber";
      return;
    } else if (inputId > 5) {
      returnThis = "errorNoId";
      return;
    }
  });
  return returnThis;
}

function showCard(inputId) {
  pizzaObj = pizzas[parseInt(inputId) - 1];

  div.classList.add("cardPizza");
  img.setAttribute("src", pizzaObj.imagen);
  pName.innerHTML = `${pizzaObj.nombre}`;
  pPrice.innerHTML = `$ ${pizzaObj.precio}`;

  resultado.appendChild(div);
  div.appendChild(img);
  div.appendChild(pName);
  div.appendChild(pPrice);

  localStorage.setItem("pizzaObj", JSON.stringify(parseInt(inputId)));
}

function showError(stringToShow) {
  div.classList.add("errorStyle");
  div.innerHTML = `${stringToShow}`;
  resultado.appendChild(div);
  localStorage.clear();
}

function clearHTML() {
  div.innerHTML = "";
  div.classList.remove("errorStyle");
  div.classList.remove("cardPizza");
  div.remove();
  img.remove();
  pName.remove();
  pPrice.remove();
}

function send() {
  clearHTML();
  let valueInput = input.value;
  if (isNumberValid(valueInput) == true) {
    showCard(valueInput);
    return;
  } else if (isNumberValid(valueInput) == "errorNoNumber") {
    showError("Se debe ingresar un número");
    return;
  } else {
    showError("No hay pizza con ese id");
    return;
  }
}
