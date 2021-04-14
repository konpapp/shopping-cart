class Spaceship extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'spaceshipNumber': 0,
            'destination': 'moon'
        };
        this.handleChange = this.handleChange.bind(this);
        this.add = this.add.bind(this);
        this.remove = this.remove.bind(this);
    }

    handleChange(e) {
        this.setState({ 'destination': e.target.value });
    }

    add() {
        this.props.number([this.state.spaceshipNumber + 1, this.state.destination]);
        this.setState({ 'spaceshipNumber': this.state.spaceshipNumber + 1 })
    }

    remove() {
        if (this.state.spaceshipNumber > 0) {
            this.setState({ 'spaceshipNumber': this.state.spaceshipNumber - 1 })
            this.props.number(this.state.spaceshipNumber);
        }
    }

    render() {
        return (
            <div>
                <div className='listing-title'>Spaceship</div> <button className='btn btn-danger quantity' onClick={this.remove}><i className="fas fa-minus"></i></button> <button className='btn btn-success quantity' onClick={this.add}><i className="fas fa-plus"></i></button>
                <div className='listing-price'>Price: <strong>20,000,000 NOK</strong></div>
                <div onChange={this.handleChange}>
                    <input type='radio' name='destination' value='moon' checked={this.state.destination === 'moon' ? true : false} readOnly />Moon
                    <input type='radio' name='destination' value='march' />March
                    <input type='radio' name='destination' value='sun' />Sun
                </div>
            </div>
        )
    }
}