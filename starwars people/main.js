import { people } from '../data/people.js'

const mainContent = document.querySelector('main')

const mainHeader = document.createElement('header')
mainHeader.className = 'mainHeader'
document.body.appendChild(mainHeader)

const maleButton = doument.createElement('button')
maleButtonButton.textContent = 'Male Characters'
mainHeader.appendChild(maleButton)

const femaleButton = doument.createElement('button')
femaleButtonButton.textContent = 'Female Characters'
mainHeader.appendChild(femaleButton)

const otherButton = doument.createElement('button')
otherButtonButton.textContent = 'Other Characters'
mainHeader.appendChild(otherButton)

const maleCharacters = people.filter(person => person.gender === 'male')

const femaleCharacters = people.filter(person => person.gender === 'female')

const otherCharacters = people.filter(person => {
    if (person.gender === 'n/a' || person.gender === 'none') {
        return person
    }
})

maleButton.addEventListener('click', (event) => {
    populateDOM(maleCharacters)
})

femaleButton.addEventListener('click', (event) => populateDOM(femaleCharacters))

otherButton.addEventListener('click', ()=> populateDOM(otherCharacters))

function populateDOM(characters) {
    removeChildren(mainContent)
    characters.forEach(element=> {
        const charFigure = document.createElement('figure')
        const charImg = document.createElement('img')
        let charNum = getLastNumber(element.url)
        charImg.src = 'https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg'
        charImg.addEventListener('error', () => charImg.hidden = true)
        const charCaption = document.createElement('figcaption') 
        charCaption.textContent = element.name

        charFigure.appendChild(charImg)
        charFigure. appendChild(charCaption)

        mainContent.appendChild(charFigure)
    })
}

/* let theURL = "https:// swapi.co/api/people/2/"
let theURL2 = "https:// swapi.co/api/people/14/" */

function getLastNumber(url) {
    let end = url.lastIndexOf('/')
    let start = end - 2 
    if (url.charAt(start) === '/') {
        start++
    }
    return url.slice(start, end)
}

function removeChildren(container) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

