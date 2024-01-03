const imgs = document.getElementById('imgs');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

const img = document.querySelectorAll('#imgs img');

let index = 0;
let interval = setInterval(run, 2000);

function run() {
	index++;
	changeImage();
}

function changeImage() {
	if(index > img.length - 1) {
		index = 0;
	} else if (index < 0) {
		index = img.length -1;
	}
	
	imgs.style.transform = `translateX(${-index * 700}px)`;
}

function resetInterval() {
	clearInterval(interval);
	interval = setInterval(run, 2000);
}

rightBtn.addEventListener('click', () => {
	index++;
	changeImage();
	resetInterval();
});

leftBtn.addEventListener('click', () => {
	index--;
	changeImage();
	resetInterval();
});
const hbtn = document.getElementById('home_btn')
hbtn.addEventListener('click', () => {
	var home = document.getElementById("homie");
	home.scrollIntoView({behavior:'smooth'});
});
const fbtn = document.getElementById('faq_btn')
fbtn.addEventListener('click', () => {
	var btn = document.getElementById("faqs");
	btn.scrollIntoView({behavior:'smooth'});
});
const bbtn = document.getElementById('book_btn')
bbtn.addEventListener('click', () => {
	var book = document.getElementById("bookbtn");
	book.scrollIntoView({behavior:'smooth'});
});
const honda = document.getElementById('honda_btn')
honda.addEventListener('click', () => {
	var hnda = document.getElementById("h_btn");
	hnda.scrollIntoView({behavior:'smooth'});
});
const toyota = document.getElementById('toyota_btn')
toyota.addEventListener('click', () => {
	var tyta = document.getElementById("t_btn");
	tyta.scrollIntoView({behavior:'smooth'});
});
const  mg = document.getElementById('mg_btn')
mg.addEventListener('click', () => {
	var mg = document.getElementById("m_btn");
	mg.scrollIntoView({behavior:'smooth'});
});
const ford = document.getElementById('ford_btn')
ford.addEventListener('click', () => {
	var frd = document.getElementById("f_btn");
	frd.scrollIntoView({behavior:'smooth'});
});
const bm = document.getElementById('bmw_btn')
bm.addEventListener('click', () => {
	var bm = document.getElementById("b_btn");
	bm.scrollIntoView({behavior:'smooth'});
});
const anow = document.getElementById('amazenow')
anow.addEventListener('click', () => {
	var anow = document.getElementById("bookbtn");
	anow.scrollIntoView({behavior:'smooth'});
});
const jnow = document.getElementById('jazznow')
jnow.addEventListener('click', () => {
	var jnow = document.getElementById("bookbtn");
	jnow.scrollIntoView({behavior:'smooth'});
});
const cnow = document.getElementById('citynow')
cnow.addEventListener('click', () => {
	var cnow = document.getElementById("bookbtn");
	cnow.scrollIntoView({behavior:'smooth'});
});
const vnow = document.getElementById('vnow')
anow.addEventListener('click', () => {
	var vnow = document.getElementById("bookbtn");
	vnow.scrollIntoView({behavior:'smooth'});
});
const avnow = document.getElementById('avnow')
avnow.addEventListener('click', () => {
	var avnow = document.getElementById("bookbtn");
	avnow.scrollIntoView({behavior:'smooth'});
});
const hnow = document.getElementById('hnow')
cnow.addEventListener('click', () => {
	var hnow = document.getElementById("bookbtn");
	hnow.scrollIntoView({behavior:'smooth'});
});
const finow = document.getElementById('fiestanow')
finow.addEventListener('click', () => {
	var finow = document.getElementById("bookbtn");
	finow.scrollIntoView({behavior:'smooth'});
});
const xnow = document.getElementById('explorernow')
xnow.addEventListener('click', () => {
	var xnow = document.getElementById("bookbtn");
	xnow.scrollIntoView({behavior:'smooth'});
});
const mnow = document.getElementById('mgnow')
mnow.addEventListener('click', () => {
	var mnow = document.getElementById("bookbtn");
	mnow.scrollIntoView({behavior:'smooth'});
});
const copnow = document.getElementById('conow')
copnow.addEventListener('click', () => {
	var copnow = document.getElementById("bookbtn");
	copnow.scrollIntoView({behavior:'smooth'});
});
const xmow = document.getElementById('xmnow')
xmow.addEventListener('click', () => {
	var xmow = document.getElementById("bookbtn");
	xmow.scrollIntoView({behavior:'smooth'});
});
const st = document.getElementById('shut')
st.addEventListener('click', () => {
	var st = document.getElementById("t_btn");
	st.scrollIntoView({behavior:'smooth'});
});
const cnts = document.getElementById('contacts')
cnts.addEventListener('click', () => {
	var cnts = document.getElementById("cont");
	cnts.scrollIntoView({behavior:'smooth'});
});