//stack overflow
const root = document.querySelector('html')
const menu = document.querySelector('.menu')

const classArray = ['light', 'dark', 'navy']
let classIterator = 0

menu.addEventListener('click', () => {
    root.classList.remove(classArray[classIterator % classArray.length])
    classIterator++
    root.classList.add(classArray[classIterator % classArray.length])
})