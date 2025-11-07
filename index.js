// Lista de imagens dos distritos
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

// Criar container se não existir
let container = document.getElementById("star");
if (!container) {
  container = document.createElement("div");
  container.id = "star";
  container.style.position = "relative";
  container.style.width = "600px";
  container.style.height = "600px";
  document.body.appendChild(container);
}

// GIF central
const centerGif = document.createElement("img");
centerGif.src = "distritos/5Zeus.gif"; // GIF central
centerGif.alt = "Zeus GIF";
centerGif.style.position = "absolute";
centerGif.style.width = "120px";
centerGif.style.height = "120px";
centerGif.style.top = "50%";
centerGif.style.left = "50%";
centerGif.style.transform = "translate(-50%, -50%)";
centerGif.style.borderRadius = "50%";
centerGif.style.border = "3px solid #ff0";
centerGif.style.boxShadow = "0 0 30px #ff0";
centerGif.style.zIndex = "5";

container.appendChild(centerGif);

// Centro e raio do círculo
const center = 300;
const radius = 250;

// Criar imagens dos distritos ao redor do círculo
imagens.forEach((imgName, i) => {
  const angle = (i / 12) * 2 * Math.PI;
  const x = center + radius * Math.sin(angle) - 50;
  const y = center - radius * Math.cos(angle) - 50;

  const img = document.createElement("img");
  img.src = `distritos/${imgName}`;
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

  // efeito hover
  img.addEventListener("mouseenter", () => {
    img.style.transform = "scale(1.3)";
    img.style.zIndex = "10";
  });
  img.addEventListener("mouseleave", () => {
    img.style.transform = "scale(1)";
    img.style.zIndex = "1";
  });

  container.appendChild(img);
});
