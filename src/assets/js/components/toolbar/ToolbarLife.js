import ToolbarLifeOption from './ToolbarLifeOption';

export default class ToolbarLife extends React.Component {
    render() {
        return (
            <select
                className="selectpicker"
                data-icon="glyphicon glyphicon-heart"
                onChange={this.props.onChange}>

                {this.props.lifeOptions.map(life => <ToolbarLifeOption life={life} key={life} />)}
            </select>
        );
    }
}
