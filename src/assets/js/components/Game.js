import Player from './Player';
import GameToolbar from './toolbar/GameToolbar';

export default class Game extends React.Component {
    constructor(props) {
        super(props);

        this.changeLife = this.changeLife.bind(this);
        this.nameChanged = this.nameChanged.bind(this);
        this.getPlayerIndexById = this.getPlayerIndexById.bind(this);
        this.setPlayerName = this.setPlayerName.bind(this);
        this.addPlayer = this.addPlayer.bind(this);

        this.state = {
            newLifeTotal: 20,

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

        this.setState({
            players
        });
    }

    nameChanged(e, id) {
        this.setPlayerName(e.target.value, id);
    }

    addPlayer() {
        const players = this.state.players;

        const id = players.length + 1;

        players.push({
            name: 'Player ' + id,
            id: id,
            life: this.state.newLifeTotal
        });

        this.setState({
            players
        });
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
                <GameToolbar
                    onResetGame={this.resetGame}
                    onAddPlayer={this.addPlayer}
                />

                <div className="players-container">
                    { players }
                </div>
            </div>
        )
    }
}

