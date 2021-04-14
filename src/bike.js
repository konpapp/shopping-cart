class Bike extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'bikeNumber': 0,
            'color': 'red'
        };
        this.handleChange = this.handleChange.bind(this);
        this.add = this.add.bind(this);
        this.remove = this.remove.bind(this);
    }

    handleChange(e) {
        this.setState({ 'color': e.target.value });
    }

    add() {
        this.props.number([this.state.bikeNumber + 1, this.state.color]);
        this.setState({ 'bikeNumber': this.state.bikeNumber + 1 })
    }

    remove() {
        if (this.state.bikeNumber > 0) {
            this.setState({ 'bikeNumber': this.state.bikeNumber - 1 })
            this.props.number(this.state.bikeNumber);
        }
    }

    render() {
        return (
            <div>
                <div className='listing-title'>Bike</div> <button className='btn btn-danger quantity' onClick={this.remove}><i className="fas fa-minus"></i></button> <button className='btn btn-success quantity' onClick={this.add}><i className="fas fa-plus"></i></button>
                <div className='listing-price'>Price: <strong>5,000 NOK</strong></div>
                <div onChange={this.handleChange}>
                    <input type='radio' name='color' value='red' checked={this.state.color === 'red' ? true : false} readOnly />Red
                    <input type='radio' name='color' value='green' />Green
                    <input type='radio' name='color' value='blue' />Blue
                </div>
            </div>
        )
    }
}