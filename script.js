let images = ["img1.jpg", "img2.jpg", "img3.jpg"];
let index = 0;

function startLove() {
  document.getElementById("startScreen").style.display = "none";
  document.getElementById("main").classList.remove("hidden");

  document.getElementById("music").play();

  createHearts();
}

// Slider
function next() {
  index = (index + 1) % images.length;
  document.getElementById("slide").src = images[index];
}

function prev() {
  index = (index - 1 + images.length) % images.length;
  document.getElementById("slide").src = images[index];
}

// Surprise
function showSurprise() {
  document.getElementById("surpriseBox").classList.toggle("hidden");
}

// Falling hearts
function createHearts() {
  setInterval(() => {
    let heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (3 + Math.random() * 3) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 6000);

  }, 300);
}
