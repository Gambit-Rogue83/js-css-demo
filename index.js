console.log('Index is good :)')
let plusBtn = document.querySelector('#plus-btn')
let counter = document.querySelector('#counter')

let count = 0

let increment = () => {
    count += 1
    console.log(count)
    counter.textContent = count
}

plusB5n.addEventListener('click', increment)
