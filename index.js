const options = ['rock', 'paper', 'scissors']
function getComputerChoice() {
    const cc = Math.floor(Math.random() * 10 ) % 3
    return options[cc]
}

function play(psl, csl) {
    console.log(`player: ${psl}, computer: ${csl}`)
    if (psl === csl) {
       return 'Nobody' 
    }
    switch(psl) {
        case 'rock':
            return csl === 'scissors' ? 'Player' : 'Computer'
        case 'paper':
            return csl === 'rock' ? 'Player' : 'Computer'
        case 'scissors':
            return csl === 'paper' ? 'Player' : 'Computer'
    }
}

function displayResult(result) {
    const myDiv = document.querySelector('.myDiv')
    myDiv.innerText = `${result} won for this round\n Player score: ${ps} Computer score: ${cs}\n`
}

function playGame(psl) {
    const csl = getComputerChoice()
    const result = play(psl, csl)
    if (result === 'Player') ps++
    else if (result === 'Computer') cs++
    displayResult(result)
    if(ps === 5 || cs === 5) {
        myDiv.innerText += `Game ended\n Overall winner ${ps>cs? 'Player':'Computer'}`
        ps = 0
        cs = 0
    }
}

const Rock = document.createElement('button')
Rock.innerText = 'Rock'
Rock.addEventListener('click', ()=> {
    console.log('Rock clicked')
    playGame('rock')
})

const Paper = document.createElement('button')
Paper.innerText = 'Paper'
Paper.addEventListener('click', ()=> {
    console.log('Paper clicked')
    playGame('paper')
})

const Scissors = document.createElement('button')
Scissors.innerText = 'Scissors'
Scissors.addEventListener('click', ()=> {
    console.log('Scissors clicked')
    playGame('scissors')
})

document.body.appendChild(Rock)
document.body.appendChild(Paper)
document.body.appendChild(Scissors)

const myDiv = document.createElement('div')
myDiv.className = 'myDiv'
document.body.appendChild(myDiv)

let ps=0
let cs=0



// console.log('haiiiiiiii')