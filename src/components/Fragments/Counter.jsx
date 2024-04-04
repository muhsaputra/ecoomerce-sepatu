import React from "react";

// Constructor
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("constructor");
  }

  // ComponentDidMount
  componentDidMount() {
    this.setState({ count: 1 });
    console.log("ComponentDidMount");
  }

  // ComponentDidUpdate
  componentDidUpdate(prevProps, prevState) {
    console.log("ComponentDidUpdate");
    if (this.state.count === 11) {
      this.setState({ count: 0 });
    }
  }

  render() {
    return (
      <div className="flex justify-center gap-2 py-5">
        <h1>{this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Tambah +
        </button>
        {console.log("rendering")}
      </div>
    );
  }
}

export default Counter;
