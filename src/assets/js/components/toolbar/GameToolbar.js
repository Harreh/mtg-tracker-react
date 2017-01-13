import ToolbarResetButton from './ToolbarResetButton';
import ToolbarPlayers from './ToolbarPlayers';
import ToolbarLife from './ToolbarLife';
import ToolbarAddPlayerButton from './ToolbarAddPlayerButton';

export default class GameToolbar extends React.Component {
    render() {
        return (
            <div className="game-toolbar">
                <ToolbarResetButton onClick={this.props.onResetGame} />
                <ToolbarLife lifeOptions={[20, 25, 30, 40]} onChange={this.props.onLifeOptionChange} />
                <ToolbarPlayers maxPlayers="7" onChange={this.props.onPlayersCountChange} />
                <ToolbarAddPlayerButton onClick={this.props.onAddPlayer} />
            </div>
        );
    }
}
