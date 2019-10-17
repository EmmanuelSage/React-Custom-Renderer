import React from "react";
// import ReactDOM from "react-dom";
import CusRender from "./CusRender";

const Text = props => {
  return <p className={props.className}>{props.content}</p>;
};

class App extends React.Component {
  state = {
    count: 0
  };

  handleButtonClick= (num) => {
    this.setState(() => ({ count: this.state.count + num}));
    
  }

  render() {
    return (
      <div>
        <button onClick={() => this.handleButtonClick(1)}>Increase</button>
        <Text content={this.state.count} />
        <button onClick={() => this.handleButtonClick(-1)}>Decrease</button>
      </div>
    );
  }
}

// ReactDOM.render(<App />, document.getElementById("root"));
CusRender.render(<App />, document.getElementById("root"));
