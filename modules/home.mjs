export { renderContent }

const renderContent = (container) => {
  // Factory function
  function createCard(title, level, url) {
    return {
      title,
      level,
      image: url,
    }
  }

  const cards = []

  cards.push(createCard("Introducción", "Para principiantes", "https://raw.githubusercontent.com/kaitakami/Web3-Aprende-Blockchain/main/github.png"))
  cards.push(createCard("¿Qué es blockchain?", "Nivel intermedio", "https://raw.githubusercontent.com/kaitakami/Web3-Aprende-Blockchain/main/bitcoin-paper.png"))
  cards.push(createCard("Lecturas recomendadas", "Nivel avanzado", "https://images.unsplash.com/photo-1526378800651-c32d170fe6f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"))



  //cards is an array with 3 objects (cards)
  // Now we create a function to render each card in the HTML



  cards.forEach((card, i) => {
    container.innerHTML += (`
    <div class="card max-h-56 w-96 bg-base-100 shadow-xl image-full">
      <figure><img src=${card.image} alt="Card Image" /></figure>
      <div class="card-body">
        <h2 class="card-title">${card.title}</h2>
        <p>${card.level}</p>
        <div class="card-actions justify-end">
          <button id="card-${i}-btn" class="btn btn-primary">Leer ahora</button>
        </div>
      </div>
    </div>
    `)


  })

  container.innerHTML = (`
  <div class="flex flex-col h-screen place-content-center pb-9">
    <div class="flex mx-auto my-20 font-extrabold text-transparent text-3xl md:text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-center">Aprende sobre blockchain</div>
    <div class="flex flex-wrap gap-10 justify-center mx-auto">
      ${container.innerHTML}
    </div>
  </div>
  `)

}
