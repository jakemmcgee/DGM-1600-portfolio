import { confName } from "../data/nbaapi.js"
import { removeChildren } from "../utils"

const teamGrid = document.querySelector('#teamGrid')
const eastButton = document.querySelector('#eastButton')
const westButton = document.querySelector('#westButton')
const east = confName//.filter(teams => teams.confName === 'East')
	console.log(east)
const west = 

eastButton.addEventListener('click', () => populateDom, 
    colorSort()
)

westButton.addEventListener('click', () => {
    colorSort()
})

function populateTeamsDiv(allTeams) {
	removeChildren(teamGrid)
	allTeams.forEach( confName => {
		let teamDiv = document.createElement('div')
		let teamFigure = document.createElement('figure')
		let teamImg = document.createElement('img')
		let figCaption = document.createElement('figcaption')
		let conferenceIcon = document.createElement('i')
		if (team.conference === 'E') conferenceIcon.classname = 'East'
		if (team.conference === 'W') conferenceIcon.classname = 'West'
		teamImg.src = nbaapi.logo
		figCaption.textContent = nbaapi.confName

		figCaption.appendChild(conferenceIcon)
        teamFigure.appendChild(teamImg)
        teamFigure.appendChild(figCaption)
        teamDiv.appendChild(teamFigure)
        teamDiv.appendChild(progressBars(confName))
        teamGrid.appendChild(teamDiv)
	})

}

function conferenceSort() {
    populateTeamsDiv(getSimplifiedTemas(confName).sort((a, b) => {
        return a.eastButton - b.westButton
    }))
}

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