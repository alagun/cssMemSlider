const prevBtn = document.getElementById('btn__prev'),
		nextBtn = document.getElementById('btn__next'),
		slides = document.querySelector('.slide'),
		dots = document.querySelectorAll('.dot'),
		sign = document.querySelector('.sign'),
		slideImg =document.querySelector('.slide__img');

const mem =[
		'1',
		'2',
		'3',
		'4'
]	
const caption =[
		'JavaScript is not difficult and understandable',
		'Go to work - to money',
		'If a web developer made a person ',
		'For success in JavaScript'
]
const delay = 3000;
let sliderIndex = 0;

		// Init caption
function initCaption(mem,caption) {
	slideImg.classList.add('active');
	sign.innerHTML = caption;
	slideImg.src = './img/img_' + (sliderIndex+1) + '.jpg';
}

initCaption(mem[sliderIndex],caption[sliderIndex])

//click to next

nextBtn.addEventListener('click',()=>{
	nextSlide()
})

function nextSlide() {
	slideImg.classList.remove('active');
	sliderIndex ++;
	if (sliderIndex > caption.length-1){
		sliderIndex = 0 ;
	}
	currentActive(sliderIndex);
}

//click to prev

prevBtn.addEventListener('click',()=>{
	prevSlide()
})

function prevSlide() {
	sliderIndex --;
	if (sliderIndex < 0){
		sliderIndex = caption.length - 1 ;
	}
	currentActive(sliderIndex);
}

const activeDote = n => {
	for(dot of dots){
		dot.classList.remove('active')
	}
	dots[sliderIndex].classList.add('active')
}

function currentActive(index){
	initCaption(mem[index],caption[index])
	activeDote(index)

}
dots.forEach((item,indexDot)=>{
	item.addEventListener('click',()=>{
		sliderIndex = indexDot;
		currentActive(sliderIndex);
	})
})
