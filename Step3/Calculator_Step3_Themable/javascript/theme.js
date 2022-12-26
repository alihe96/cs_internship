let root = document.querySelector('html')
let change = document.querySelector('.burger')

change.addEventListener('click', function () {
    if (root.getAttribute('theme') === 'light') {
        root.setAttribute('theme', 'green');
    } else if (root.getAttribute('theme') === 'green') {
        root.setAttribute('theme', 'pink');
    } else if (root.getAttribute('theme') === 'pink') {
        root.setAttribute('theme', 'gray');
    } else if (root.getAttribute('theme') === 'gray') {
        root.setAttribute('theme', 'blue');
    } else if (root.getAttribute('theme') === 'blue') {
        root.setAttribute('theme', 'purple');
    }else if (root.getAttribute('theme') === 'purple') {
        root.setAttribute('theme', 'light');
    }
})