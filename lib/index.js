"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.geocodeReverse = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by quando on 10/3/17.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * based from https://github.com/xuopled/react-google-places-suggest
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var GooglePlacesSuggest = function (_React$PureComponent) {
  _inherits(GooglePlacesSuggest, _React$PureComponent);

  function GooglePlacesSuggest() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, GooglePlacesSuggest);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = GooglePlacesSuggest.__proto__ || Object.getPrototypeOf(GooglePlacesSuggest)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      coordinate: null,
      googleMaps: null,
      focusedSuggestIndex: 0,
      selectedLabel: "",
      suggests: []
    }, _this.handleSelectSuggest = function (suggest) {
      var onSelectSuggest = _this.props.onSelectSuggest;


      _this.geocodeSuggest(suggest.description, function () {
        _this.setState({ selectedLabel: suggest.description, suggests: [] }, function () {
          onSelectSuggest(suggest, _this.state.coordinate);
        });
      });
    }, _this.updateSuggests = function (search) {
      var _this$props = _this.props,
          googleMaps = _this$props.googleMaps,
          suggestTypes = _this$props.suggestTypes,
          suggestComponentRestrictions = _this$props.suggestComponentRestrictions;

      var autocompleteService = new googleMaps.places.AutocompleteService();

      if (!search) {
        _this.setState({ suggests: [] });
        return;
      }

      autocompleteService.getPlacePredictions({
        input: search,
        types: suggestTypes,
        componentRestrictions: suggestComponentRestrictions
      }, function (googleSuggests) {
        if (!googleSuggests) {
          _this.setState({ suggests: [] });
          return;
        }

        _this.setState({
          focusedSuggestIndex: 0,
          suggests: googleSuggests
        });
      });
    }, _this.geocodeSuggest = function (suggestLabel, callback) {
      var googleMaps = _this.props.googleMaps;

      var geocoder = new googleMaps.Geocoder();

      geocoder.geocode({ address: suggestLabel }, function (results, status) {
        if (status === googleMaps.GeocoderStatus.OK) {
          var location = results[0].geometry.location;
          var coordinate = {
            latitude: location.lat(),
            longitude: location.lng(),
            title: suggestLabel,
            formatted_address: results[0].formatted_address
          };

          _this.setState({ coordinate: coordinate }, callback);
        }
      });
    }, _this.handleKeyDown = function (e) {
      var _this$state = _this.state,
          focusedSuggestIndex = _this$state.focusedSuggestIndex,
          suggests = _this$state.suggests;


      if (suggests.length > 0) {
        if (e.key === "Enter" || e.key === "ArrowUp" || e.key === "ArrowDown") {
          e.preventDefault();
        }

        if (e.key === "Enter") {
          _this.handleSelectSuggest(suggests[focusedSuggestIndex]);
        } else if (e.key === "ArrowUp") {
          if (suggests.length > 0 && focusedSuggestIndex > 0) {
            _this.focusSuggest(focusedSuggestIndex - 1);
          }
        } else if (e.key === "ArrowDown") {
          if (suggests.length > 0 && focusedSuggestIndex < suggests.length - 1) {
            _this.focusSuggest(focusedSuggestIndex + 1);
          }
        }
      }
    }, _this.focusSuggest = function (index) {
      return _this.setState({ focusedSuggestIndex: index });
    }, _this.renderNoResults = function () {
      return _this.props.textNoResults && _react2.default.createElement(
        "li",
        { className: "placesSuggest_suggest" },
        _this.props.textNoResults
      );
    }, _this.renderDefaultSuggest = function (suggest) {
      var description = suggest.description,
          structured_formatting = suggest.structured_formatting;

      var firstMatchedString = structured_formatting.main_text_matched_substrings.shift();
      var labelParts = null;

      if (firstMatchedString) {
        labelParts = {
          before: description.substr(0, firstMatchedString.offset),
          matched: description.substr(firstMatchedString.offset, firstMatchedString.length),
          after: description.substr(firstMatchedString.offset + firstMatchedString.length)
        };
      }

      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "span",
          { className: "placesSuggest_suggestLabel" },
          labelParts ? _react2.default.createElement(
            "span",
            null,
            labelParts.before.length > 0 ? _react2.default.createElement(
              "span",
              null,
              labelParts.before
            ) : null,
            _react2.default.createElement(
              "span",
              { className: "placesSuggest_suggestMatch" },
              labelParts.matched
            ),
            labelParts.after.length > 0 ? _react2.default.createElement(
              "span",
              null,
              labelParts.after
            ) : null
          ) : description
        )
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(GooglePlacesSuggest, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.updateSuggests(this.props.search);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.updateSuggests(nextProps.search);
    }
  }, {
    key: "renderSuggest",
    value: function renderSuggest(suggest) {
      var renderSuggest = this.props.renderSuggest;

      return renderSuggest ? renderSuggest(suggest) : this.renderDefaultSuggest(suggest);
    }
  }, {
    key: "renderSuggests",
    value: function renderSuggests() {
      var _this2 = this;

      var _props = this.props,
          baseClassName = _props.baseClassName,
          activeClassName = _props.activeClassName,
          isDropdownOpen = _props.isDropdownOpen;
      var _state = this.state,
          focusedSuggestIndex = _state.focusedSuggestIndex,
          suggests = _state.suggests;

      if (isDropdownOpen) {
        return _react2.default.createElement(
          "ul",
          { className: "placesSuggest_suggests" },
          suggests.length > 0 ?
          // eslint-disable-next-line
          suggests.map(function (suggest, key) {
            return _react2.default.createElement(
              "li",
              {
                key: key,
                className: baseClassName + " " + (focusedSuggestIndex === key && activeClassName),
                onClick: function onClick() {
                  return _this2.handleSelectSuggest(suggest);
                }
              },
              _this2.renderSuggest(suggest)
            );
          }) : this.renderNoResults()
        );
      }

      return '';
    }
  }, {
    key: "render",
    value: function render() {
      var selectedLabel = this.state.selectedLabel;
      var _props2 = this.props,
          children = _props2.children,
          search = _props2.search;
      // eslint-disable-next-line

      return _react2.default.createElement(
        "div",
        { className: "placesSuggest", onKeyDown: this.handleKeyDown },
        children,
        search && selectedLabel !== search && this.renderSuggests()
      );
    }
  }]);

  return GooglePlacesSuggest;
}(_react2.default.PureComponent);

GooglePlacesSuggest.propTypes = {
  children: _propTypes2.default.any.isRequired,
  googleMaps: _propTypes2.default.object.isRequired,
  onSelectSuggest: _propTypes2.default.func,
  renderSuggest: _propTypes2.default.func,
  search: _propTypes2.default.string,
  suggestTypes: _propTypes2.default.array,
  suggestComponentRestrictions: _propTypes2.default.object,
  textNoResults: _propTypes2.default.string,
  baseClassName: _propTypes2.default.string,
  activeClassName: _propTypes2.default.string,
  isDropdownOpen: _propTypes2.default.bool
};

GooglePlacesSuggest.defaultProps = {
  onSelectSuggest: function onSelectSuggest() {},
  search: "",
  suggestTypes: [],
  suggestComponentRestrictions: {
    country: "au"
  },
  textNoResults: "No results",
  baseClassName: "placesSuggest_suggest",
  activeClassName: "placesSuggest_suggest-active",
  isDropdownOpen: false
};

var geocodeReverse = exports.geocodeReverse = function geocodeReverse(googleMaps, _ref2, callback) {
  var location = _ref2.location;

  var geocoder = new googleMaps.Geocoder();

  geocoder.geocode({ location: location }, function (results, status) {
    if (status === googleMaps.GeocoderStatus.OK) {
      var _results$0$geometry$l = results[0].geometry.location,
          lat = _results$0$geometry$l.lat,
          lng = _results$0$geometry$l.lng;

      var coordinate = {
        latitude: lat(),
        longitude: lng(),
        title: results[0].formatted_address
      };

      callback(coordinate);
    }
  });
};

exports.default = GooglePlacesSuggest;
//# sourceMappingURL=index.js.map