import animals from './animals.js'
import reviews from './reviews.js'

const logo = document.querySelector('.logo')
const burgerLogo = document.querySelector('.hamburger-logo')
const feedButton = document.querySelector('.feed-a-friend')
const donateButton = document.querySelector('.footer-btn')
const burgerBtn = document.querySelector('.hamburger-icon')
const burger = document.querySelector('.hamburger-wrapper')
const burgerBg = document.querySelector('.hamburger-bg')
const burgerLinks = document.querySelectorAll('.hamburger-link')

const openMainPage = () => {
    document.location = ('../main/index.html')
}

const openDonatePage = () => {
    document.location = ('../donate/index.html')
}

const openBurger = () => {
    burgerBtn.classList.toggle('opened')
    burger.classList.toggle('active')
    burgerBg.classList.toggle('active')
    popupBg.classList.remove('visible')
    popup.classList.remove('visible')
}

const closeBurger = () => {
    burgerBtn.classList.remove('opened')
    burger.classList.remove('active')
    burgerBg.classList.remove('active')
    popupBg.classList.remove('visible')
    popup.classList.remove('visible')

}

logo.addEventListener('click', openMainPage)
burgerLogo.addEventListener('click', openMainPage)
feedButton.addEventListener('click', openDonatePage)
donateButton.addEventListener('click', openDonatePage)
burgerBtn.addEventListener('click', openBurger)
burgerLinks.forEach(el => el.addEventListener('click', closeBurger))
burgerBg.addEventListener('click', closeBurger)

/* slider */


const slider = document.querySelectorAll('.slider-wrapper')

const leftBtn = document.querySelector('.left')
const rightBtn = document.querySelector('.right')

const leftBtn1000px = document.querySelector('.left-1000')
const rightBtn1000px = document.querySelector('.right-1000')

const moveRight = () => {
    slider.forEach(el => el.classList.add('to-left'))
}

const moveLeft = () => {
    slider.forEach(el => el.classList.add('to-right'))
}

const deleteTransitions = () => {
    slider.forEach(el => el.classList.remove('to-left'))
    slider.forEach(el => el.classList.remove('to-right'))
}

leftBtn.addEventListener('click', moveRight)
rightBtn.addEventListener('click', moveLeft)
leftBtn1000px.addEventListener('click', moveRight)
rightBtn1000px.addEventListener('click', moveLeft)
slider.forEach(el => el.addEventListener('animationend', deleteTransitions))

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}


const createNewSlide = () => {
    let animalsCopy = animals.slice(0)
    const newArr = []
    while(newArr.length < 6) {
        let randomNum = getRandomInt(0, animalsCopy.length)
        newArr.push(animalsCopy[randomNum])
        animalsCopy.splice(randomNum, 1)
    }
    return newArr
}

rightBtn.addEventListener('click', createNewSlide)
leftBtn.addEventListener('click', createNewSlide)
rightBtn1000px.addEventListener('click', createNewSlide)
leftBtn1000px.addEventListener('click', createNewSlide)


/* slider element */

const images = document.querySelectorAll('.slider-image')
const sliderTitle = document.querySelectorAll('.slider-title')
const sliderSubtitle = document.querySelectorAll('.slider-subtitle')
const hoverText = document.querySelectorAll('.hover-text-animal')
const locations = document.querySelectorAll('.hover-text-location')
const foodIcons = document.querySelectorAll('.slider-sign-logo')


const changeLeftSlide = () => {
    let arr = createNewSlide()
    images[0].setAttribute('src', `${arr[0].path}`)
    images[1].setAttribute('src', `${arr[1].path}`)
    images[2].setAttribute('src', `${arr[2].path}`)
    images[3].setAttribute('src', `${arr[3].path}`)
    images[4].setAttribute('src', `${arr[4].path}`)
    images[5].setAttribute('src', `${arr[5].path}`)
    sliderTitle[0].innerHTML = `${arr[0].name}`
    sliderTitle[1].innerHTML = `${arr[1].name}`
    sliderTitle[2].innerHTML = `${arr[2].name}`
    sliderTitle[3].innerHTML = `${arr[3].name}`
    sliderTitle[4].innerHTML = `${arr[4].name}`
    sliderTitle[5].innerHTML = `${arr[5].name}`
    sliderSubtitle[0].innerHTML = `${arr[0].country}`
    sliderSubtitle[1].innerHTML = `${arr[1].country}`
    sliderSubtitle[2].innerHTML = `${arr[2].country}`
    sliderSubtitle[3].innerHTML = `${arr[3].country}`
    sliderSubtitle[4].innerHTML = `${arr[4].country}`
    sliderSubtitle[5].innerHTML = `${arr[5].country}`
    hoverText[0].innerHTML = `${arr[0].name}`
    hoverText[1].innerHTML = `${arr[1].name}`
    hoverText[2].innerHTML = `${arr[2].name}`
    hoverText[3].innerHTML = `${arr[3].name}`
    hoverText[4].innerHTML = `${arr[4].name}`
    hoverText[5].innerHTML = `${arr[5].name}`
    locations[0].innerHTML = `${arr[0].country}`
    locations[1].innerHTML = `${arr[1].country}`
    locations[2].innerHTML = `${arr[2].country}`
    locations[3].innerHTML = `${arr[3].country}`
    locations[4].innerHTML = `${arr[4].country}`
    locations[5].innerHTML = `${arr[5].country}`
    foodIcons[0].setAttribute('src', `${arr[0].foodIcon}`)
    foodIcons[1].setAttribute('src', `${arr[1].foodIcon}`)
    foodIcons[2].setAttribute('src', `${arr[2].foodIcon}`)
    foodIcons[3].setAttribute('src', `${arr[3].foodIcon}`)
    foodIcons[4].setAttribute('src', `${arr[4].foodIcon}`)
    foodIcons[5].setAttribute('src', `${arr[5].foodIcon}`)
}

const changeRightSlide = () => {
    let arr = createNewSlide()
    images[12].setAttribute('src', `${arr[0].path}`)
    images[13].setAttribute('src', `${arr[1].path}`)
    images[14].setAttribute('src', `${arr[2].path}`)
    images[15].setAttribute('src', `${arr[3].path}`)
    images[16].setAttribute('src', `${arr[4].path}`)
    images[17].setAttribute('src', `${arr[5].path}`)
    sliderTitle[12].innerHTML = `${arr[0].name}`
    sliderTitle[13].innerHTML = `${arr[1].name}`
    sliderTitle[14].innerHTML = `${arr[2].name}`
    sliderTitle[15].innerHTML = `${arr[3].name}`
    sliderTitle[16].innerHTML = `${arr[4].name}`
    sliderTitle[17].innerHTML = `${arr[5].name}`
    sliderSubtitle[12].innerHTML = `${arr[0].country}`
    sliderSubtitle[13].innerHTML = `${arr[1].country}`
    sliderSubtitle[14].innerHTML = `${arr[2].country}`
    sliderSubtitle[15].innerHTML = `${arr[3].country}`
    sliderSubtitle[16].innerHTML = `${arr[4].country}`
    sliderSubtitle[17].innerHTML = `${arr[5].country}`
    hoverText[12].innerHTML = `${arr[0].name}`
    hoverText[13].innerHTML = `${arr[1].name}`
    hoverText[14].innerHTML = `${arr[2].name}`
    hoverText[15].innerHTML = `${arr[3].name}`
    hoverText[16].innerHTML = `${arr[4].name}`
    hoverText[17].innerHTML = `${arr[5].name}`
    locations[12].innerHTML = `${arr[0].country}`
    locations[13].innerHTML = `${arr[1].country}`
    locations[14].innerHTML = `${arr[2].country}`
    locations[15].innerHTML = `${arr[3].country}`
    locations[16].innerHTML = `${arr[4].country}`
    locations[17].innerHTML = `${arr[5].country}`
    foodIcons[12].setAttribute('src', `${arr[0].foodIcon}`)
    foodIcons[13].setAttribute('src', `${arr[1].foodIcon}`)
    foodIcons[14].setAttribute('src', `${arr[2].foodIcon}`)
    foodIcons[15].setAttribute('src', `${arr[3].foodIcon}`)
    foodIcons[16].setAttribute('src', `${arr[4].foodIcon}`)
    foodIcons[17].setAttribute('src', `${arr[5].foodIcon}`)
}

changeLeftSlide()
changeRightSlide()

const moveSlideToRight = () => {
    images[6].setAttribute('src', `${images[12].getAttribute('src')}`)
    images[7].setAttribute('src', `${images[13].getAttribute('src')}`)
    images[8].setAttribute('src', `${images[14].getAttribute('src')}`)
    images[9].setAttribute('src', `${images[15].getAttribute('src')}`)
    images[10].setAttribute('src', `${images[16].getAttribute('src')}`)
    images[11].setAttribute('src', `${images[17].getAttribute('src')}`)
    sliderTitle[6].innerHTML = `${sliderTitle[12].innerHTML}`
    sliderTitle[7].innerHTML = `${sliderTitle[13].innerHTML}`
    sliderTitle[8].innerHTML = `${sliderTitle[14].innerHTML}`
    sliderTitle[9].innerHTML = `${sliderTitle[15].innerHTML}`
    sliderTitle[10].innerHTML = `${sliderTitle[16].innerHTML}`
    sliderTitle[11].innerHTML = `${sliderTitle[17].innerHTML}`
    sliderSubtitle[6].innerHTML = `${sliderSubtitle[12].innerHTML}`
    sliderSubtitle[7].innerHTML = `${sliderSubtitle[13].innerHTML}`
    sliderSubtitle[8].innerHTML = `${sliderSubtitle[14].innerHTML}`
    sliderSubtitle[9].innerHTML = `${sliderSubtitle[15].innerHTML}`
    sliderSubtitle[10].innerHTML = `${sliderSubtitle[16].innerHTML}`
    sliderSubtitle[11].innerHTML = `${sliderSubtitle[17].innerHTML}`
    hoverText[6].innerHTML = `${sliderTitle[12].innerHTML}`
    hoverText[7].innerHTML = `${sliderTitle[13].innerHTML}`
    hoverText[8].innerHTML = `${sliderTitle[14].innerHTML}`
    hoverText[9].innerHTML = `${sliderTitle[15].innerHTML}`
    hoverText[10].innerHTML = `${sliderTitle[16].innerHTML}`
    hoverText[11].innerHTML = `${sliderTitle[17].innerHTML}`
    locations[6].innerHTML = `${sliderSubtitle[12].innerHTML}`
    locations[7].innerHTML = `${sliderSubtitle[13].innerHTML}`
    locations[8].innerHTML = `${sliderSubtitle[14].innerHTML}`
    locations[9].innerHTML = `${sliderSubtitle[15].innerHTML}`
    locations[10].innerHTML = `${sliderSubtitle[16].innerHTML}`
    locations[11].innerHTML = `${sliderSubtitle[17].innerHTML}`
    foodIcons[6].setAttribute('src', `${foodIcons[12].getAttribute('src')}`)
    foodIcons[7].setAttribute('src', `${foodIcons[13].getAttribute('src')}`)
    foodIcons[8].setAttribute('src', `${foodIcons[14].getAttribute('src')}`)
    foodIcons[9].setAttribute('src', `${foodIcons[15].getAttribute('src')}`)
    foodIcons[10].setAttribute('src', `${foodIcons[16].getAttribute('src')}`)
    foodIcons[11].setAttribute('src', `${foodIcons[17].getAttribute('src')}`)
}

const moveSlideToLeft = () => {
    images[6].setAttribute('src', `${images[0].getAttribute('src')}`)
    images[7].setAttribute('src', `${images[1].getAttribute('src')}`)
    images[8].setAttribute('src', `${images[2].getAttribute('src')}`)
    images[9].setAttribute('src', `${images[3].getAttribute('src')}`)
    images[10].setAttribute('src', `${images[4].getAttribute('src')}`)
    images[11].setAttribute('src', `${images[5].getAttribute('src')}`)
    sliderTitle[6].innerHTML = `${sliderTitle[0].innerHTML}`
    sliderTitle[7].innerHTML = `${sliderTitle[1].innerHTML}`
    sliderTitle[8].innerHTML = `${sliderTitle[2].innerHTML}`
    sliderTitle[9].innerHTML = `${sliderTitle[3].innerHTML}`
    sliderTitle[10].innerHTML = `${sliderTitle[4].innerHTML}`
    sliderTitle[11].innerHTML = `${sliderTitle[5].innerHTML}`
    sliderSubtitle[6].innerHTML = `${sliderSubtitle[0].innerHTML}`
    sliderSubtitle[7].innerHTML = `${sliderSubtitle[1].innerHTML}`
    sliderSubtitle[8].innerHTML = `${sliderSubtitle[2].innerHTML}`
    sliderSubtitle[9].innerHTML = `${sliderSubtitle[3].innerHTML}`
    sliderSubtitle[10].innerHTML = `${sliderSubtitle[4].innerHTML}`
    sliderSubtitle[11].innerHTML = `${sliderSubtitle[5].innerHTML}`
    hoverText[6].innerHTML = `${sliderTitle[0].innerHTML}`
    hoverText[7].innerHTML = `${sliderTitle[1].innerHTML}`
    hoverText[8].innerHTML = `${sliderTitle[2].innerHTML}`
    hoverText[9].innerHTML = `${sliderTitle[3].innerHTML}`
    hoverText[10].innerHTML = `${sliderTitle[4].innerHTML}`
    hoverText[11].innerHTML = `${sliderTitle[5].innerHTML}`
    locations[6].innerHTML = `${sliderSubtitle[0].innerHTML}`
    locations[7].innerHTML = `${sliderSubtitle[1].innerHTML}`
    locations[8].innerHTML = `${sliderSubtitle[2].innerHTML}`
    locations[9].innerHTML = `${sliderSubtitle[3].innerHTML}`
    locations[10].innerHTML = `${sliderSubtitle[4].innerHTML}`
    locations[11].innerHTML = `${sliderSubtitle[5].innerHTML}`
    foodIcons[6].setAttribute('src', `${foodIcons[0].getAttribute('src')}`)
    foodIcons[7].setAttribute('src', `${foodIcons[1].getAttribute('src')}`)
    foodIcons[8].setAttribute('src', `${foodIcons[2].getAttribute('src')}`)
    foodIcons[9].setAttribute('src', `${foodIcons[3].getAttribute('src')}`)
    foodIcons[10].setAttribute('src', `${foodIcons[4].getAttribute('src')}`)
    foodIcons[11].setAttribute('src', `${foodIcons[5].getAttribute('src')}`)
}

const offButtons = () => {
    rightBtn.setAttribute('disabled', '')
    leftBtn.setAttribute('disabled', '')
    rightBtn1000px.setAttribute('disabled', '')
    leftBtn1000px.setAttribute('disabled', '')
}

const onButtons = () => {
    rightBtn.removeAttribute('disabled')
    leftBtn.removeAttribute('disabled')
    rightBtn1000px.removeAttribute('disabled', '')
    leftBtn1000px.removeAttribute('disabled', '')
}

rightBtn.addEventListener('click', () => setTimeout(moveSlideToRight, 400))
leftBtn.addEventListener('click', () => setTimeout(moveSlideToLeft, 400))
rightBtn1000px.addEventListener('click', () => setTimeout(moveSlideToRight, 400))
leftBtn1000px.addEventListener('click', () => setTimeout(moveSlideToLeft, 400))
slider.forEach(el => el.addEventListener('animationend', changeLeftSlide))
slider.forEach(el => el.addEventListener('animationend', changeRightSlide))
rightBtn.addEventListener('click', offButtons)
leftBtn.addEventListener('click', offButtons)
rightBtn1000px.addEventListener('click', offButtons)
leftBtn1000px.addEventListener('click', offButtons)
rightBtn.addEventListener('click', () => setTimeout(onButtons, 500))
leftBtn.addEventListener('click', () => setTimeout(onButtons, 500))
rightBtn1000px.addEventListener('click', () => setTimeout(onButtons, 500))
leftBtn1000px.addEventListener('click', () => setTimeout(onButtons, 500))


/* testimonials */

const reviewsWrapper = document.querySelector('.review-wrapper')
const avatars = document.querySelectorAll('.avatar')
const names = document.querySelectorAll('.name')
const time = document.querySelectorAll('.time')
const reviewText = document.querySelectorAll('.review-text')
const inputProgress = document.querySelector('.progress')
let newValue

const setReviews = () => {
    for (let i = 0; i < avatars.length; i++) {
        avatars[i].setAttribute('src', `${reviews[i].avatar}`)
        names[i].innerHTML = reviews[i].name
        time[i].innerHTML = reviews[i].day
        reviewText[i].innerHTML = reviews[i].text
    }
}

setReviews()

const rangeValue = () => {
    let currentValue = inputProgress.getAttribute('value')
    newValue = inputProgress.value
    inputProgress.setAttribute('value', `${newValue}`)

    if (window.screen.width > 1599) {
        if (newValue === '0') {
            reviewsWrapper.style.marginLeft = '0'
        } else if (newValue === '1') {
            reviewsWrapper.style.marginLeft = '-298px'
        } else if (newValue === '2') {
            reviewsWrapper.style.marginLeft = '-596px'
        } else if (newValue === '3') {
            reviewsWrapper.style.marginLeft = '-894px'
        } else if (newValue === '4') {
            reviewsWrapper.style.marginLeft = '-1192px'
        } else if (newValue === '5') {
            reviewsWrapper.style.marginLeft = '-1490px'
        } else if (newValue === '6') {
            reviewsWrapper.style.marginLeft = '-1788px'
        } else if (newValue === '7') {
            reviewsWrapper.style.marginLeft = '-2086px'
        }
    } else if (window.screen.width > 999) {
        if (newValue === '0') {
            reviewsWrapper.style.marginLeft = '0'
        } else if (newValue === '1') {
            reviewsWrapper.style.marginLeft = '-326px'
        } else if (newValue === '2') {
            reviewsWrapper.style.marginLeft = '-652px'
        } else if (newValue === '3') {
            reviewsWrapper.style.marginLeft = '-978px'
        } else if (newValue === '4') {
            reviewsWrapper.style.marginLeft = '-1304px'
        } else if (newValue === '5') {
            reviewsWrapper.style.marginLeft = '-1630px'
        } else if (newValue === '6') {
            reviewsWrapper.style.marginLeft = '-1956px'
        } else if (newValue === '7') {
            reviewsWrapper.style.marginLeft = '-2282px'
        }
    } else {
        reviewsWrapper.style.marginLeft = '0'
    }

}

window.addEventListener('resize', rangeValue)


inputProgress.addEventListener('input', rangeValue)



/* popup */

const closePopupBtn = document.querySelector('.close-popup')
const popupBg = document.querySelector('.popup-bg')
const popup = document.querySelector('.popup')
const popupAvatar = document.querySelector('.popup-avatar')
const popupTime = document.querySelector('.popup-time')
const popupName = document.querySelector('.popup-name')
const popupText = document.querySelector('.popup-review-text')
const popupBgTransparent = document.querySelector('.popup-bg-transparent')
const testimonials = document.querySelector('.review-wrapper')
const reviews640px = document.querySelectorAll('.review')


const closePopup = () => {
    popupBg.classList.remove('visible')
    popup.classList.remove('visible')
}

popupBgTransparent.addEventListener('click', closePopup)
closePopupBtn.addEventListener('click', closePopup)
popupBg.addEventListener('click', closePopup)


const showPopup = (event) => {
    if (window.screen.width < 1000) {
        popupBg.classList.add('visible')
        popup.classList.add('visible')
        let el = event.target
        if (el.classList.contains('mobile-first')) {
            popupAvatar.setAttribute('src', `${reviews640px[0].childNodes[1].getAttribute('src')}`)
            popupName.innerHTML = `${reviews640px[0].childNodes[3].childNodes[1].innerHTML}`
            popupTime.innerHTML = `${reviews640px[0].childNodes[3].childNodes[3].childNodes[5].innerHTML}`
            popupText.innerHTML = `${reviews640px[0].childNodes[5].innerHTML}`
        } else if (el.classList.contains('mobile-second')) {
            popupAvatar.setAttribute('src', `${reviews640px[1].childNodes[1].getAttribute('src')}`)
            popupName.innerHTML = `${reviews640px[1].childNodes[3].childNodes[1].innerHTML}`
            popupTime.innerHTML = `${reviews640px[1].childNodes[3].childNodes[3].childNodes[5].innerHTML}`
            popupText.innerHTML = `${reviews640px[1].childNodes[5].innerHTML}`
        } else if (el.classList.contains('mobile-third')) {
            popupAvatar.setAttribute('src', `${reviews640px[2].childNodes[1].getAttribute('src')}`)
            popupName.innerHTML = `${reviews640px[2].childNodes[3].childNodes[1].innerHTML}`
            popupTime.innerHTML = `${reviews640px[2].childNodes[3].childNodes[3].childNodes[5].innerHTML}`
            popupText.innerHTML = `${reviews640px[2].childNodes[5].innerHTML}`
        }
    }
}



reviews640px.forEach(el => el.addEventListener('click', showPopup))
