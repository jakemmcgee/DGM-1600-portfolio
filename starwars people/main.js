import { people } from '../data/people.js'

const mainContent = document.querySelector('main')

const mainheader = document.createElement('header')
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

maleButton.addEventListener('click', (event) => {
    const charFirgure = document.createElement('figure')
    const charImg = document.createElement('img')
    const charCaption = document.createElement('figcaption')

charFirgure.appendChild(charImg)
charFirgure.appendChild(charCaption)

mainContent.appendChild(charFirgure) 
})

