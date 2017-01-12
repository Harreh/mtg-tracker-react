import MaterialIcon from '../MaterialIcon';

export default class ToolbarAddPlayerButton extends React.Component {
    render() {
        return (
            <MaterialIcon name="person_add" onClick={this.props.onClick} />
        );
    }
}
