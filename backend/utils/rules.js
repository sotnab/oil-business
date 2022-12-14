const Class = require('../classes/Class')

// game phases
const states = {
    DRAW: 0,
    INVEST: 1,
    EXTRACTION: 2,
    SALE: 3
}

// investor classes
const classes = {
    landlord: new Class(2, 2, 3, 2),
    engineer: new Class(2, 3, 1, 2),
    manager: new Class(3, 2, 1, 2),
    buyer: new Class(2, 2, 1, 3)
}

const equipmentPrices = {
    worker: 100,
    rig: 500,
    land: 500,
    wagon: 500,
    canadianRig: 500,
    pump: 500,
    fan: 500
}

const resourcePrices = {
    wax: [100, 200, 300],
    oil: [0, 250, 500],
    gas: [100, 200, 400]
}

// randomize investor class
const randomizeClass = () => {
    const keys = Object.keys(classes)
    const key = Math.floor(Math.random() * keys.length)

    return classes[key]
}

module.exports = {
    states, randomizeClass, equipmentPrices, resourcePrices
}