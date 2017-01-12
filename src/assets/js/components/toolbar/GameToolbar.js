import ToolbarResetButton from './ToolbarResetButton';
import ToolbarPlayers from './ToolbarPlayers';
import ToolbarLife from './ToolbarLife';
import ToolbarAddPlayerButton from './ToolbarAddPlayerButton';

export default class GameToolbar extends React.Component {
    render() {
        return (
            <div className="game-toolbar">
                <ToolbarResetButton />
                <ToolbarLife />
                <ToolbarPlayers />
                <ToolbarAddPlayerButton onClick={this.props.onAddPlayer} />
            </div>
        );
    }
}
