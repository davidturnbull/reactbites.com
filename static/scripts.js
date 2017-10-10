class App extends React.Component {
  state = {
    number: 0
  }
  handleClick = () => {
    this.setState((prevState) => {
      return {
        number: ++prevState.number
      }
    });
  }
  render(){
    return (
      <div>
        <button onClick={this.handleClick}>
          {this.state.number}
        </button>
        <p>
          The current number is {this.state.number}.
        </p>
        <pre style={{
          backgroundColor: "#f0f0f0",
          border: "solid",
          borderColor: "#cccccc",
          borderWidth: "1px",
          padding: "1rem"
        }}>
          state = {JSON.stringify(this.state, null, 2)}
        </pre>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("test"));
