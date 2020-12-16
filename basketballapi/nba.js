import { confName } from '../data/nbaapi.js'

const teamGrid = document.querySelector('#teamGrid')
const eastButton = document.querySelector('#eastButton')
const westButton = document.querySelector('#westButton')

eastButton.addEventListener('click', () => {
    colorSort()
})

westButton.addEventListener('click', () => {
    colorSort()
})


fetch("https://api-nba-v1.p.rapidapi.com/teams/confName/west", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "5dcc6a71admsh224769d2ea90948p11f213jsn32545ca82f68",
		"x-rapidapi-host": "api-nba-v1.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});

fetch("https://api-nba-v1.p.rapidapi.com/teams/confName/east", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "5dcc6a71admsh224769d2ea90948p11f213jsn32545ca82f68",
		"x-rapidapi-host": "api-nba-v1.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});