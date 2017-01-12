export default class ToolbarPlayerOption extends React.Component {
    render() {
        return (
            <option data-icon="glyphicon glyphicon-user">{this.props.players}</option>
        );
    }
}
