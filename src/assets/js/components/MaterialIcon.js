export default class MaterialIcon extends React.Component {
    render() {
        return (
            <i className="material-icons">{this.props.name}</i>
        );
    }
}

MaterialIcon.propTypes = {
    name: React.PropTypes.string
};
