"use strict";

const pesquisarCachorro = async (raca) => {
  const url      = `https://dog.ceo/api/breed/${raca}/images`;
  const response = await fetch(url);
  const data     = await response.json();

  return data;
};

const criarImg = (image) => {
  const img = document.createElement("img");
  img.src   = image;

  return img;
};

const carregarImagens = async () => {
  const container = document.getElementById("container-img");
  const raca      = document.getElementById("raca").value;
  const imgs      = await pesquisarCachorro(raca);
  const tagImgs   = imgs.message.map(criarImg);

  container.replaceChildren(...tagImgs);
};

document.getElementById("pesquisar").addEventListener("click", carregarImagens);