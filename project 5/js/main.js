const slideTrack = document.querySelector(".slide-track");
const slides = document.querySelectorAll(".class-card");
const leftArrow = document.querySelector(".arrow.left");
const rightArrow = document.querySelector(".arrow.right");

let currentIndex = 0;

rightArrow.addEventListener("click", () => {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
    slideTrack.style.transform = translateX(-${currentIndex * 320}px);
  } else {
    currentIndex = 0;
    slideTrack.style.transform = translateX(0);
  }
});

leftArrow.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    slideTrack.style.transform = translateX(-${currentIndex * 320}px);
  } else {
    currentIndex = slides.length - 1;
    slideTrack.style.transform = translateX(-${currentIndex * 320}px);
  }
});