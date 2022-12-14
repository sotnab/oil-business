const { v5: uuid } = require('uuid')
const { randomizeClass } = require('../utils/rules')

class Player {
    constructor(nick) {
        this.nick = nick

        this.id = uuid()
        this.class = randomizeClass()
    }
}

module.exports = Player