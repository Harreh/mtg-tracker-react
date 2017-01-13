import Player from './player/Player';
import GameToolbar from './toolbar/GameToolbar';

export default class Game extends React.Component {
    constructor(props) {
        super(props);

        this.changeLife = this.changeLife.bind(this);
        this.nameChanged = this.nameChanged.bind(this);
        this.getPlayerIndexById = this.getPlayerIndexById.bind(this);
        this.setPlayerName = this.setPlayerName.bind(this);
        this.addPlayer = this.addPlayer.bind(this);
        this.resetGame = this.resetGame.bind(this);
        this.setPlayersCount = this.setPlayersCount.bind(this);
        this.setNewLifeTotal = this.setNewLifeTotal.bind(this);

        this.state = {
            newLifeTotal: 20,
            newPlayersCount: 2,

            players: [
                { name: 'Player 1', life: 20, id: 1 },
                { name: 'Player 2', life: 20, id: 2 }
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

    resetGame() {
        const playersCount = this.state.newPlayersCount;
        const lifeTotal = this.state.newLifeTotal;

        const players = [];

        for (let i = 1; i <= playersCount; i++) {
            players.push({
                name: 'Player ' + i,
                life: lifeTotal,
                id: i
            });
        }

        this.setState({ players });
    }

    setPlayersCount(e) {
        this.setState({
            newPlayersCount: e.target.value
        });
    }

    setNewLifeTotal(e) {
        this.setState({
            newLifeTotal: e.target.value
        });
    }

    render() {
        const players = this.renderPlayers(this.state.players);

        return (
            <div>
                <GameToolbar
                    onResetGame={this.resetGame}
                    onAddPlayer={this.addPlayer}
                    onPlayersCountChange={this.setPlayersCount}
                    onLifeOptionChange={this.setNewLifeTotal} />

                <div className="players-container">
                    { players }
                </div>
            </div>
        )
    }
}

