const openMenu = document.getElementById('open');
const closeMenu = document.getElementById('close');
const article = document.querySelector('main');
const angle = document.querySelector('.angle')
const body = document.querySelector('body')


openMenu.addEventListener('click', () => {
    angle.classList.remove('close')
    article.classList.add('rotate')
    angle.classList.add('active')
    body.classList.add('overflow')
})

closeMenu.addEventListener('click', () => {
    article.classList.remove('rotate')
    angle.classList.remove('active')
    body.classList.remove('overflow')
    angle.classList.add('close')
})