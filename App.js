class App extends React.Component {
  state = {
    number: ''
  }

  randomNumber = () => {
    const minVal = 0,
      maxVal = 9,
      sign = Math.floor(Math.random() * (maxVal - minVal + 1) + minVal);

    return sign;
  }

  buttonHanlder = () => {
    this.setState({
      number: this.randomNumber()
    })
  }

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <button
            className="button"
            onClick={this.buttonHanlder}>
            Click
          </button>
          <div
            className="result-container">
            {this.state.number}
          </div>
        </div>
      </React.Fragment>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
