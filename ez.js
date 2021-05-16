//KOMMENTERING
// // for linjekommentering
/*
for flere linjer
*/

//VARIABLER
//opprette variabel
var a = 1;
//endre variabel
a = 2;
//opprette konstant
const pi = 3.14;
//ulike typer
let tall = 0;
let string = 'abc';
let boolean = false;

//ARRAYER
//lage konstant array (lengden er fast)
const b = ['a', 'hei', 'c', 'def'];
const bLengde = b.length;
let henteUt = b[2];
//endre på verdi i array
b[0] = 'å';
//dynamisk array
let z = [5, '🌭', 'Geir'];
//legge til på slutten
z.push(8);
//fjerner siste
z.pop();
//fjerner første i arrayen
let u = z.shift();
//legge til på starten
z.unshift(true);
//finne plassen til et element (-1 om den ikke er i arrayen)
console.log('plassen til pølsen er', z.indexOf('🌭'));
//fjerning av elementer i en array (plassen man starter å fjerne, antall plasser man fjerner)
z.splice(1, 1);
//putte inn nytt element der man fjerner
z.splice(1, 1, 'Per', 69);

//CONSOLE
console.log('Heil');

//TESTER
if (5 == 5) {
	console.log('testen stemmer');
}

if (5 == '5') {
	console.log('dette er feil, du skal aldri få skrevet ut dette');
} else if (5 === '5') {
	console.log('ja hei på deg');
}

if (false) {
	console.log('fuck');
} else {
	console.log('jasså');
}

//LØKKER
//for-løkke
for (let i = 0; i < b.length; i++) {
	if (b[i].includes('e')) {
		console.log('denne inneholder bokstaven "e"');
	}
}

//while-løkke
while (a < 10) {
	console.log(a);
	a++;
}

//FUNKSJONER
//funksjon med paramtere
function aPlussb(a, b) {
	return a + b;
}
//funksjon uten paramtere
function øke_a_med_10() {
	a += 10;
}
//kjøre funksjon (men tallet "kastes")
aPlussb(1, 1);
//console.log svaret av funksjon
console.log(aPlussb(5, 7));
//binde til variabel
let et_tall = aPlussb(12, 42);
console.log(et_tall);

//RANDOM
//random mellom 0-1 (uten 1)
Math.random();
//tilfeldig tall mellom 0-8 (uten 8)
Math.random() * 8;
//runder ned
Math.floor(2);

//tilfeldig i array
console.log(b[Math.floor(Math.random() * b.length)]);

//INTERAGERE MED HTML
//hente fra html
const knapp1El = document.getElementById('knapp1');
const knapp2El = document.getElementById('knapp2');
//sette funksjon på html element
knapp1El.addEventListener('click', function () {
	console.log('du har klikket på knapp 1');
});
knapp2El.addEventListener('mouseover', øke_a_med_10);

//INTERVALLER
//timeout /vente
setTimeout(function () {
	console.log(b);
}, 1000);
//interval
let t = setInterval(function () {
	console.log(a);
}, 300);

//avslutte intervall
clearInterval(t);

//PROMPT
let svar = prompt('velkommen');
console.log(svar);
