"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _throttleDebounce = require("throttle-debounce");

var _styledComponents = require("../../styledComponents");

var _temp;

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = (_temp = /*#__PURE__*/function (_Component) {
  _inherits(_default, _Component);

  var _super = _createSuper(_default);

  function _default(props) {
    var _this;

    _classCallCheck(this, _default);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleOnResize", (0, _throttleDebounce.debounce)(250, function () {
      if (window.scaleflexPlugins && window.scaleflexPlugins.cropperjs) {
        window.scaleflexPlugins.cropperjs.setAspectRatio(1);
      }
    }));

    _defineProperty(_assertThisInitialized(_this), "changeWidth", function (event) {
      var initialZoom = _this.props.initialZoom;
      window.scaleflexPlugins.cropperjs.setCropBoxData({
        width: +event.target.value / initialZoom / window.scaleflexPlugins.zoom
      });
    });

    _defineProperty(_assertThisInitialized(_this), "changeHeight", function (event) {
      var initialZoom = _this.props.initialZoom;
      window.scaleflexPlugins.cropperjs.setCropBoxData({
        height: +event.target.value / initialZoom / window.scaleflexPlugins.zoom
      });
    });

    _defineProperty(_assertThisInitialized(_this), "toggleRatio", function (event) {
      event.preventDefault();
      event.stopPropagation();
      var cropDetails = _this.props.cropDetails;
      var width = cropDetails.width,
          height = cropDetails.height;
      var aspectRatio = _this.state.aspectRatio;
      aspectRatio = aspectRatio ? NaN : width / height;
      window.scaleflexPlugins.cropperjs.setAspectRatio(aspectRatio);
      window.scaleflexPlugins.cropperjs.setCropBoxData({
        width: width / window.scaleflexPlugins.zoom,
        height: height / window.scaleflexPlugins.zoom
      });

      _this.setState({
        aspectRatio: aspectRatio
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getCanvasNode", function () {
      return document.getElementById("preview-img-box");
    });

    _defineProperty(_assertThisInitialized(_this), "changeRatio", function (box) {
      var aspectRatio = _this.state.aspectRatio;
      var _this$props = _this.props,
          _this$props$original = _this$props.original,
          _this$props$original$ = _this$props$original.width,
          width = _this$props$original$ === void 0 ? 1 : _this$props$original$,
          _this$props$original$2 = _this$props$original.height,
          height = _this$props$original$2 === void 0 ? 1 : _this$props$original$2,
          updateState = _this$props.updateState;
      var value;

      if (box.name === "custom" && !aspectRatio) {
        _this.setState({
          activeRatio: box.name
        });

        return;
      }

      updateState({
        roundCrop: box.name === "round" || box.radius === 50
      });
      value = box.name === "original" ? width / height : box.value;
      window.scaleflexPlugins.cropperjs.setAspectRatio(value);

      _this.setState({
        activeRatio: box.name,
        aspectRatio: value
      });
    });

    _this.state = {
      aspectRatio: NaN,
      activeRatio: "custom"
    };
    _this.handleOnResize = _this.handleOnResize.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener("resize", this.handleOnResize);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("resize", this.handleOnResize);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          aspectRatio = _this$state.aspectRatio,
          activeRatio = _this$state.activeRatio;
      var _this$props2 = this.props,
          cropDetails = _this$props2.cropDetails,
          original = _this$props2.original,
          initialZoom = _this$props2.initialZoom,
          t = _this$props2.t,
          config = _this$props2.config;
      var _config$cropPresets = config.cropPresets,
          cropPresets = _config$cropPresets === void 0 ? [] : _config$cropPresets;

      var onZoomIn = function onZoomIn() {
        window.scaleflexPlugins.cropperjs.zoom(0.1);
      };

      var onZoomOut = function onZoomOut() {
        window.scaleflexPlugins.cropperjs.zoom(-0.1);
      };

      return /*#__PURE__*/_react.default.createElement(_styledComponents.CropWrapper, null, /*#__PURE__*/_react.default.createElement("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }
      }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, "Zoom")), /*#__PURE__*/_react.default.createElement("div", {
        style: {
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between"
        }
      }, /*#__PURE__*/_react.default.createElement("button", {
        onClick: onZoomOut
      }, "-"), /*#__PURE__*/_react.default.createElement("button", {
        onClick: onZoomIn
      }, "+"))));
    }
  }]);

  return _default;
}(_react.Component), _temp);

var _default2 = _default;
exports.default = _default2;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, "default", "/Users/peymanghazvini/Desktop/memo/filerobot-image-editor/projects/react/components/Toolbar/Crop.js");
}();

;