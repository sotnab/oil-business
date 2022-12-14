const { v5: uuid } = require('uuid')

class Lobby {
    constructor(owner) {
        this.owner = owner

        this.id = uuid()
        this.players = []
    }

    addPlayer = (player) => {
        this.players.push(player)
    }

    removePlayer = (id) => {
        this.players = this.players.filter((item) => item.id === id)
    }
}

module.exports = Lobby