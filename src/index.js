const cards = [
	{ name: 'aquaman', img: 'aquaman.jpg' },
	{ name: 'batman', img: 'batman.jpg' },
	{ name: 'captain america', img: 'captain-america.jpg' },
	{ name: 'fantastic four', img: 'fantastic-four.jpg' },
	{ name: 'flash', img: 'flash.jpg' },
	{ name: 'green arrow', img: 'green-arrow.jpg' },
	{ name: 'green lantern', img: 'green-lantern.jpg' },
	{ name: 'ironman', img: 'ironman.jpg' },
	{ name: 'spiderman', img: 'spiderman.jpg' },
	{ name: 'superman', img: 'superman.jpg' },
	{ name: 'the avengers', img: 'the-avengers.jpg' },
	{ name: 'thor', img: 'thor.jpg' },
	{ name: 'aquaman', img: 'aquaman.jpg' },
	{ name: 'batman', img: 'batman.jpg' },
	{ name: 'captain america', img: 'captain-america.jpg' },
	{ name: 'fantastic four', img: 'fantastic-four.jpg' },
	{ name: 'flash', img: 'flash.jpg' },
	{ name: 'green arrow', img: 'green-arrow.jpg' },
	{ name: 'green lantern', img: 'green-lantern.jpg' },
	{ name: 'ironman', img: 'ironman.jpg' },
	{ name: 'spiderman', img: 'spiderman.jpg' },
	{ name: 'superman', img: 'superman.jpg' },
	{ name: 'the avengers', img: 'the-avengers.jpg' },
	{ name: 'thor', img: 'thor.jpg' }
];

const memoryGame = new MemoryGame(cards);
memoryGame.shuffleCards()
window.addEventListener('load', (event) => {
	let html = '';
	memoryGame.cards.forEach((pic) => {
		html += `
		<div class="card" data-card-name="${pic.name}">
		  <div class="back" name="${pic.img}"></div>
		  <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
		</div>
	  `;
	});

	// Add all the divs to the HTML
	document.querySelector('#memory-board').innerHTML = html;

	// Bind the click event of each element to a function
	document.querySelectorAll('.card').forEach((card) => {
		card.addEventListener('click', () => {
			// TODO: write some code here
			card.classList.add('turned')
			memoryGame.pickedCards.push(card)
			if (memoryGame.pickedCards.length <= 2) {

				if (memoryGame.checkIfPair(memoryGame.pickedCards[0].dataset.cardName, memoryGame.pickedCards[1].dataset.cardName)) {
					console.log(memoryGame.pairsGuessed)
					document.querySelector('#pairs-guessed').textContent++
					card.classList.toggle('blocked')
					memoryGame.pickedCards = []
				} else {
					setTimeout(() => {
						memoryGame.pickedCards.forEach((elem) => { elem.classList.toggle('turned') })
						memoryGame.pickedCards = []
					}, 700)

				}
				document.querySelector('#pairs-clicked').textContent++
			}
			console.log(`Card clicked: ${card}`)
			if (memoryGame.checkIfFinished()) {
				alert('you won')
			}
		});

	});
});


const link = document.querySelector('a')