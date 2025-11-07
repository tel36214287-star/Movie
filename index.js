<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>District Star</title>
  <style>
    body {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background-color: #111;
    }
    .star-container {
      position: relative;
      width: 600px;
      height: 600px;
    }
    .star-container img {
      position: absolute;
      width: 80px;
      height: 80px;
      transform-origin: center;
      border-radius: 10px;
      box-shadow: 0 0 10px #0f0;
    }
  </style>
</head>
<body>
  <div class="star-container" id="starContainer"></div>

  <script>
    const starContainer = document.getElementById('starContainer');

    // Lista com os nomes dos 12 arquivos PNG
    const images = [
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

    const centerX = 300; // centro do container
    const centerY = 300;
    const radius = 200; // distância do centro

    images.forEach((imgName, index) => {
      const img = document.createElement('img');
      img.src = `https://tel36214287-star.github.io/Movie/distritos/${imgName}`;

      // Calcula a posição na estrela (360°/12 = 30° de diferença)
      const angle = (index * 360 / images.length) * Math.PI / 180;
      img.style.left = `${centerX + radius * Math.cos(angle) - 40}px`; // 40 = half width da imagem
      img.style.top = `${centerY + radius * Math.sin(angle) - 40}px`;

      starContainer.appendChild(img);
    });
  </script>
</body>
</html>
