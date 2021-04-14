class Plane extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'planeNumber': 0,
            'capacity': '50'
        };
        this.handleChange = this.handleChange.bind(this);
        this.add = this.add.bind(this);
        this.remove = this.remove.bind(this);
    }

    handleChange(e) {
        this.setState({ 'capacity': e.target.value });
    }

    add() {
        this.props.number([this.state.planeNumber + 1, this.state.capacity]);
        this.setState({ 'planeNumber': this.state.planeNumber + 1 })
    }

    remove() {
        if (this.state.planeNumber > 0) {
            this.setState({ 'planeNumber': this.state.planeNumber - 1 })
            this.props.number(this.state.planeNumber);
        }
    }

    render() {
        return (
            <div>
                <div className='listing-title'>Plane</div> <button className='btn btn-danger quantity' onClick={this.remove}><i className="fas fa-minus"></i></button> <button className='btn btn-success quantity' onClick={this.add}><i className="fas fa-plus"></i></button>
                <div className='listing-price'>Price: <strong>10,000,000 NOK</strong></div>
                <div onChange={this.handleChange}>
                    <input type='radio' name='capacity' value='50' checked={this.state.capacity === '50' ? true : false} readOnly />50 passengers
                    <input type='radio' name='capacity' value='100' />100 passengers
                    <input type='radio' name='capacity' value='200' />200 passengers
                </div>
            </div>
        )
    }
}