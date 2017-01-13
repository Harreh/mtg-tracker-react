import MaterialIcon from '../MaterialIcon';

export default class PlayerNameEditButton extends React.Component {
    render() {
        return (
            <span onClick={this.props.onClick} className="edit-name-button">
                <MaterialIcon name="mode_edit" />
            </span>
        );
    }
}
