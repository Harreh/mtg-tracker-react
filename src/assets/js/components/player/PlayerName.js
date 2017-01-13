import PlayerNameEditButton from './PlayerNameEditButton';

export default class PlayerName extends React.Component {
    constructor(props) {
        super(props);

        this.editName = this.editName.bind(this);

        this.state = {
            isEdit: false
        };
    }

    editName() {
        this.setState({
            isEdit: !this.state.isEdit
        });
    }

    render() {
        return (
            <div className="player-name">
                <span className={'name-label' + (this.state.isEdit ? ' hide' : '')}>
                    {this.props.name}
                </span>

                <input type="text"
                    className={this.state.isEdit ? '' : 'hide'}
                    value={this.props.name}
                    onChange={this.props.nameChanged} />

                <PlayerNameEditButton onClick={this.editName} />
            </div>
        );
    }
}
