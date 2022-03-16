"use strict";

const pesquisarRacas = async () => {
  const url = "https://dog.ceo/api/breeds/list/all"; // endpoint.
  const response = await fetch(url); // recebe a request.
  const data = await response.json(); // retorna apenas
  // o json;
  // console.log(data.message); // message é uma propriedade do objeto data;
  // console.log(data.status); // status é uma propriedade do objeto data;
  return Object.keys(data.message);
};

const pesquisarCachorro = async (raca) => {
  const url = `https://dog.ceo/api/breed/${raca}/images`;
  const response = await fetch(url);
  const data = await response.json();

  console.log(response);

  return data;
};

const criarImg = (image) => {
  const img = document.createElement("img");
  img.src = image;

  return img;
};

// const criarDivImg = (elementImage) => {
//   const container = document.getElementById("container-img");
//   const div = document.createElement("div");
//   container.appendChild(div);
//   console.log(container);
// };

// criarDivImg();

const carregarImagens = async () => {
  const container = document.getElementById("container-img");
  const raca = document.getElementById("raca").value;
  const imgs = await pesquisarCachorro(raca);
  const tagImgs = imgs.message.map(criarImg);

  container.replaceChildren(...tagImgs);
};

const carregarRacas = async () => {
  const lista = document.getElementById("lista-racas");
  const arrRacas = await pesquisarRacas();
  lista.innerHTML = `
    <option>
      ${arrRacas.join("</option><option>")}
    </option>
  `;
  // console.log(arrRacas.join("<========>"));
};

const ativarDesativarModal = () => {
  const modal = document.getElementById("modal");
  modal.classList.toggle("active");
};

document
  .getElementById("abrir-modal")
  .addEventListener("click", ativarDesativarModal);
document
  .getElementById("btn-exit")
  .addEventListener("click", ativarDesativarModal);
document
  .getElementById("modal")
  .addEventListener("click", ativarDesativarModal);
document.getElementById("pesquisar").addEventListener("click", carregarImagens);

carregarRacas();
