import { APP_ACCESS_KEY } from './password'

const queries = ['plane', 'cat', 'nature', 'programming']

const tabs = document.querySelectorAll('.tab')
const images = document.querySelectorAll('.image')
const lightbox = document.createElement('div')

lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        tabs.forEach(tab => {
            tab.classList.remove('tab--active')
        })
        tab.classList.add('tab--active')
        unsplashImage(queries[index])
    })
})

images.forEach(image => {
    image.addEventListener('click', e => {
        lightbox.classList.add('lightbox--active')
        lightbox.style.display = "block"
        lightbox.style.display = "flex"
        const img = document.createElement('img')
        img.src = image.style.backgroundImage.slice(4, -1).replace(/"/g, "")
        img.style.maxHeight = "90%"
        img.style.maxWidth = "90%"
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild)
        }
        lightbox.appendChild(img)
    })
})

lightbox.addEventListener('click', e => {
    if (e.target !== e.currentTarget) return
    closeLightbox(e)
})

document.onkeydown = e => {
    e = e || window.event;
    if (e.keyCode == 27 && lightbox.style.display !== "none") {
        closeLightbox(e)
    }
};

function closeLightbox(e){
    lightbox.classList.remove('lightbox--active')
    lightbox.style.display = "none"
}

function unsplashImage(query) {
    fetch(`https://api.unsplash.com/search/photos?client_id=${APP_ACCESS_KEY}&query=${query}`, { method: 'get' }).
        then(res => res.json())
        .then(res => {
            images.forEach((image, index) => {
                image.style.backgroundImage = `url(${res.results[index].urls.regular}`;
            })
        })
        .catch(res => console.log("error", res))
}

unsplashImage("planes");