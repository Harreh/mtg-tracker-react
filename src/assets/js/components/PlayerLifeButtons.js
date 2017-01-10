import PlayerLifeButton from './PlayerLifeButton';

export default class PlayerLifeButtons extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <PlayerLifeButton
                        amount={1}
                        onClick={amount => this.props.onClick(amount)}
                    />
                </div>
                <div>
                    <PlayerLifeButton
                        amount={-1}
                        onClick={amount => this.props.onClick(amount)}
                    />
                </div>
            </div>
        );
    }
}

