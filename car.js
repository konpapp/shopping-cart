var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Car = function (_React$Component) {
    _inherits(Car, _React$Component);

    function Car(props) {
        _classCallCheck(this, Car);

        var _this = _possibleConstructorReturn(this, (Car.__proto__ || Object.getPrototypeOf(Car)).call(this, props));

        _this.state = {
            'carNumber': 0,
            'wheels': '2',
            'gearbox': 'manual'
        };
        _this.handleChange = _this.handleChange.bind(_this);
        _this.add = _this.add.bind(_this);
        _this.remove = _this.remove.bind(_this);
        return _this;
    }

    _createClass(Car, [{
        key: 'handleChange',
        value: function handleChange(e) {
            if (e.target.name === 'wheel') {
                this.setState({ 'wheels': e.target.value });
            } else if (e.target.name === 'gearbox') {
                this.setState({ 'gearbox': e.target.value });
            }
        }
    }, {
        key: 'add',
        value: function add() {
            this.props.number([this.state.carNumber + 1, this.state.wheels, this.state.gearbox]);
            this.setState({ 'carNumber': this.state.carNumber + 1 });
        }
    }, {
        key: 'remove',
        value: function remove() {
            if (this.state.carNumber > 0) {
                this.setState({ 'carNumber': this.state.carNumber - 1 });
                this.props.number(this.state.carNumber);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'div',
                    { className: 'listing-title' },
                    'Car'
                ),
                ' ',
                React.createElement(
                    'button',
                    { className: 'btn btn-danger quantity', onClick: this.remove },
                    React.createElement('i', { className: 'fas fa-minus' })
                ),
                ' ',
                React.createElement(
                    'button',
                    { className: 'btn btn-success quantity', onClick: this.add },
                    React.createElement('i', { className: 'fas fa-plus' })
                ),
                React.createElement(
                    'div',
                    { className: 'listing-price' },
                    'Price: ',
                    React.createElement(
                        'strong',
                        null,
                        '900,000 NOK'
                    )
                ),
                React.createElement(
                    'div',
                    { onChange: this.handleChange },
                    React.createElement('input', { type: 'radio', name: 'wheel', value: '2', checked: this.state.wheels === '2' ? true : false, readOnly: true }),
                    '2-wheel',
                    React.createElement('input', { type: 'radio', name: 'wheel', value: '4' }),
                    '4-wheel'
                ),
                React.createElement(
                    'div',
                    { onChange: this.handleChange },
                    React.createElement('input', { type: 'radio', name: 'gearbox', value: 'manual', checked: this.state.gearbox === 'manual' ? true : false, readOnly: true }),
                    'Manual',
                    React.createElement('input', { type: 'radio', name: 'gearbox', value: 'automatic' }),
                    'Automatic'
                )
            );
        }
    }]);

    return Car;
}(React.Component);