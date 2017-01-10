import PlayerNameEditButton from './PlayerNameEditButton';

export default class PlayerName extends React.Component {
    render() {
        return (
            <div className="player-name">
                <p>
                    {this.props.name}<PlayerNameEditButton onClick={this.editName} />
                </p>
            </div>
        );
    }
}
