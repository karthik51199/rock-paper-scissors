const options = ['rock', 'paper', 'scissors']
function getComputerChoice() {
    const cc = Math.floor(Math.random() * 10 ) % 3
    return options[cc];
}

function play(psl, csl) {
    console.log(psl,csl)
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

function getPlayerChoice() {
    const psl = prompt('Enter Rock/paper/Scissors').toLocaleLowerCase()
    if (!options.includes(psl)) {
        return 'invalid input'
    }
    return psl
}

function playGame() {
    let ps = 0, cs = 0;
    for(let i=0; i<5; i++) {
        const psl = getPlayerChoice()
        const csl = getComputerChoice()
        const result = play(psl, csl)
        switch(result) {
            case 'Player':
                ps++
                break
            case 'Computer':
                cs++
                break
            case 'Nobody':
            break
        }
    }
    let results;
    if (ps > cs) {
        results = 'Player'
    } else if (cs > ps) {
        results = 'Computer'
    } else {
        results = 'Nobody'
    }
    console.log(results + ` won. Player score: ${ps}, Computer score: ${cs}` )
}