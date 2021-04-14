var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Plane = function (_React$Component) {
    _inherits(Plane, _React$Component);

    function Plane(props) {
        _classCallCheck(this, Plane);

        var _this = _possibleConstructorReturn(this, (Plane.__proto__ || Object.getPrototypeOf(Plane)).call(this, props));

        _this.state = {
            'planeNumber': 0,
            'capacity': '50'
        };
        _this.handleChange = _this.handleChange.bind(_this);
        _this.add = _this.add.bind(_this);
        _this.remove = _this.remove.bind(_this);
        return _this;
    }

    _createClass(Plane, [{
        key: 'handleChange',
        value: function handleChange(e) {
            this.setState({ 'capacity': e.target.value });
        }
    }, {
        key: 'add',
        value: function add() {
            this.props.number([this.state.planeNumber + 1, this.state.capacity]);
            this.setState({ 'planeNumber': this.state.planeNumber + 1 });
        }
    }, {
        key: 'remove',
        value: function remove() {
            if (this.state.planeNumber > 0) {
                this.setState({ 'planeNumber': this.state.planeNumber - 1 });
                this.props.number(this.state.planeNumber);
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
                    'Plane'
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
                        '10,000,000 NOK'
                    )
                ),
                React.createElement(
                    'div',
                    { onChange: this.handleChange },
                    React.createElement('input', { type: 'radio', name: 'capacity', value: '50', checked: this.state.capacity === '50' ? true : false, readOnly: true }),
                    '50 passengers',
                    React.createElement('input', { type: 'radio', name: 'capacity', value: '100' }),
                    '100 passengers',
                    React.createElement('input', { type: 'radio', name: 'capacity', value: '200' }),
                    '200 passengers'
                )
            );
        }
    }]);

    return Plane;
}(React.Component);