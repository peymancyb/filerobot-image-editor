import React, { Component } from "react";
import { debounce } from "throttle-debounce";
import {
  CropWrapper,
  CustomLabel,
  FieldSet,
  FieldLabel,
  FieldInput,
  BlockRatioWrapper,
  BlockRatioBtn,
  BlockRatioIcon,
  CropBox,
  CropBoxInner,
  CropShape,
  CropLabel,
  CropShapeWrapper,
  ShapeAligner,
  PresetsWrapper,
} from "../../styledComponents";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aspectRatio: NaN,
      activeRatio: "custom",
    };

    this.handleOnResize = this.handleOnResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleOnResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleOnResize);
  }

  handleOnResize = debounce(250, () => {
    if (window.scaleflexPlugins && window.scaleflexPlugins.cropperjs) {
      window.scaleflexPlugins.cropperjs.setAspectRatio(1);
    }
  });

  changeWidth = (event) => {
    const { initialZoom } = this.props;

    window.scaleflexPlugins.cropperjs.setCropBoxData({
      width: +event.target.value / initialZoom / window.scaleflexPlugins.zoom,
    });
  };

  changeHeight = (event) => {
    const { initialZoom } = this.props;

    window.scaleflexPlugins.cropperjs.setCropBoxData({
      height: +event.target.value / initialZoom / window.scaleflexPlugins.zoom,
    });
  };

  toggleRatio = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const { cropDetails } = this.props;
    const { width, height } = cropDetails;
    let aspectRatio = this.state.aspectRatio;
    aspectRatio = aspectRatio ? NaN : width / height;

    window.scaleflexPlugins.cropperjs.setAspectRatio(aspectRatio);
    window.scaleflexPlugins.cropperjs.setCropBoxData({
      width: width / window.scaleflexPlugins.zoom,
      height: height / window.scaleflexPlugins.zoom,
    });
    this.setState({ aspectRatio });
  };

  changeRatio = (box) => {
    const { aspectRatio } = this.state;
    const {
      original: { width = 1, height = 1 },
      updateState,
    } = this.props;
    let value;

    if (box.name === "custom" && !aspectRatio) {
      this.setState({ activeRatio: box.name });
      return;
    }

    updateState({ roundCrop: box.name === "round" || box.radius === 50 });
    value = box.name === "original" ? width / height : box.value;
    window.scaleflexPlugins.cropperjs.setAspectRatio(value);
    this.setState({ activeRatio: box.name, aspectRatio: value });
  };

  render() {
    const { aspectRatio, activeRatio } = this.state;
    const { cropDetails, original, initialZoom, t, config } = this.props;
    const { cropPresets = [] } = config;

    const onZoomIn = () => {
      window.scaleflexPlugins.cropperjs.zoom(0.1);
    };

    const onZoomOut = () => {
      window.scaleflexPlugins.cropperjs.zoom(-0.1);
    };

    return (
      <CropWrapper>
        {/* DISABLING THE CUSTOM CROPBOX */}
        {/* <CropBox active={activeRatio === 'custom'}>
          <FieldSet>
            <FieldLabel>{t['common.width']}</FieldLabel>
            <FieldInput
              dark={activeRatio === 'custom'}
              fullSize
              value={Math.round(cropDetails.width * initialZoom)}
              onChange={this.changeWidth}
            />
          </FieldSet>
          <BlockRatioWrapper>
            <BlockRatioBtn active={aspectRatio} link onClick={this.toggleRatio}>
              <BlockRatioIcon active={aspectRatio}/>
            </BlockRatioBtn>
          </BlockRatioWrapper>
          <FieldSet>
            <FieldLabel>{t['common.height']}</FieldLabel>
            <FieldInput
              dark={activeRatio === 'custom'}
              fullSize
              value={Math.round(cropDetails.height * initialZoom)}
              onChange={this.changeHeight}
            />
          </FieldSet>
          <CustomLabel>{t['common.custom']}</CustomLabel>
        </CropBox> */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div>
            <p>Zoom</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <button onClick={onZoomOut}>-</button>
            <button onClick={onZoomIn}>+</button>
          </div>
        </div>
        {/* DISABLE OTHER CROP PRESETS */}
        {/* <PresetsWrapper>
          {cropPresets.map((box) => (
            <CropBox
              active={activeRatio === box.name}
              onClick={() => {
                this.changeRatio(box);
              }}
              key={box.name}
            >
              <CropBoxInner>
                <CropShapeWrapper>
                  <ShapeAligner />
                  <CropShape
                    ratio={box.value || original.width / original.height}
                    radius={box.radius}
                  />
                </CropShapeWrapper>
                <CropLabel>{t[`common.${box.name}`] || box.name}</CropLabel>
              </CropBoxInner>
            </CropBox>
          ))}
        </PresetsWrapper> */}
      </CropWrapper>
    );
  }
}
