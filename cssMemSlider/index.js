alert('Добрый день. Не правильно понял задание и реализовал слайдер с использованием JS. прошу перепроверить работу в четверг')
const prevBtn = document.querySelector(".btn__prev"),
  nextBtn = document.querySelector(".btn__next"),
  slides = document.querySelectorAll(".slide"),
  slideImgs = document.querySelectorAll(".slide__img"),
  dots = document.querySelectorAll(".dot"),
  wrDots = document.querySelectorAll(".wrapper__dot"),
  sign = document.querySelector(".sign");

const caption = [
  "JavaScript is not difficult and understandable",
  "[1,2] + [3,4] = '1,23,4'",
  "If a web developer made a person ",
  "For success in JavaScript",
];

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
  dot4 = document.getElementById("dot4"),
  wrdot1 = document.getElementById("wr__dot1"),
  wrdot2 = document.getElementById("wr__dot2"),
  wrdot3 = document.getElementById("wr__dot3"),
  wrdot4 = document.getElementById("wr__dot4");

// hover dots
// on click dots
wrdot1.addEventListener("mousedown", function () {
  dot1.classList.add("click");
});
wrdot1.addEventListener("mouseup", function () {
  dot1.classList.remove("click");
});
wrdot2.addEventListener("mousedown", function () {
  dot2.classList.add("click");
});
wrdot2.addEventListener("mouseup", function () {
  dot2.classList.remove("click");
});
wrdot3.addEventListener("mousedown", function () {
  dot3.classList.add("click");
});
wrdot3.addEventListener("mouseup", function () {
  dot3.classList.remove("click");
});
wrdot4.addEventListener("mousedown", function () {
  dot4.classList.add("click");
});
wrdot4.addEventListener("mouseup", function () {
  dot4.classList.remove("click");
});

// hover dots
// add space around dot

wrdot1.addEventListener("mouseenter", function () {
  dot1.classList.add("hover");
});
wrdot1.addEventListener("mouseleave", function () {
  dot1.classList.remove("hover");
});
wrdot2.addEventListener("mouseenter", function () {
  dot2.classList.add("hover");
});
wrdot2.addEventListener("mouseleave", function () {
  dot2.classList.remove("hover");
});
wrdot3.addEventListener("mouseenter", function () {
  dot3.classList.add("hover");
});
wrdot3.addEventListener("mouseleave", function () {
  dot3.classList.remove("hover");
});
wrdot4.addEventListener("mouseenter", function () {
  dot4.classList.add("hover");
});
wrdot4.addEventListener("mouseleave", function () {
  dot4.classList.remove("hover");
});

//delay function

// Init caption

const initCaption = (n, caption) => {
  for (slide of slides) {
    slide.classList.add("deactive");
    slide.classList.remove("active");
  }
  sign.classList.remove("active");
  sign.classList.add("deactive");

  setTimeout(() => {
    slides[n].classList.add("active");
    sign.innerHTML = caption;
    sign.classList.remove("deactive");
  }, 5);
  setTimeout(() => {
    sign.classList.add("active");
  }, 50);

  slides[n].classList.remove("deactive");
  //sign.innerHTML = caption;
};

initCaption(sliderIndex, caption[sliderIndex]);

//click to next

nextBtn.addEventListener("click", () => {
  nextSlide();
});

function nextSlide() {
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
  dots[n].classList.add("active");
};

// init functions activ dote & init img

function currentActive(index) {
  initCaption(index, caption[index]);
  activeDote(index);
}

//click to dot

dots.forEach((item, indexDot) => {
  item.addEventListener("click", () => {
    sliderIndex = indexDot;
    currentActive(sliderIndex);
  });
});
//click to space around dot
wrDots.forEach((item, indexDot) => {
  item.addEventListener("click", () => {
    sliderIndex = indexDot;
    currentActive(sliderIndex);
  });
});
