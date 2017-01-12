import ToolbarPlayerOption from './ToolbarPlayerOption';
import ToolbarLifeOption from './ToolbarLifeOption';

export default class ToolbarPlayers extends React.Component {
    render() {
        return (
            <select className="selectpicker">
                <ToolbarPlayerOption players="2" />
                <ToolbarPlayerOption players="3" />
            </select>
        );
    }
}
