import Player from './Player';

export default class Game extends React.Component {
    constructor(props) {
        super(props);

        this.changeLife = this.changeLife.bind(this);

        this.state = {
            players: [
                { name: 'Harry', life: 20, id: 1 },
                { name: 'n00b', life: 20, id: 2 }
            ]
        };
    }

    changeLife(value, key) {
        const players = this.state.players;

        for (let i = players.length - 1; i >= 0; i--) {
            if (players[i].id == key) {
                players[i].life = players[i].life + value;

                this.setState(players);

                break;
            }
        }
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
            />
        ));
    }

    render() {
        const players = this.renderPlayers(this.state.players);

        return (
            <div>
                <h1>mtg tracker react</h1>

                <div>
                    { players }
                </div>
            </div>
        )
    }
}

