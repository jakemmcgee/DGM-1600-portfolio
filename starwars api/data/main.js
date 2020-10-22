import { films } from './data/films.js'
import { people } from './data/people.js'
// console.log(document.body.children)

const mainTitle1 = document.querySelector('mainTitle1')
mainTitle1.textContent = films[0].title 
const mainTitle2 = document.querySelector('mainTitle2')
mainTitle2.textContent = films[1].title 
const mainTitle3 = document.querySelector('mainTitle3')
mainTitle3.textContent = films[2].title 
const mainTitle4 = document.querySelector('mainTitle4')
mainTitle4.textContent = films[3].title 
const mainTitle5 = document.querySelector('mainTitle5')
mainTitle5.textContent = films[4].title 
const mainTitle6 = document.querySelector('mainTitle6')
mainTitle6.textContent = films[5].title

 /* films.forEachfilm => {
    console.log(film.title)
    mainTitle1.textContent = films.title
} */

const main = document.querySelector('main')

for (let i = 0; i < 7;; i++) {
    let figure = document.createElement('figure')
    let figImg = document.createElement('img')
    figImg.src = '' + (i + 1) + '.jpg'
    let figCaption = document.createElement('figcaption')
    figCaption.textContent = films[i].title

    figure.appendChild(figImg)
    figure.appendChild(figCaption)

    mainTitle6.appendChild(figure)
}