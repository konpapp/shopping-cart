class App extends React.Component {
    constructor(props) {
        super(props);
        this.setCars = this.setCars.bind(this);
        this.setBikes = this.setBikes.bind(this);
        this.setPlanes = this.setPlanes.bind(this);
        this.setSpaceships = this.setSpaceships.bind(this);
        this.state = {
            car: [],
            bike: [],
            plane: [],
            spaceship: [],
            totalCost: 0
        };
    }

    setCars(carNumber) {
        if (Array.isArray(carNumber)) {
            this.setState({ 
                car: this.state.car.concat(carNumber),
                totalCost: calculateCosts([this.state.car.concat(carNumber).length / 3, this.state.bike.length / 2, this.state.plane.length / 2, this.state.spaceship.length / 2])
            });
        } else {
            this.setState({ 
                car: this.state.car.slice(0, -3),
                totalCost: calculateCosts([this.state.car.slice(0, -3).length / 3, this.state.bike.length / 2, this.state.plane.length / 2, this.state.spaceship.length / 2])
            })
        }
    }

    setBikes(bikeNumber) {
        if (Array.isArray(bikeNumber)) {
            this.setState({
                bike: this.state.bike.concat(bikeNumber),
                totalCost: calculateCosts([this.state.car.length / 3, this.state.bike.concat(bikeNumber).length / 2, this.state.plane.length / 2, this.state.spaceship.length / 2])
            });
        } else {
            this.setState({
                bike: this.state.bike.slice(0, -2),
                totalCost: calculateCosts([this.state.car.length / 3, this.state.bike.slice(0, -2).length / 2, this.state.plane.length / 2, this.state.spaceship.length / 2])
            })
        }
    }

    setPlanes(planeNumber) {
        if (Array.isArray(planeNumber)) {
            this.setState({
                plane: this.state.plane.concat(planeNumber),
                totalCost: calculateCosts([this.state.car.length / 3, this.state.bike.length / 2, this.state.plane.concat(planeNumber).length / 2, this.state.spaceship.length / 2])
            });
        } else {
            this.setState({
                plane: this.state.plane.slice(0, -2),
                totalCost: calculateCosts([this.state.car.length / 3, this.state.bike.length / 2, this.state.plane.slice(0, -2).length / 2, this.state.spaceship.length / 2])
            })
        }
    }

    setSpaceships(spaceshipNumber) {
        if (Array.isArray(spaceshipNumber)) {
            this.setState({
                spaceship: this.state.spaceship.concat(spaceshipNumber),
                totalCost: calculateCosts([this.state.car.length / 3, this.state.bike.length / 2, this.state.plane.length / 2, this.state.spaceship.concat(spaceshipNumber).length / 2])
            });
        } else {
            this.setState({
                spaceship: this.state.spaceship.slice(0, -2),
                totalCost: calculateCosts([this.state.car.length / 3, this.state.bike.length / 2, this.state.plane.length / 2, this.state.spaceship.slice(0, -2).length / 2])
            })
        }
    }

    render() {
  
        return (
            <div>
                <h2>Cart</h2>
                <p>Get your car, bicycle, plane, or space rocket!</p>
                <hr></hr>
                <ul>
                    <li>
                        <Car number={this.setCars} />
                    </li>
                    <li>
                        <Bike number={this.setBikes} />
                    </li>
                    <li>
                        <Plane number={this.setPlanes} />
                    </li>
                    <li>
                        <Spaceship number={this.setSpaceships} />
                    </li>
                </ul>
                <div>
                    <h1>Total: {this.state.totalCost} NOK</h1>
                    <div className='row'>
                        <div className='col-3'>
                            {this.state.car.map((elem, idx) => {
                                if (idx % 3 === 0) {
                                    return (<div>Car: {elem}</div>)
                                } else if (idx % 3 === 1) {
                                    return (<div>Wheels: {elem}</div>)
                                } else {
                                    return (<div className='mb-3'>Gearbox: {elem}</div>)
                                }
                                })}
                        </div>
                        <div className='col-3'>
                            {this.state.bike.map((elem, idx) => {
                                if (idx % 2 === 0) {
                                    return (<div>Bike: {elem}</div>)
                                } else {
                                    return (<div className='mb-3'>Color: {elem}</div>)
                                }
                            })}
                        </div>
                        <div className='col-3'>
                            {this.state.plane.map((elem, idx) => {
                                if (idx % 2 === 0) {
                                    return (<div>Plane: {elem}</div>)
                                } else {
                                    return (<div className='mb-3'>Capacity: {elem}</div>)
                                }
                            })}
                        </div>
                        <div className='col-3'>
                            {this.state.spaceship.map((elem, idx) => {
                                if (idx % 2 === 0) {
                                    return (<div>Spaceship: {elem}</div>)
                                } else {
                                    return (<div className='mb-3'>Destination: {elem}</div>)
                                }
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

calculateCosts = (arr) => {
    let sum;
    const pricing = {
        'car': 900000,
        'bike': 5000,
        'plane': 10000000,
        'spaceship': 20000000
    }
    sum = arr[0] * pricing['car'] + arr[1] * pricing['bike'] + arr[2] * pricing['plane'] + arr[3] * pricing['spaceship'];
    return sum;
}

const element = <App />;

const domContainer = document.getElementById('container');
ReactDOM.render(element, domContainer);
