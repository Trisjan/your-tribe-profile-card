// const expandButton = document.querySelector('header button')
// expandButton.addEventListener('click', expand)

// function expand () {
//   document.body.classList.toggle('expand')
// }

const businessCard = document.querySelector('.bussiness-card')

businessCard.addEventListener('click', () => {
  businessCard.classList.toggle('flip')
})