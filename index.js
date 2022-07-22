import './index.html'
import './styles/global.css'
const UI = await import ('./modules/UI.mjs')
const Home = await import ('./modules/home.mjs')

const starterButton = document.getElementById('starter-button')
const mainContainer = document.getElementById('container')

starterButton.addEventListener('click', () => {
  UI.clearContent(mainContainer)
  Home.renderContent(mainContainer)
})