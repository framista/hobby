const tabs = document.querySelectorAll('.tab')

console.log(tabs)
tabs.forEach(tab => {
    tab.addEventListener('click', () => {

        tabs.forEach(tab => {
            tab.classList.remove('tab--active')
        })
        tab.classList.add('tab--active')
    })
})