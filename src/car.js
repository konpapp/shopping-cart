class Car extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'carNumber': 0,
            'wheels': '2',
            'gearbox': 'manual'
        };
        this.handleChange = this.handleChange.bind(this);
        this.add = this.add.bind(this);
        this.remove = this.remove.bind(this);
    }

    handleChange(e) {
        if (e.target.name === 'wheel') {
            this.setState({ 'wheels': e.target.value });
        } else if (e.target.name === 'gearbox') {
            this.setState({ 'gearbox': e.target.value });
        }  
    }

    add() {
        this.props.number([this.state.carNumber + 1, this.state.wheels, this.state.gearbox]);
        this.setState({ 'carNumber': this.state.carNumber + 1 })
    }

    remove() {
        if (this.state.carNumber > 0) {
            this.setState({ 'carNumber': this.state.carNumber - 1 })
            this.props.number(this.state.carNumber);
        }
    }

    render() {
        return (
            <div>
                <div className='listing-title'>Car</div> <button className='btn btn-danger quantity' onClick={this.remove}><i className="fas fa-minus"></i></button> <button className='btn btn-success quantity' onClick={this.add}><i className="fas fa-plus"></i></button>
                <div className='listing-price'>Price: <strong>900,000 NOK</strong></div>
                <div onChange={this.handleChange}>
                    <input type='radio' name='wheel' value='2' checked={this.state.wheels === '2' ? true : false} readOnly />2-wheel
                    <input type='radio' name='wheel' value='4' />4-wheel
                </div>
                <div onChange={this.handleChange}>
                    <input type='radio' name='gearbox' value='manual' checked={this.state.gearbox === 'manual' ? true : false} readOnly />Manual
                    <input type='radio' name='gearbox' value='automatic' />Automatic
                </div>
            </div>
        )     
    }
}