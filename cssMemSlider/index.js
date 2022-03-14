const prevBtn = document.querySelector(".btn__prev"),
  nextBtn = document.querySelector(".btn__next"),
  slides = document.querySelector(".slide"),
  dots = document.querySelectorAll(".dot"),
  sign = document.querySelector(".sign"),
  slideImg = document.querySelector(".slide__img");

const mem = ["1", "2", "3", "4"];
const caption = [
  "JavaScript is not difficult and understandable",
  "Go to work - to money",
  "If a web developer made a person ",
  "For success in JavaScript",
];
const delay = 3000;
let sliderIndex = 0;

// hover button previous
prevBtn.addEventListener("mouseenter", function () {
  prevBtn.classList.add("hover__btn");
});
prevBtn.addEventListener("mouseleave", function () {
  prevBtn.classList.remove("hover__btn");
});
// hover button next
nextBtn.addEventListener("mouseenter", function () {
  nextBtn.classList.add("hover__btn");
});
nextBtn.addEventListener("mouseleave", function () {
  nextBtn.classList.remove("hover__btn");
});

// hover button previous
const dot1 = document.getElementById("dot1"),
  dot2 = document.getElementById("dot2"),
  dot3 = document.getElementById("dot3"),
  dot4 = document.getElementById("dot4");

// hover dots
dot1.addEventListener("mouseenter", function () {
  dot1.classList.add("hover");
});
dot1.addEventListener("mouseleave", function () {
  dot1.classList.remove("hover");
});
dot2.addEventListener("mouseenter", function () {
  dot2.classList.add("hover");
});
dot2.addEventListener("mouseleave", function () {
  dot2.classList.remove("hover");
});
dot3.addEventListener("mouseenter", function () {
  dot3.classList.add("hover");
});
dot3.addEventListener("mouseleave", function () {
  dot3.classList.remove("hover");
});
dot4.addEventListener("mouseenter", function () {
  dot4.classList.add("hover");
});
dot4.addEventListener("mouseleave", function () {
  dot4.classList.remove("hover");
});

// Init caption
function initCaption(mem, caption) {
  slideImg.classList.add("active");
  sign.innerHTML = caption;
  slideImg.src = "./img/img_" + (sliderIndex + 1) + ".jpg";
}

initCaption(mem[sliderIndex], caption[sliderIndex]);

//click to next

nextBtn.addEventListener("click", () => {
  nextSlide();
});

function nextSlide() {
  slideImg.classList.remove("active");
  sliderIndex++;
  if (sliderIndex > caption.length - 1) {
    sliderIndex = 0;
  }
  currentActive(sliderIndex);
}

//click to prev

prevBtn.addEventListener("click", () => {
  prevSlide();
});

function prevSlide() {
  sliderIndex--;
  if (sliderIndex < 0) {
    sliderIndex = caption.length - 1;
  }
  currentActive(sliderIndex);
}

// active dot
const activeDote = (n) => {
  for (dot of dots) {
    dot.classList.remove("active");
  }
  dots[sliderIndex].classList.add("active");
};

// init functions activ dote & init img

function currentActive(index) {
  initCaption(mem[index], caption[index]);
  activeDote(index);
}

//click to dot

dots.forEach((item, indexDot) => {
  item.addEventListener("click", () => {
    sliderIndex = indexDot;
    currentActive(sliderIndex);
  });
});
