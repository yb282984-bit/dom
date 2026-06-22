// test
// alert("Cecu est un test")
// déclararion
const plus = document.getElementsByClassName("fa-plus-circle");
const moins = document.querySelectorAll(".fa-minus-circle");
const poubelles = document.querySelectorAll(".fa-trash-alt");
const cartes = document.querySelectorAll(".card");

const coeurs = document.querySelectorAll(".fa-heart");
console.log(coeurs);
// fonctionnalités

// pour le bouton plus
for (let i = 0; i < plus.length; i++) {
  plus[i].addEventListener("click", function () {
    console.log(plus[i].nextElementSibling);
    plus[i].nextElementSibling.textContent++;
    prixTotal()
  });
}
// pour le bouton moins
for (let i = 0; i < moins.length; i++) {
  moins[i].addEventListener("click", function () {
    if (moins[i].previousElementSibling.textContent > 1)
      moins[i].previousElementSibling.textContent--;
      prixTotal()
  });
}

//pour supprimer toute la card : poubelle
for (let i = 0; i < poubelles.length; i++) {
  poubelles[i].addEventListener("click", function () {
    cartes[i].remove();
    prixTotal()
  });
}

//le coeur : like dislike

for (let i = 0; i < coeurs.length; i++) {
  coeurs[i].addEventListener("click", function () {
    if (coeurs[i].style.color === "red") {
      coeurs[i].style.color = "black";
    } else {
      coeurs[i].style.color = "red";
    }
  });
}

function prixTotal() {
  // mettre dans un tableau : prixUnit tout les prix unitaires des article
  const prixUnit = document.querySelectorAll(".unit-price");
  // les quantité des produits
  const qt = document.querySelectorAll(".quantity");
  let calculTotal = 0;
  for (let i = 0; i < prixUnit.length; i++) {
    calculTotal = calculTotal + parseFloat(prixUnit[i].textContent) * qt[i].textContent;
  }
  console.log(calculTotal);
  document.getElementById("total").textContent = calculTotal + " $"
}
