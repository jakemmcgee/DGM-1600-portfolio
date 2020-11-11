import { starships } from '../data/starships.js'
import { removeChildren, getLastNumber } from '../utilities/index.js'

const nav = document.querySelector('.nav')
const navlist = document.querySelector('.navlist')
const shipView = document.querySelector('.main')

function populateNav(starships) {
    starships.forEach(seatship => {
        let anchorWrap = document.createElement('a')
        anchorWrap.href = '#'
        anchorWrap.addEventListener('click', event =>{
            var shipname = event.target.textContent
            const foundShip = starships.find(ship = ship.name === shipName)
            populateShipView(foundShip)
        })

        let listItem = document.createElement('li')
        listItem.textContent = starship.name 

        anchorWrap.appendChild(listItem)
        navlist.appendChild(anchorWrap)
        nav.appendChild(navList)
    })
}

function populateShipView(shipData) {

}

populateNav(starships)