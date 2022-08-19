const first = document.querySelectorAll('#contenedor div')[0];
const second = document.querySelectorAll('#contenedor div')[1];
const third = document.querySelectorAll('#contenedor div')[2];
const score = document.getElementById('score');
const lose = document.getElementById('loses');
const percentil = document.getElementById('percentil');
const reset = document.getElementById('boton');
const total = document.getElementById('total');
let x = 0;
let y = 0;
var rules = ()=>{
	first.name = 'lose';
	second.name = 'lose';
	third.name = 'lose';

	let secretValue = Math.floor(Math.random()*3) + 1;
	if (secretValue === 1) first.name = 'win';
	if (secretValue === 2) second.name = 'win';
	if (secretValue === 3) third.name = 'win';
};

let f = true;
var start = ()=>{
	first.addEventListener('click', ()=>{ 
		if ((second.name === 'lose')) card(second); else card(third);
		
		if (!f){
			if (first.name === 'win') Win(1); else Win(0);
			return f = true;
		}
		f = false;
	});
	second.addEventListener('click', ()=>{	
		if ((first.name === 'lose')) card(first); else card(third);

		if (!f){
			if (second.name === 'win') Win(1); else Win(0);
			return f = true;
		}
		f = false;
	});
	third.addEventListener('click', ()=>{
		if ((first.name === 'lose')) card(first); else card(second);

		if (!f){
			if (third.name === 'win') Win(1); else Win(0);
			return f = true;
		}
		f = false;
	});
};
start();
rules()
var Win = (a)=>{
	var create = document.createElement('div');
	var cover = document.createElement('div');
	x++;
	create.setAttribute('id', 'create');
	cover.setAttribute('id', 'cover');	

	document.body.appendChild(create);
	document.body.appendChild(cover);
	if (a) {create.innerText = 'You WIN!'; score.innerText++; y++};
	if (!a) {create.innerText = 'You LOSE!'; lose.innerText++};

	first.innerText = 1;
	second.innerText = 2;
	third.innerText = 3;
	percentil.innerText = ((y/x)*100).toFixed(0) + '%';
	total.innerText = x;
	rules();
	
	create.addEventListener('click', ()=> {create.remove();cover.remove()})
}

var card = (b)=>{
	b.innerText = 'X';
	
}
reset.addEventListener('click', ()=>{
	score.innerText = 0;
	lose.innerText = 0;
	percentil.innerText = 0 + '%';
	total.innerText = 0;
})


// document.body.addEventListener('', event =>{
// 	console.log(event)
// 	console.log(event.pageX,event.pageY)
// }, {once: false})
