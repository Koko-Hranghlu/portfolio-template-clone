const elements = document.querySelectorAll('.effect')

function scrollEffect() {
  elements.forEach(el => {
    let elPosition = el.getBoundingClientRect().top
    let viewHeight = window.innerHeight / 1.3
    if (elPosition < viewHeight) {
      el.classList.add('active')
    }
  })
}

window.addEventListener('scroll', scrollEffect)
