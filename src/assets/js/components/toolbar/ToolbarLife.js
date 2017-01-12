import ToolbarLifeOption from './ToolbarLifeOption';

export default class ToolbarLife extends React.Component {
    render() {
        return (
            <select className="selectpicker" data-icon="glyphicon glyphicon-heart">
                <ToolbarLifeOption life="20" />
                <ToolbarLifeOption life="30" />
                <ToolbarLifeOption life="40" />
            </select>
        );
    }
}
