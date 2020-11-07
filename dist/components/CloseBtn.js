"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CloseBtn = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styleUtils = require("../styledComponents/styleUtils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  cursor: pointer;\n  position: absolute;\n  font-weight: normal;\n  top: ", ";\n  right: ", ";\n  left: ", ";\n  bottom: ", ";\n  font-size: ", ";\n  z-index: 10;\n  font-family: 'filerobot-image-editor-font' !important;\n  color: ", ";\n  speak: none;\n  font-style: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  \n  :hover {\n    color: ", ";\n  }\n  \n  :before {\n      content: '\\e90c'\n    }\n"], ["\n  cursor: pointer;\n  position: absolute;\n  font-weight: normal;\n  top: ", ";\n  right: ", ";\n  left: ", ";\n  bottom: ", ";\n  font-size: ", ";\n  z-index: 10;\n  font-family: 'filerobot-image-editor-font' !important;\n  color: ", ";\n  speak: none;\n  font-style: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  \n  :hover {\n    color: ", ";\n  }\n  \n  :before {\n      content: '\\\\e90c'\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CloseBtn = _styledComponents.default.span.attrs(function () {
  return {
    role: 'button'
  };
})(_templateObject(), function (props) {
  return props.t || '10px';
}, function (props) {
  return props.r || '10px';
}, function (props) {
  return props.l || 'auto';
}, function (props) {
  return props.b || 'auto';
}, function (props) {
  return props.fz || '18px';
}, function () {
  return _styleUtils.variables.modal.colorMuted;
}, function (props) {
  return _styleUtils.variables.modal.colorMutedHover;
});

exports.CloseBtn = CloseBtn;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(CloseBtn, "CloseBtn", "/Users/peymanghazvini/Desktop/memo/filerobot-image-editor/projects/react/components/CloseBtn.js");
}();

;