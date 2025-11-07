// Lista de imagens dos 12 distritos
const imagens = [
  "166911114.png",
  "202401939.png",
  "211280998.png",
  "293232634.png",
  "392696179.png",
  "566031016.png",
  "585400009.png",
  "612145833.png",
  "725442475.png",
  "755832705.png",
  "867605455.png",
  "921322687.png"
];

const container = document.getElementById("star");
const center = 300; // centro do container (px)
const radius = 250; // distância do centro até cada imagem (px)

// Adiciona o GIF central
const gif = document.createElement("img");
gif.src = "https://tel36214287-star.github.io/Movie/distritos/5Zeus.gif";
gif.alt = "Zeus GIF";
gif.style.position = "absolute";
gif.style.width = "120px";
gif.style.height = "120px";
gif.style.top = "50%";
gif.style.left = "50%";
gif.style.transform = "translate(-50%, -50%)";
gif.style.borderRadius = "50%";
gif.style.border = "3px solid #ff0";
gif.style.boxShadow = "0 0 30px #ff0";
gif.style.zIndex = "5";

container.appendChild(gif);

// Adiciona as 12 imagens ao redor
imagens.forEach((imgName, i) => {
  const angle = (i / 12) * 2 * Math.PI; // divide o círculo em 12 partes
  const x = center + radius * Math.sin(angle) - 50; // -50 para centralizar a imagem
  const y = center - radius * Math.cos(angle) - 50;

  const img = document.createElement("img");
  img.src = `https://tel36214287-star.github.io/Movie/distritos/${imgName}`;
  img.alt = `Distrito ${i + 1}`;
  img.style.position = "absolute";
  img.style.width = "100px";
  img.style.height = "100px";
  img.style.left = `${x}px`;
  img.style.top = `${y}px`;
  img.style.borderRadius = "50%";
  img.style.border = "2px solid #0f0";
  img.style.boxShadow = "0 0 20px #0f0";
  img.style.transition = "transform 0.3s, z-index 0.3s";
  img.style.cursor = "pointer";

  img.addEventListener("mouseover", () => {
    img.style.transform = "scale(1.3)";
    img.style.zIndex = "10";
  });
  img.addEventListener("mouseout", () => {
    img.style.transform = "scale(1)";
    img.style.zIndex = "1";
  });

  container.appendChild(img);
});
