import ToolbarPlayerOption from './ToolbarPlayerOption';
import ToolbarLifeOption from './ToolbarLifeOption';

export default class ToolbarPlayers extends React.Component {

    renderOptions(maxPlayers) {
        const indents = [];

        for (let i = 2; i <= maxPlayers; i++) {
            indents.push(<ToolbarPlayerOption players={i} key={i} />);
        }

        return indents;
    }

    render() {
        return (
            <select className="selectpicker" onChange={this.props.onChange}>
                {this.renderOptions(this.props.maxPlayers)}
            </select>
        );
    }
}
