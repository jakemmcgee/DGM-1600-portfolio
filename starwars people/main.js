import { people } from '../data/people.js'

const mainContent = document.querySelector('main')

const mainHeader = document.createElement('header')
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
console.log(maleCharacters)

const femaleCharacters = people.filter(person => person.gender === 'female')
console.log(femaleCharacters)

const otherCharacters = people.filter(person => person.gender === 'other')
console.log(otherCharacters)

maleButton.addEventListener('click', (event) => {
    

charFirgure.appendChild(charImg)
charFirgure.appendChild(charCaption)

mainContent.appendChild(charFirgure) 
})

function populateDOM(charcters) {
    maleCharacters.forEach(element=> {
        const charFigure = document.createElement('figure')
        const charImg = document.createElement('img')
        let charNum = getLastNumber(element.url)
        charImg.src = "#"
        charImg.addEventListener('error', () => charImg.hidden = true) 
        const charCaption = document.createElement('figcaption')

        charFigure.appendChild(charImg)

    }
}

//let theURL = "#"
//let the URL2 = "#"

function getLastNumber(url) {
    let end = url.lastIndexOf('/')
    let start = end - 2
    if (url.charAt(start) == '/') {
        start++
    }
    return url.slice(start, end)
}

//console.log(getLastNumber(theURL2))

