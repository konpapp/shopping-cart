var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.setCars = _this.setCars.bind(_this);
        _this.setBikes = _this.setBikes.bind(_this);
        _this.setPlanes = _this.setPlanes.bind(_this);
        _this.setSpaceships = _this.setSpaceships.bind(_this);
        _this.state = {
            car: [],
            bike: [],
            plane: [],
            spaceship: [],
            totalCost: 0
        };
        return _this;
    }

    _createClass(App, [{
        key: 'setCars',
        value: function setCars(carNumber) {
            if (Array.isArray(carNumber)) {
                this.setState({
                    car: this.state.car.concat(carNumber),
                    totalCost: calculateCosts([this.state.car.concat(carNumber).length / 3, this.state.bike.length / 2, this.state.plane.length / 2, this.state.spaceship.length / 2])
                });
            } else {
                this.setState({
                    car: this.state.car.slice(0, -3),
                    totalCost: calculateCosts([this.state.car.slice(0, -3).length / 3, this.state.bike.length / 2, this.state.plane.length / 2, this.state.spaceship.length / 2])
                });
            }
        }
    }, {
        key: 'setBikes',
        value: function setBikes(bikeNumber) {
            if (Array.isArray(bikeNumber)) {
                this.setState({
                    bike: this.state.bike.concat(bikeNumber),
                    totalCost: calculateCosts([this.state.car.length / 3, this.state.bike.concat(bikeNumber).length / 2, this.state.plane.length / 2, this.state.spaceship.length / 2])
                });
            } else {
                this.setState({
                    bike: this.state.bike.slice(0, -2),
                    totalCost: calculateCosts([this.state.car.length / 3, this.state.bike.slice(0, -2).length / 2, this.state.plane.length / 2, this.state.spaceship.length / 2])
                });
            }
        }
    }, {
        key: 'setPlanes',
        value: function setPlanes(planeNumber) {
            if (Array.isArray(planeNumber)) {
                this.setState({
                    plane: this.state.plane.concat(planeNumber),
                    totalCost: calculateCosts([this.state.car.length / 3, this.state.bike.length / 2, this.state.plane.concat(planeNumber).length / 2, this.state.spaceship.length / 2])
                });
            } else {
                this.setState({
                    plane: this.state.plane.slice(0, -2),
                    totalCost: calculateCosts([this.state.car.length / 3, this.state.bike.length / 2, this.state.plane.slice(0, -2).length / 2, this.state.spaceship.length / 2])
                });
            }
        }
    }, {
        key: 'setSpaceships',
        value: function setSpaceships(spaceshipNumber) {
            if (Array.isArray(spaceshipNumber)) {
                this.setState({
                    spaceship: this.state.spaceship.concat(spaceshipNumber),
                    totalCost: calculateCosts([this.state.car.length / 3, this.state.bike.length / 2, this.state.plane.length / 2, this.state.spaceship.concat(spaceshipNumber).length / 2])
                });
            } else {
                this.setState({
                    spaceship: this.state.spaceship.slice(0, -2),
                    totalCost: calculateCosts([this.state.car.length / 3, this.state.bike.length / 2, this.state.plane.length / 2, this.state.spaceship.slice(0, -2).length / 2])
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {

            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h2',
                    null,
                    'Cart'
                ),
                React.createElement(
                    'p',
                    null,
                    'Get your car, bicycle, plane, or space rocket!'
                ),
                React.createElement('hr', null),
                React.createElement(
                    'ul',
                    null,
                    React.createElement(
                        'li',
                        null,
                        React.createElement(Car, { number: this.setCars })
                    ),
                    React.createElement(
                        'li',
                        null,
                        React.createElement(Bike, { number: this.setBikes })
                    ),
                    React.createElement(
                        'li',
                        null,
                        React.createElement(Plane, { number: this.setPlanes })
                    ),
                    React.createElement(
                        'li',
                        null,
                        React.createElement(Spaceship, { number: this.setSpaceships })
                    )
                ),
                React.createElement(
                    'div',
                    null,
                    React.createElement(
                        'h1',
                        null,
                        'Total: ',
                        this.state.totalCost,
                        ' NOK'
                    ),
                    React.createElement(
                        'div',
                        { className: 'row' },
                        React.createElement(
                            'div',
                            { className: 'col-3' },
                            this.state.car.map(function (elem, idx) {
                                if (idx % 3 === 0) {
                                    return React.createElement(
                                        'div',
                                        null,
                                        'Car: ',
                                        elem
                                    );
                                } else if (idx % 3 === 1) {
                                    return React.createElement(
                                        'div',
                                        null,
                                        'Wheels: ',
                                        elem
                                    );
                                } else {
                                    return React.createElement(
                                        'div',
                                        { className: 'mb-3' },
                                        'Gearbox: ',
                                        elem
                                    );
                                }
                            })
                        ),
                        React.createElement(
                            'div',
                            { className: 'col-3' },
                            this.state.bike.map(function (elem, idx) {
                                if (idx % 2 === 0) {
                                    return React.createElement(
                                        'div',
                                        null,
                                        'Bike: ',
                                        elem
                                    );
                                } else {
                                    return React.createElement(
                                        'div',
                                        { className: 'mb-3' },
                                        'Color: ',
                                        elem
                                    );
                                }
                            })
                        ),
                        React.createElement(
                            'div',
                            { className: 'col-3' },
                            this.state.plane.map(function (elem, idx) {
                                if (idx % 2 === 0) {
                                    return React.createElement(
                                        'div',
                                        null,
                                        'Plane: ',
                                        elem
                                    );
                                } else {
                                    return React.createElement(
                                        'div',
                                        { className: 'mb-3' },
                                        'Capacity: ',
                                        elem
                                    );
                                }
                            })
                        ),
                        React.createElement(
                            'div',
                            { className: 'col-3' },
                            this.state.spaceship.map(function (elem, idx) {
                                if (idx % 2 === 0) {
                                    return React.createElement(
                                        'div',
                                        null,
                                        'Spaceship: ',
                                        elem
                                    );
                                } else {
                                    return React.createElement(
                                        'div',
                                        { className: 'mb-3' },
                                        'Destination: ',
                                        elem
                                    );
                                }
                            })
                        )
                    )
                )
            );
        }
    }]);

    return App;
}(React.Component);

calculateCosts = function calculateCosts(arr) {
    var sum = void 0;
    var pricing = {
        'car': 900000,
        'bike': 5000,
        'plane': 10000000,
        'spaceship': 20000000
    };
    sum = arr[0] * pricing['car'] + arr[1] * pricing['bike'] + arr[2] * pricing['plane'] + arr[3] * pricing['spaceship'];
    return sum;
};

var element = React.createElement(App, null);

var domContainer = document.getElementById('container');
ReactDOM.render(element, domContainer);
