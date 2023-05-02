// const buttons = document.querySelectorAll('.btn')
// function handleClick(event) {
// 	console.log("target >", event.target)
// 	console.log("curtarget >", event.currentTarget)
// }

// buttons.forEach(button => {
// 	button.addEventListener('click', handleClick)
// });

const auto = {
	brand: 'BMV',
	drive() {
		console.log(this);
		return `Заведем наш ${this.brand}`;
	}
}

const motorBike = {
	brand: 'Suzuki',
}

// const autoDrive = auto.drive.bind(auto);
// const motorDrive = auto.drive.bind({brand: 'Korabli'});

// const header = document.querySelector('h2');

const $ = document.querySelector.bind(document);
const header = $('h2');
console.log(header)


// const list = document.querySelectorAll('ul > li:first-child');
// console.log(list)

// const element = document.querySelector('ol > li');
// console.log(element)

// const list2 = document.querySelectorAll('ul.stars-list > li')
// for(let item of list2) {
// 	if(item.matches('li.star')) console.log(item)
// }

// const li = document.querySelector('li.star');
// console.log(li.closest('.stars-list'));
// console.log(li.closest('.content-table'));
// console.log(li.closest('h1'));

let div = document.createElement('div');
div.className = "msg";
div.innerHTML = "Важная информация!";
document.body.append(div);

let list = document.querySelector('ul')
list.before('before');
list.after('after');

let li_1 = document.createElement('li');
li_1.innerHTML = "первый элемент";
list.prepend(li_1);
let li_2 = document.createElement('li');
li_2.innerHTML = "последний элемент";
list.append(li_2);

let div2 = document.querySelector('div');
div2.className = 'msg2';
div2.innerHTML = "Hello world";

document.body.append(div2);

const list_num = document.querySelector('ol');
list_num.before('Раньше');
list_num.after('После');

const li_3 = document.createElement('li')
li_3.innerHTML = 'first element';
list_num.prepend(li_3);
const li_4 = document.createElement('li')
li_4.innerHTML = 'Last element';
list_num.append(li_4);

// list.replaceWith(document.createElement('hr'),
// 'замена',
// document.createElement('br'));

function disemvowel(str) {
  let arr = [];
  let vowels = ['a', 'e', 'i', 'o', 'u', 'y', 'A', 'E', 'I', 'O', 'U', 'Y'];
   for(let i = 0; i < str.length; i++) {
    if (str[i] !== vowels.indexOf(str[i])) {
     console.log(arr.push(str[i]));
    }
   }
let stri = "This website is for losers LOL!"
    disemvowel(stri)




