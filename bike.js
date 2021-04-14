var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Bike = function (_React$Component) {
    _inherits(Bike, _React$Component);

    function Bike(props) {
        _classCallCheck(this, Bike);

        var _this = _possibleConstructorReturn(this, (Bike.__proto__ || Object.getPrototypeOf(Bike)).call(this, props));

        _this.state = {
            'bikeNumber': 0,
            'color': 'red'
        };
        _this.handleChange = _this.handleChange.bind(_this);
        _this.add = _this.add.bind(_this);
        _this.remove = _this.remove.bind(_this);
        return _this;
    }

    _createClass(Bike, [{
        key: 'handleChange',
        value: function handleChange(e) {
            this.setState({ 'color': e.target.value });
        }
    }, {
        key: 'add',
        value: function add() {
            this.props.number([this.state.bikeNumber + 1, this.state.color]);
            this.setState({ 'bikeNumber': this.state.bikeNumber + 1 });
        }
    }, {
        key: 'remove',
        value: function remove() {
            if (this.state.bikeNumber > 0) {
                this.setState({ 'bikeNumber': this.state.bikeNumber - 1 });
                this.props.number(this.state.bikeNumber);
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
                    'Bike'
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
                        '5,000 NOK'
                    )
                ),
                React.createElement(
                    'div',
                    { onChange: this.handleChange },
                    React.createElement('input', { type: 'radio', name: 'color', value: 'red', checked: this.state.color === 'red' ? true : false, readOnly: true }),
                    'Red',
                    React.createElement('input', { type: 'radio', name: 'color', value: 'green' }),
                    'Green',
                    React.createElement('input', { type: 'radio', name: 'color', value: 'blue' }),
                    'Blue'
                )
            );
        }
    }]);

    return Bike;
}(React.Component);