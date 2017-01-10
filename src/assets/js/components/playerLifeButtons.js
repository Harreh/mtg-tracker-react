export default class PlayerLifeButtons extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <button onClick={() => this.props.onClick(1)} value="1">+1</button>
                </div>
                <div>
                    <button onClick={() => this.props.onClick(-1)} value="-1">-1</button>
                </div>
            </div>
        );
    }
}
