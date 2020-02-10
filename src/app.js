import { APP_ACCESS_KEY } from './password'

const tabs = document.querySelectorAll('.tab')
const images = document.querySelectorAll('.image')
const queries = ['plane', 'cat', 'nature', 'programming']

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        tabs.forEach(tab => {
            tab.classList.remove('tab--active')
        })
        tab.classList.add('tab--active')
        unsplashImage(queries[index])
    })
})

function unsplashImage(query) {
    fetch(`https://api.unsplash.com/search/photos?client_id=${APP_ACCESS_KEY}&query=${query}`, { method: 'get' }).
        then(res => res.json())
        .then(res => {
            images.forEach( (image, index) => {
                image.style.backgroundImage = `url(${res.results[index].urls.regular}`;
            })  
        })
        .catch(res => console.log("error", res))
}

unsplashImage("planes");