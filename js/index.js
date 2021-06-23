document.querySelector('.btn-one').addEventListener('click', (evt) => {
    evt.target.classList.add('loading')

    setTimeout(() => {
        evt.target.classList.remove('loading')
    }, 3000);
})
document.querySelector('.btn-two').addEventListener('click', (evt) => {
    evt.target.classList.add('loading')

    setTimeout(() => {
        evt.target.classList.remove('loading')
    }, 3000);
})