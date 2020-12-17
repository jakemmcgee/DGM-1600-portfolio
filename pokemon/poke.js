//import { images } from pokemon-img 

async function getAPIData() {
    try {
        const response = await fetch(url)
        const data = await response.json()
        populatePokePage(data)
    } catch (error) {
        console.error(error)
    }
}

function loadPage(data) {
    getAPIData('https://pokeapi.co/api/v2/pokemon?limit=25').then
    (async(data) => {
        for (const pokemon of data.results) {
            await getAPIData(pokemon.url).then((pokeData) => {
            populatePokeCard(pokeData)
            })
        }
    })
}

const pokeGrid = document.querySelector('.pokemonGrid')
const loadButton = document.querySelector('button')

loadButton.addEventListener('click', () => {
    loadPage()
    loadButton.hidden = true
})

function populatePokeCard(singlePokemon) {
    let pokeScene = document.createElement('div')
    pokeScene.className = 'scene'
    let pokeCard = document.createElement('div')
    pokeCard.className = 'card'
    pokeCard.addEventListener( 'click', function() {
        pokeCard.classList.toggle('is-flipped')
      })
    pokeCard.appendChild(populateCardFront(singlePokemon))
    pokeCard.appendChild(populateCardBack(singlePokemon))
    pokeScene.appendChild(pokeCard)
    pokeGrid.appendChild(pokeScene)
}

function populateCardFront(pokemon) {
    let pokeFront = document.createElement('div')
    pokeFront.className = 'card__face card__face--front'
    let frontLabel = document.createElement('p')
    frontLabel.textContent = pokemon.name
    let frontImage = document.createElement('img')
    frontImage.src = `../images/pokemon-img/images/${getImageFileName(pokemon)}.png`
    pokeFront.appendChild(frontImage)
    pokeFront.appendChild(frontLabel)
    return pokeFront
}

function populateCardBack(pokemon) {
    let pokeBack = document.createElement('div')
    pokeBack.className = 'card__face card__face--back'
    let backlabel = document.createElement('p')
    backlabel.textContent = `${pokemon.types.length} moves`
    backlabel.addEventListener('click', () => getTypesDetails(pokemonTypes))
    pokeBack.appendChild(backlabel)
    return pokeBack
}

function getTypesDetails(pokemonTypes) {
    const typesUrl = pokemonTypes[0].move.url
    return getAPIData(typesUrl).then((data) => data.type.name)
}

function getImageFileName(pokemon) {
    if (pokemon.id < 10) {
        return `00${pokemon.id}`
    } else if (pokemon.id > 9 && pokemon.id < 100) {
        return `0${pokemon.id}`
    } 
}