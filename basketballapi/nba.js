import { teams } from "../data/nbaapi.js"
	console.log(teams)
//import { removeChildren } from "../utils/index.js"

// const teamGrid = document.querySelector('.teamGrid')
const east = teams.filter(team => {
	console.log(team)
	team.confName === 'East'
})
	console.log(east)
const west = teams.filter(team => team.confName === 'West')
	console.log(west)

eastButton.addEventListener('click', () => populateDom, 
    confSort()
)

westButton.addEventListener('click', () => populateDom,
    confSort()
)

// function populateTeamsDiv(allTeams) {
	//removeChildren(teamGrid)
	//allTeams.forEach( confName => {
		//let teamDiv = document.createElement('div')
		//let teamFigure = document.createElement('figure')
		//let teamImg = document.createElement('img')
		//let figCaption = document.createElement('figcaption')
		//let conferenceIcon = document.createElement('i')
		//if (team.conference === 'E') conferenceIcon.classname = 'East'
		//if (team.conference === 'W') conferenceIcon.classname = 'West'
		//teamImg.src = nbaapi.logo
		//figCaption.textContent = nbaapi.confName

		//figCaption.appendChild(conferenceIcon)
        //teamFigure.appendChild(teamImg)
        //teamFigure.appendChild(figCaption)
        //teamDiv.appendChild(teamFigure)
        //teamDiv.appendChild(progressBars(confName))
        //teamGrid.appendChild(teamDiv)
	//})

//}

function loadPage(data) {
    getAPIData(nbaapiData).then
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

