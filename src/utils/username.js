


const ADJECTIVES = [
    'boundless',
    'plausible',
    'sleepy',
    'electronic',
    'dangerous',
    'slim',
    'purple',
]

const OBJECTS = [
    'puddle',
    'piano',
    'window',
    'bowl',
    'socks',
    'brocolli',
    'chalk'
]


function genRandomUsername() {
    let adj= ADJECTIVES[Math.floor(Math.random()*7)]
    let obj= OBJECTS[Math.floor(Math.random()*7)]
    return `${adj}-${obj}`
}

module.exports = {
    genRandomUsername
}