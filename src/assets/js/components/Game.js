import Player from './Player';

export default class Game extends React.Component {
    constructor(props) {
        super(props);

        this.changeLife = this.changeLife.bind(this);
        this.nameChanged = this.nameChanged.bind(this);
        this.getPlayerIndexById = this.getPlayerIndexById.bind(this);
        this.setPlayerName = this.setPlayerName.bind(this);

        this.state = {
            players: [
                { name: 'Harry', life: 20, id: 1 },
                { name: 'n00b', life: 20, id: 2 }
            ]
        };
    }

    getPlayerIndexById(id) {
        const players = this.state.players;

        for (let i = players.length - 1; i >= 0; i--) {
            if (players[i].id == id) {
                return i;
            }
        }

        return null;
    }

    setPlayerName(value, id) {
        const players = this.state.players;

        const index = this.getPlayerIndexById(id);

        players[index].name = value;

        this.setState(players);
    }

    changeLife(value, id) {
        const players = this.state.players;

        const index = this.getPlayerIndexById(id);

        players[index].life = players[index].life + value;
    }

    nameChanged(e, id) {
        this.setPlayerName(e.target.value, id);
    }

    renderPlayers(players) {
        if (players.length == 0) {
            return [];
        }

        return players.map(player => (
            <Player
                onClick={this.changeLife}
                key={player.id}
                id={player.id}
                life={player.life}
                name={player.name}
                nameChanged={this.nameChanged}
            />
        ));
    }

    render() {
        const players = this.renderPlayers(this.state.players);

        return (
            <div>
                <h1>mtg tracker react</h1>

                <div className="players-container">
                    { players }
                </div>
            </div>
        )
    }
}

