import './index.html'
import './styles/global.css'
const UI = await import ('./modules/UI.mjs')
const Home = await import ('./modules/home.mjs')

const mainContainer = document.getElementById('container')

const loadPage = () => {
  mainContainer.innerHTML = (`
    <div class="hero min-h-screen" style="background-image: url(https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80);">
    <div class="hero-overlay bg-opacity-60"></div>
      <div class="hero-content text-center text-neutral-content">
        <div class="max-w-md">
          <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
          <p class="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <button id="starter-button" class="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
    `)
  }
  
  window.onload = loadPage()
  
  const starterButton = document.getElementById('starter-button')
  
  starterButton.addEventListener('click', () => {
    UI.clearContent(mainContainer)
    Home.renderContent(mainContainer)
  })
