var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var projectName = "drum-machine";
localStorage.setItem("practice_project", "Drum Machine");

//数据准备
var bankOne = [
{
  keyCode: 81,
  keyTrigger: "Q",
  id: "Heater-1",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" },

{
  keyCode: 87,
  keyTrigger: "W",
  id: "Heater-2",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" },

{
  keyCode: 69,
  keyTrigger: "E",
  id: "Heater-3",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" },

{
  keyCode: 65,
  keyTrigger: "A",
  id: "Heater-4",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" },

{
  keyCode: 83,
  keyTrigger: "S",
  id: "Clap",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" },

{
  keyCode: 68,
  keyTrigger: "D",
  id: "Open-HH",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" },

{
  keyCode: 90,
  keyTrigger: "Z",
  id: "Kick-n'-Hat",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" },

{
  keyCode: 88,
  keyTrigger: "X",
  id: "Kick",
  url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" },

{
  keyCode: 67,
  keyTrigger: "C",
  id: "Closed-HH",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" }];



var bankTwo = [
{
  keyCode: 81,
  keyTrigger: "Q",
  id: "Chord-1",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3" },

{
  keyCode: 87,
  keyTrigger: "W",
  id: "Chord-2",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3" },

{
  keyCode: 69,
  keyTrigger: "E",
  id: "Chord-3",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3" },

{
  keyCode: 65,
  keyTrigger: "A",
  id: "Shaker",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3" },

{
  keyCode: 83,
  keyTrigger: "S",
  id: "Open-HH",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3" },

{
  keyCode: 68,
  keyTrigger: "D",
  id: "Closed-HH",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3" },

{
  keyCode: 90,
  keyTrigger: "Z",
  id: "Punchy-Kick",
  url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3" },

{
  keyCode: 88,
  keyTrigger: "X",
  id: "Side-Stick",
  url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3" },

{
  keyCode: 67,
  keyTrigger: "C",
  id: "Snare",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3" }];



//React component
var App = function (_React$Component) {_inherits(App, _React$Component);
  function App(props) {_classCallCheck(this, App);var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this,
    props));
    _this.state = {
      power: true,
      display: String.fromCharCode(160),
      currentBank: bankOne,
      currentBankId: "Heart Kit",
      sliderVolume: 0.3 };

    _this.displayClipName = _this.displayClipName.bind(_this);
    _this.handlePowerControl = _this.handlePowerControl.bind(_this);
    _this.handleBankControl = _this.handleBankControl.bind(_this);
    _this.handleSliderVolume = _this.handleSliderVolume.bind(_this);
    _this.clearDisplay = _this.clearDisplay.bind(_this);return _this;
  }_createClass(App, [{ key: "displayClipName", value: function displayClipName(

    name) {
      this.setState({
        display: name });

    } }, { key: "handlePowerControl", value: function handlePowerControl()

    {
      this.setState({
        power: !this.state.power,
        display: String.fromCharCode(160) });

    } }, { key: "handleBankControl", value: function handleBankControl()

    {
      if (this.state.power) {
        if (this.state.currentBankId === "Heart Kit") {
          this.setState({
            currentBank: bankTwo,
            currentBankId: "Smooth Plano Kit",
            display: "Smooth Plano Kit" });

        } else {
          this.setState({
            currentBank: bankOne,
            currentBankId: "Heart Kit",
            display: "Heart Kit" });

        }
      }
    } }, { key: "handleSliderVolume", value: function handleSliderVolume(

    e) {
      if (this.state.power) {
        this.setState({
          sliderVolume: e.target.value,
          display: "Volume: " + Math.round(e.target.value * 100) });

        setTimeout(this.clearDisplay, 1000);
      }
    } }, { key: "clearDisplay", value: function clearDisplay()

    {
      this.setState({
        display: String.fromCharCode(160) });

    } }, { key: "render", value: function render()

    {var _this2 = this;
      var selectPower = this.state.power ?
      { float: "right" } :
      { float: "left" };
      var selectBank =
      this.state.currentBankId === "Heart Kit" ?
      { float: "left" } :
      { float: "right" };
      var clips = [].slice.call(document.getElementsByClassName("clip"));
      clips.forEach(function (audio) {
        audio.volume = _this2.state.sliderVolume;
      });
      return (
        React.createElement("div", { id: "container" },
          React.createElement("div", { className: "logo" },
            React.createElement("p", null, "FCC Drum Machine ",
              React.createElement("i", { className: "fa fa-free-code-camp" }))),


          React.createElement("div", { className: "control-panel" },
            React.createElement("span", { className: "control-panel-title" }, "Control Panel"),
            React.createElement("div", { className: "control" },
              React.createElement("p", null, "Power"),
              React.createElement("div", { className: "select", onClick: this.handlePowerControl },
                React.createElement("div", { className: "inner", style: selectPower }))),



            React.createElement("div", { className: "control" },
              React.createElement("p", null, "Bank"),
              React.createElement("div", { className: "select", onClick: this.handleBankControl },
                React.createElement("div", { className: "inner", style: selectBank }))),



            React.createElement("div", { className: "sliderVolume" },
              React.createElement("input", {
                type: "range",
                min: "0",
                max: "1",
                step: "0.01",
                value: this.state.sliderVolume,
                onChange: this.handleSliderVolume })),



            React.createElement("div", { id: "display", className: "display" },
              React.createElement("p", null, this.state.display))),


          React.createElement(PadBank, {
            power: this.state.power,
            currentBank: this.state.currentBank,
            currentBankId: this.state.currentBankId,
            displayClipName: this.displayClipName,
            sliderVolume: this.sliderVolume }),

          React.createElement("div", { className: "footer" },
            React.createElement("footer", null,
              React.createElement("span", null,
                React.createElement("i", { "class": "fa fa-calendar" }), "\xA0 Update: 2018-09-01"), "\xA0\xA0",


              React.createElement("span", null,
                React.createElement("i", { "class": "fa fa-upload" }), "\xA0 By: Vanessa")))));





    } }]);return App;}(React.Component);var


PadBank = function (_React$Component2) {_inherits(PadBank, _React$Component2);
  function PadBank(props) {_classCallCheck(this, PadBank);return _possibleConstructorReturn(this, (PadBank.__proto__ || Object.getPrototypeOf(PadBank)).call(this,
    props));
  }_createClass(PadBank, [{ key: "render", value: function render()

    {var _this4 = this;
      var padBank = void 0;
      this.props.power ?
      padBank = this.props.currentBank.map(function (drumObj, i, bankArr) {
        return (
          React.createElement(DrumPad, {
            idText: drumObj.id,
            clipUrl: drumObj.url,
            keyChar: drumObj.keyTrigger,
            keyCode: drumObj.keyCode,
            displayClipName: _this4.props.displayClipName,
            power: _this4.props.power }));


      }) :
      padBank = this.props.currentBank.map(function (drumObj, i, padBankArr) {
        return (
          React.createElement(DrumPad, {
            idText: drumObj.id,
            clipUrl: "#",
            keyChar: padBankArr[i].keyTrigger,
            keyCode: drumObj.keyCode,
            display: _this4.props.displayClipName,
            power: _this4.props.power }));


      });
      return (
        React.createElement("div", { "class": "pad-bank" },
          React.createElement("span", { className: "pad-bank-title" }, "Pad Bank"),
          padBank));


    } }]);return PadBank;}(React.Component);


var activeStyle = {
  width: "2.8em",
  height: "2.8em",
  backgroundColor: "darkred",
  borderRadius: "8px",
  boxShadow: "3px 5px 10px 3px black",
  float: "left",
  margin: "10px",
  position: "relative" };

var inactiveStyle = {
  width: "3em",
  height: "3em",
  backgroundColor: "white",
  borderRadius: "8px",
  boxShadow: "3px 5px 10px 3px grey",
  float: "left",
  margin: "10px",
  position: "relative" };var

DrumPad = function (_React$Component3) {_inherits(DrumPad, _React$Component3);
  function DrumPad(props) {_classCallCheck(this, DrumPad);var _this5 = _possibleConstructorReturn(this, (DrumPad.__proto__ || Object.getPrototypeOf(DrumPad)).call(this,
    props));
    _this5.state = {
      drumPadStyle: inactiveStyle };

    _this5.handleKeydown = _this5.handleKeydown.bind(_this5);
    _this5.playSound = _this5.playSound.bind(_this5);
    _this5.activePad = _this5.activePad.bind(_this5);return _this5;
  }_createClass(DrumPad, [{ key: "componentDidMount", value: function componentDidMount()

    {
      document.addEventListener("keydown", this.handleKeydown);
    } }, { key: "componentWillUnmount", value: function componentWillUnmount()
    {
      document.removeEventListener("keydown", this.handleKeydown);
    } }, { key: "handleKeydown", value: function handleKeydown(

    e) {
      if (this.props.power) {
        if (e.keyCode === this.props.keyCode) {
          this.playSound();
        }
      }
    } }, { key: "playSound", value: function playSound(

    e) {
      var sound = document.getElementById(this.props.keyChar);
      sound.currentTime = 0;
      sound.play();
      this.activePad();
      setTimeout(this.activePad, 100);
      var clipName = this.props.idText.replace(/-/g, " ");
      this.props.displayClipName(clipName);
    } }, { key: "activePad", value: function activePad()

    {
      if (this.props.power) {
        if (this.state.drumPadStyle.backgroundColor === "darkred") {
          this.setState({
            drumPadStyle: inactiveStyle });

        } else {
          this.setState({
            drumPadStyle: activeStyle });

        }
      } else {
        if (this.state.drumPadStyle.width === "2.8em") {
          this.setState({
            drumPadStyle: inactiveStyle });

        } else {
          this.setState({
            drumPadStyle: {
              width: "2.8em",
              height: "2.8em",
              backgroundColor: "lightgrey",
              borderRadius: "8px",
              boxShadow: "3px 5px 10px 3px black",
              float: "left",
              margin: "10px",
              position: "relative" } });


        }
      }
    } }, { key: "render", value: function render()
    {
      return (
        React.createElement("div", {
            id: this.props.idText,
            className: "drum-pad",
            onClick: this.playSound,
            style: this.state.drumPadStyle },

          React.createElement("span", { className: "drum-pad-key" }, this.props.keyChar),
          React.createElement("audio", {
              className: "clip",
              src: this.props.clipUrl,
              id: this.props.keyChar }, "your browser no support HTML5 player")));





    } }]);return DrumPad;}(React.Component);


ReactDOM.render(React.createElement(App, null), document.getElementById("drum-machine"));