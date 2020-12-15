import { teams } from '../data/'

const teamGrid = document.querySelector('#teamGrid')
const teamButton = document.querySelector('#teamButton')

teamButton.addEventListener('click', () => {
    colorSort()
})

