const doors = document.querySelectorAll(".door");
const main = document.getElementById('main');

const print = data => console.log(data);

const wines = document.querySelector('#win-score');
const lose = document.querySelector('#lose-score');
const total = document.querySelector('#total-score');
const percentage = document.querySelector('#percentage');
const reset = document.querySelector('#reset-button');
let w = 1;
let l = 1;
let score = 1;
const win = a => func =>{
	const create = document.createElement('div');
	create.setAttribute('id', 'create');

	main.appendChild(create);
	if (a) {
		create.innerText = 'You WIN!'; 
		wines.innerText = `Win: ${w++}`;
	}
	if (!a) {
		create.innerText = 'You LOSE!'; 
		lose.innerText = `Lose: ${l++}`;
	}
	total.innerText = `Total: ${score++}`;
	percentage.innerText = `Percentage: ${(((w-1)/(score-1))*100).toFixed(0)}%` ;
	func()
	create.addEventListener('click', () => create.remove())
}
f = false;
const rules = () => {
	for (let i = 0; i < doors.length; i++) {
		doors[i].name = 'lose';
		doors[i].innerText = i + 1;
	}
	doors[Math.floor(Math.random()*3)].name ='win';
}
const restart = () => {
	w = 1;
	l = 1;
	score = 1;
	wines.innerText = `Win: 0`;
	lose.innerText = `Lose: 0`;
	total.innerText = `Total: 0`;
	percentage.innerText = `Percentage: 0%`;
}
const start = () => {
	rules()
	doors.forEach( e => {
		e.addEventListener('click', event => {
			if (e === doors[0]) doors[1].name === 'lose' ? doors[1].innerText = 'X' : doors[2].innerText = 'X';
			if (e === doors[1]) doors[0].name === 'lose' ? doors[0].innerText = 'X' : doors[2].innerText = 'X';
			if (e === doors[2]) doors[0].name === 'lose' ? doors[0].innerText = 'X' : doors[1].innerText = 'X';
			
			if (f) {
				e.name === 'win' ? win(1)(rules) : win(0)(rules);
				return f = false;
				print(l,w,score)
			}
			f = true;
		})
	})
}
start()

reset.addEventListener('click', () => restart())

