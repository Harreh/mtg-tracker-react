import MaterialIcon from './MaterialIcon';

export default class PlayerNameEditButton extends React.Component {
    render() {
        return (
            <MaterialIcon
                name="mode_edit"
                onClick={this.props.onClick}
            />
        );
    }
}
