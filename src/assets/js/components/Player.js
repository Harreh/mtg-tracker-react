import PlayerLifeButtons from './PlayerLifeButtons';
import PlayerName from './PlayerName';

export default class Player extends React.Component {

    editName() {

    }

    render() {
        return(
            <div className="player-component">

                <PlayerName name={this.props.name}/>

                <p className="player-life">{this.props.life}</p>

                <PlayerLifeButtons
                    onClick={amount => this.props.onClick(amount, this.props.id)}
                />
            </div>
        );
    }
}
