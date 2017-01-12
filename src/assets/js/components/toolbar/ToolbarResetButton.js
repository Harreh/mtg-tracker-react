import MaterialIcon from '../MaterialIcon'

export default class ToolbarResetButton extends React.Component {
    render() {
        return (
            <span className="game-button" onClick={this.props.onClick}>
                <MaterialIcon name="cached" />
            </span>
        );
    }
}
