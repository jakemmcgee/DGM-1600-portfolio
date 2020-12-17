import { confName } from "../data/nbaapi.js"
import { removeChildren } from "../utils/index.js"

const teamGrid = document.querySelector('.teamGrid')
const east = confName//.filter(teams => teams.confName === 'East')
	console.log(east)
const west = confName//.filter(teams => teams.confName === 'West')
	console.log(west)

eastButton.addEventListener('click', () => populateDom, 
    confSort()
)

westButton.addEventListener('click', () => populateDom,
    confSort()
)

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

async function getAPIData() {
    try {
        const response = await fetch(url)
        const data = await response.js()
        populatePokePage(data)
    } catch (error) {
        console.error(error)
    }
}

function loadPage(data) {
    getAPIData('https://api-nba-v1.p.rapidapi.com/teams/confName/east').then
    (async(data) => {
        for (const east of data.results) {
            await getAPIData(east.url).then((nbaapiData) => {
            populateTeamsDiv(nbaapiData)
            })
        }
    })
}

const eastButton = document.querySelector('.eastButton')

loadButton.addEventListener('click', () => {
    loadPage()
    loadButton.hidden = true
})

function populateTeamsDiv(singleTeam) {
    let teamScene = document.createElement('div')
    teamScene.className = 'scene'
    let teamFigure = document.createElement('div')
    teamFigure.className = 'figure'
    teamFigure.appendChild(populateTeamFront(singleTeam))
    teamScene.appendChild(teamCard)
    teamGrid.appendChild(teamScene)
}

function populateTeamFront(east) {
    let teamFront = document.createElement('div')
    teamFront.className = 'team__face team__face--front'
    let frontLabel = document.createElement('p')
    frontLabel.textContent = east.name
    let frontImage = document.createElement('img')
    frontImage.src = `../images/pokemon-img/images/${getImageFileName(nbaapi)}.png`
    teamFront.appendChild(frontImage)
    teamFront.appendChild(frontLabel)
    return teamFront
}

function getConfDetails(pokemonTypes) {
    const typesUrl = pokemonTypes[0].move.url
    return getAPIData(typesUrl).then((data) => data.type.name)
}

function getImageFileName(nbaapi) {
    if (nbaapi.id < 10) {
        return `00${nbaapi.id}`
    } else if (nbaapi.id > 9 && nbaapi.id < 100) {
        return `0${nbaapi.id}`
    } 
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