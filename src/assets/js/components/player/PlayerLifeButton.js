export default class PlayerLifeButton extends React.Component {

    isAmountPositive() {
        return this.props.amount > 0;
    }

    getButtonText() {
        if (this.isAmountPositive()) {
            return '+' + this.props.amount;
        }

        return this.props.amount;
    }

    getClassName() {
        if (this.isAmountPositive()) {
            return 'button-plus';
        }

        return 'button-minus';
    }

    render() {
        return (
            <button className="btn btn-default" onClick={() => this.props.onClick(this.props.amount)}>
                {this.getButtonText()}
            </button>
        );
    };
}

PlayerLifeButton.propTypes = {
    amount: React.PropTypes.number
};
