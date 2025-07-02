const pastelImg = document.getElementById("pastel-img");
  const pasteles = ["img/pastel1.jpg", "img/pastel2.jpg", "img/pastel3.jpg"]; // tus imágenes
  let index = 0;

  pastelImg.addEventListener("click", () => {
    pastelImg.classList.add("rotate-slide");
    index = (index + 1) % pasteles.length;
    setTimeout(() => {
      pastelImg.src = pasteles[index];
      pastelImg.classList.remove("rotate-slide");
    }, 400); // cambia en mitad de la animación
  });