const logo = document.querySelector('.logo')
const burgerLogo = document.querySelector('.hamburger-logo')
const burgerBtn = document.querySelector('.hamburger-icon')
const burger = document.querySelector('.hamburger-wrapper')
const burgerBg = document.querySelector('.hamburger-bg')
const burgerLinks = document.querySelectorAll('.hamburger-link')


const openMainPage = () => {
    document.location = ('../main/index.html')
}

logo.addEventListener('click', openMainPage)

const donateButton = document.querySelector('.footer-btn')

const openDonatePage = () => {
    document.location = ('../donate/index.html')
}

donateButton.addEventListener('click', openDonatePage)


const openBurger = () => {
    burgerBtn.classList.toggle('opened')
    burger.classList.toggle('active')
    burgerBg.classList.toggle('active')
}

const closeBurger = () => {
    burgerBtn.classList.remove('opened')
    burger.classList.remove('active')
    burgerBg.classList.remove('active')
}

burgerBtn.addEventListener('click', openBurger)
burgerLinks.forEach(el => el.addEventListener('click', closeBurger))
burgerBg.addEventListener('click', closeBurger)
burgerLogo.addEventListener('click', openMainPage)

/* Amount panel */

const dots = document.querySelectorAll('.range-dot-wrap')
const dollarSign = document.querySelectorAll('.dollar')
const prices = document.querySelectorAll('.price')
const borderOne = document.querySelectorAll('.range-dot')
const borderTwo = document.querySelectorAll('.range-dot-border')
const inputNumber = document.querySelector('.input-price')

const changeHoveredElement = (event) => {
    if (event.target.childNodes[1].classList.contains('active')) {
        return false
    } else {
        borderOne.forEach(el => el.classList.remove('active'))
        borderTwo.forEach(el => el.classList.remove('active'))
        prices.forEach(el => el.classList.remove('hovered'))
        dollarSign.forEach(el => el.classList.remove('hovered'))
        dollarSign.forEach(el => el.setAttribute('src', '../assets/icons/dollar.svg'))
        dots.forEach(el => el.classList.remove('active'))
    
        let target = event.target
    
        target.childNodes[1].classList.add('active')
        target.childNodes[3].classList.add('active')
        target.classList.add('active')

        for (let i = 0; i < dots.length; i++) {
            if (dots[i].classList.contains('active')) {
                prices[i].classList.add('hovered')
                dollarSign[i].setAttribute('src', '../assets/icons/dollar-active.svg')
                inputNumber.value = prices[i].innerHTML.substring(67)
            }
        }
    }
}

const checkAmount = () => {
    if (inputNumber.value === '5000') {

        borderOne.forEach(el => el.classList.remove('active'))
        borderTwo.forEach(el => el.classList.remove('active'))
        prices.forEach(el => el.classList.remove('hovered'))
        dollarSign.forEach(el => el.classList.remove('hovered'))
        dollarSign.forEach(el => el.setAttribute('src', '../assets/icons/dollar.svg'))
        dots.forEach(el => el.classList.remove('active'))

        borderOne[0].classList.add('active')
        borderTwo[0].classList.add('active')
        prices[0].classList.add('hovered')
        dollarSign[0].classList.add('hovered')
        dollarSign[0].setAttribute('src', '../assets/icons/dollar-active.svg')
        dots[0].classList.add('active')

    } else if (inputNumber.value === '2000') {

        borderOne.forEach(el => el.classList.remove('active'))
        borderTwo.forEach(el => el.classList.remove('active'))
        prices.forEach(el => el.classList.remove('hovered'))
        dollarSign.forEach(el => el.classList.remove('hovered'))
        dollarSign.forEach(el => el.setAttribute('src', '../assets/icons/dollar.svg'))
        dots.forEach(el => el.classList.remove('active'))

        borderOne[1].classList.add('active')
        borderTwo[1].classList.add('active')
        prices[1].classList.add('hovered')
        dollarSign[1].classList.add('hovered')
        dollarSign[1].setAttribute('src', '../assets/icons/dollar-active.svg')
        dots[1].classList.add('active')

    } else if (inputNumber.value === '1000') {

        borderOne.forEach(el => el.classList.remove('active'))
        borderTwo.forEach(el => el.classList.remove('active'))
        prices.forEach(el => el.classList.remove('hovered'))
        dollarSign.forEach(el => el.classList.remove('hovered'))
        dollarSign.forEach(el => el.setAttribute('src', '../assets/icons/dollar.svg'))
        dots.forEach(el => el.classList.remove('active'))

        borderOne[2].classList.add('active')
        borderTwo[2].classList.add('active')
        prices[2].classList.add('hovered')
        dollarSign[2].classList.add('hovered')
        dollarSign[2].setAttribute('src', '../assets/icons/dollar-active.svg')
        dots[2].classList.add('active')

    } else if (inputNumber.value === '500') {

        borderOne.forEach(el => el.classList.remove('active'))
        borderTwo.forEach(el => el.classList.remove('active'))
        prices.forEach(el => el.classList.remove('hovered'))
        dollarSign.forEach(el => el.classList.remove('hovered'))
        dollarSign.forEach(el => el.setAttribute('src', '../assets/icons/dollar.svg'))
        dots.forEach(el => el.classList.remove('active'))

        borderOne[3].classList.add('active')
        borderTwo[3].classList.add('active')
        prices[3].classList.add('hovered')
        dollarSign[3].classList.add('hovered')
        dollarSign[3].setAttribute('src', '../assets/icons/dollar-active.svg')
        dots[3].classList.add('active')

    } else if (inputNumber.value === '250') {

        borderOne.forEach(el => el.classList.remove('active'))
        borderTwo.forEach(el => el.classList.remove('active'))
        prices.forEach(el => el.classList.remove('hovered'))
        dollarSign.forEach(el => el.classList.remove('hovered'))
        dollarSign.forEach(el => el.setAttribute('src', '../assets/icons/dollar.svg'))
        dots.forEach(el => el.classList.remove('active'))

        borderOne[4].classList.add('active')
        borderTwo[4].classList.add('active')
        prices[4].classList.add('hovered')
        dollarSign[4].classList.add('hovered')
        dollarSign[4].setAttribute('src', '../assets/icons/dollar-active.svg')
        dots[4].classList.add('active')

    } else if (inputNumber.value === '100') {

        borderOne.forEach(el => el.classList.remove('active'))
        borderTwo.forEach(el => el.classList.remove('active'))
        prices.forEach(el => el.classList.remove('hovered'))
        dollarSign.forEach(el => el.classList.remove('hovered'))
        dollarSign.forEach(el => el.setAttribute('src', '../assets/icons/dollar.svg'))
        dots.forEach(el => el.classList.remove('active'))

        borderOne[5].classList.add('active')
        borderTwo[5].classList.add('active')
        prices[5].classList.add('hovered')
        dollarSign[5].classList.add('hovered')
        dollarSign[5].setAttribute('src', '../assets/icons/dollar-active.svg')
        dots[5].classList.add('active')

    } else if (inputNumber.value === '50') {

        borderOne.forEach(el => el.classList.remove('active'))
        borderTwo.forEach(el => el.classList.remove('active'))
        prices.forEach(el => el.classList.remove('hovered'))
        dollarSign.forEach(el => el.classList.remove('hovered'))
        dollarSign.forEach(el => el.setAttribute('src', '../assets/icons/dollar.svg'))
        dots.forEach(el => el.classList.remove('active'))

        borderOne[6].classList.add('active')
        borderTwo[6].classList.add('active')
        prices[6].classList.add('hovered')
        dollarSign[6].classList.add('hovered')
        dollarSign[6].setAttribute('src', '../assets/icons/dollar-active.svg')
        dots[6].classList.add('active')

    } else if (inputNumber.value === '25') {

        borderOne.forEach(el => el.classList.remove('active'))
        borderTwo.forEach(el => el.classList.remove('active'))
        prices.forEach(el => el.classList.remove('hovered'))
        dollarSign.forEach(el => el.classList.remove('hovered'))
        dollarSign.forEach(el => el.setAttribute('src', '../assets/icons/dollar.svg'))
        dots.forEach(el => el.classList.remove('active'))

        borderOne[7].classList.add('active')
        borderTwo[7].classList.add('active')
        prices[7].classList.add('hovered')
        dollarSign[7].classList.add('hovered')
        dollarSign[7].setAttribute('src', '../assets/icons/dollar-active.svg')
        dots[7].classList.add('active')

    } else {

        borderOne.forEach(el => el.classList.remove('active'))
        borderTwo.forEach(el => el.classList.remove('active'))
        prices.forEach(el => el.classList.remove('hovered'))
        dollarSign.forEach(el => el.classList.remove('hovered'))
        dollarSign.forEach(el => el.setAttribute('src', '../assets/icons/dollar.svg'))
        dots.forEach(el => el.classList.remove('active'))

    }
}

dots.forEach(el => el.addEventListener('click', changeHoveredElement))
inputNumber.addEventListener('input', checkAmount)