import MaterialIcon from '../MaterialIcon';

export default class ToolbarAddPlayerButton extends React.Component {
    render() {
        return (
            <span className="game-button" onClick={this.props.onClick}><MaterialIcon name="person_add" /></span>
        );
    }
}
