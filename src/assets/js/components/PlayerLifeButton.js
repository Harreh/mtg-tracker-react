export default class PlayerLifeButton extends React.Component {

    getButtonText() {
        if (this.props.amount > 0) {
            return '+' + this.props.amount;
        }

        return this.props.amount;
    }

    render() {
        return (
            <button onClick={() => this.props.onClick(this.props.amount)}>
                {this.getButtonText()}
            </button>
        );
    };
}

PlayerLifeButton.propTypes = {
  amount: React.PropTypes.number
};
