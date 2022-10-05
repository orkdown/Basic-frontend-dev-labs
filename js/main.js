
document.addEventListener('DOMContentLoaded', (e) => {
    const burgerTriger = document.querySelector('.header__burger'),
          burgerMenu = document.querySelector('.header__burger-menu')

    const openBurger = (e) => {
        if (burgerMenu.style.left == '0px') return burgerMenu.style.left = '-120%'

        burgerMenu.style.left = '0px'
    }
    burgerTriger.addEventListener('click', openBurger)

})