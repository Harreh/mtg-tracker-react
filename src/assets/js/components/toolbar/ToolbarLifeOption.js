export default class ToolbarLifeOption extends React.Component {
    render() {
        return (
            <option data-icon="glyphicon glyphicon-heart">{this.props.life}</option>
        );
    }
}
