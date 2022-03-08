import React from "react";
import "./colorpick.css";

class ColorPick extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div
          className="color-block"
          style={{ background: this.props.value }}
          onClick={(e) => {
            this.props.updateColor(this.props.value);
          }}
        ></div>
      </>
    );
  }
}

export default ColorPick;
