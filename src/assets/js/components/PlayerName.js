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
                <p className={this.state.isEdit ? 'hide' : ''}>
                    {this.props.name}
                </p>
                <PlayerNameEditButton onClick={this.editName} />
                <input type="text" className={this.state.isEdit ? '' : 'hide'} value={this.props.name} onChange={this.props.nameChanged} />
            </div>
        );
    }
}
