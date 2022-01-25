import React from "react"

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }

    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
  }

  increment() {
    this.setState({
      count: this.state.count + 1,
    })
  }

  decrement() {
    this.setState({
      count: this.state.count - 1,
    })
  }

  render() {
    return (
      <>
        <h3>Count: {this.state.count}</h3>
        <button onClick={this.increment} className="btn btn-success">
          Increase
        </button>
        <button onClick={this.decrement} className="btn btn-danger">
          Decrease
        </button>
      </>
    )
  }
}

export default Counter
