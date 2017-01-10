import PlayerLifeButtons from './PlayerLifeButtons'

export default class Player extends React.Component {

    render() {
        return(
            <div className="player-component">
                <p className="player-name">{this.props.name}</p>
                <p className="player-life">{this.props.life}</p>

                <PlayerLifeButtons
                    onClick={value => this.props.onClick(value, this.props.id)}
                />
            </div>
        );
    }
}
