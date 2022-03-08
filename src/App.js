import React from "react";
import "./styles.css";
import ColorPick from "./components/ColorPick";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      color: "red"
    };
  }

  updateColor = (value) => {
    this.setState({
      color: value
    });
  };

  render() {
    return (
      <>
        <h1>Hello</h1>
        <div className="color-container">
          {["red", "blue", "green", "purple", "yellow"].map((item) => {
            return <ColorPick value={item} updateColor={this.updateColor} />;
          })}
        </div>

        <div
          className="target-div"
          style={{
            background: this.state.color,
            width: "200px",
            height: "200px"
          }}
          onClick={(e) => {}}
        ></div>
      </>
    );
  }
}

export default App;
