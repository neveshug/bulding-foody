const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for (let card of cards){
    card.addEventListener("click", ()=>{
        const recipeId = card.getAttribute('id')
        modalOverlay.classList.add('active')
        modalOverlay.querySelector('img').src = `assets/${recipeId}.png`
        modalOverlay.querySelector('h5').textContent = card.querySelector('h5').textContent
        modalOverlay.querySelector('p').textContent = card.querySelector('p').textContent
    })
}

document.querySelector('.close-modal').addEventListener("click", ()=>{
    modalOverlay.classList.remove('active')
})
