import { teams } from "../data/nbaapi.js"
import { removeChildren } from "../utils/index.js"

	console.log(teams[0].confName)
	const east = teams.filter(x => x['confName'] === 'East')
	const west = teams.filter(x => x.confName === 'West')
	console.log(east)
//import { removeChildren } from "../utils/index.js"
const gridContainer = document.getElementById('teamgrid')

function teamLoad(arrayData) {
	let teamBox = document.createElement('div')
	let teamFigure = document.createElement('figure')
	let teamImg = document.createElement('img')
	let teamCaption = document.createElement('figcaption')
	//to fill these above elements with data
	teamBox.className = 'teamBox'
	teamFigure.className = 'teamFig'
	teamImg.className = 'teamLogo'
	teamImg.src = arrayData.logo
	teamCaption.textContent = arrayData.confName
	//add to html
	gridContainer.appendChild(teamBox)
	teamBox.appendChild(teamFigure)
	teamFigure.appendChild(teamImg)
	teamFigure.appendChild(teamCaption)
}

function createTeamContainers(arrayData) {
	for (let index = 0; index < arrayData.length; index++) {
		teamLoad(arrayData[index])
		
	}
}

let eastButton = document.querySelector('#eastbutton')
let westButton = document.querySelector('#westbutton')

eastButton.addEventListener('click', () => {
	createTeamContainers(east)
})

westButton.addEventListener('click', () => {
	createTeamContainers(west)
})

// let eastButton = document.querySelector('#eastbutton').addEventListener('click', () => {
// 	createTeamContainers(east)
// 	console.log(east)
// })

// let eastButton = document.querySelector('#eastbutton')
// eastButton.onClick = function() {
// 	createTeamContainers(east)
// }

// 	//console.log(east)
// const west = teams.filter(team => team.confName === 'West')
// 	//console.log(west)

// eastButton.addEventListener('click', () => populateDom, 
//     confSort()
// )

// westButton.addEventListener('click', () => populateDom,
//     confSort()
// )

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

// function loadPage(data) {
//     getAPIData(nbaapiData).then
//     (async(data) => {
//         for (const east of data.results) {
//             await getAPIData(east.url).then((nbaapiData) => {
// 			populateTeamsDiv(nbaapiData)
// 			console.log("loadPage "+nbaapiData)
//             })
//         }
//     })
// }



