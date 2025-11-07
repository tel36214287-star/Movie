// Dados dos distritos e imagens
const imagens = [
  "166911114.png","202401939.png","211280998.png","293232634.png",
  "392696179.png","566031016.png","585400009.png","612145833.png",
  "725442475.png","755832705.png","867605455.png","921322687.png"
];

const escolhas = [
  {distrito: 0, nomes: ["ERIKA ALEIXO","GUILHERME CARRARA"]},
  {distrito: 1, nomes: ["JUSSARA","DINHO"]},
  {distrito: 2, nomes: ["DOMITINA MILANI","CLEBINHO"]},
  {distrito: 3, nomes: ["Robinho","LETÍCIA"]},
  {distrito: 4, nomes: ["ELOISA","KATNISS"]},
  {distrito: 5, nomes: ["EDUARDO","PATRÍCIA"]},
  {distrito: 6, nomes: ["EU?"]}
];

const container = document.getElementById("star");
const nomeDisplay = document.getElementById("nomeDisplay");
const centralGif = document.getElementById("centralGif");

const center = 300;
const radius = 250;
const distritosImgs = [];

// Cria os distritos em círculo
imagens.forEach((imgName, i) => {
  const angle = (i / 12) * 2 * Math.PI;
  const x = center + radius * Math.sin(angle) - 50;
  const y = center - radius * Math.cos(angle) - 50;

  const img = document.createElement("img");
  img.src = `distritos/${imgName}`;
  img.alt = `Distrito ${i + 1}`;
  img.className = "distrito";
  img.style.position = "absolute";
  img.style.left = `${x}px`;
  img.style.top = `${y}px`;
  img.style.width = "100px";
  img.style.height = "100px";
  img.style.borderRadius = "50%";
  img.style.border = "2px solid #0f0";
  img.style.boxShadow = "0 0 20px #0f0";
  img.style.transition = "transform 0.3s, z-index 0.3s, border-color 0.3s";
  img.style.cursor = "pointer";

  container.appendChild(img);
  distritosImgs.push(img);
});

// Função para girar o gif e destacar o distrito
let index = 0;

function girarEscolha() {
  if(index >= escolhas.length) return;

  // Reset highlight
  distritosImgs.forEach(d => d.classList.remove("highlight"));

  const escolha = escolhas[index];
  const img = distritosImgs[escolha.distrito];
  img.classList.add("highlight");

  // Calcular ângulo para centralGif apontar para o distrito
  const dx = (parseFloat(img.style.left) + 50) - center;
  const dy = center - (parseFloat(img.style.top) + 50);
  const angleDeg = Math.atan2(dx, dy) * (180 / Math.PI);
  centralGif.style.transform = `translate(-50%, -50%) rotate(${angleDeg}deg)`;

  // Mostrar gif, esconder nome
  centralGif.style.display = "block";
  nomeDisplay.style.opacity = 0;

  setTimeout(() => {
    // Esconder gif, mostrar nome
    centralGif.style.display = "none";
    nomeDisplay.innerHTML = escolha.nomes.join("<br>");
    nomeDisplay.style.opacity = 1;

    index++;
    setTimeout(girarEscolha, 3000);
  }, 1500);
}

girarEscolha();
