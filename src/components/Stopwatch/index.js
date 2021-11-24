// Write your code here
import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {
    hours: 0,
    minutes: 0,
    seconds: 0,
  }

  onClickStart = () => {
    this.timerId = setInterval(() => {
      const {seconds} = this.state
      if (seconds === 60) {
        this.setState(prevState => ({
          seconds: 1,
          minutes: prevState.minutes + 1,
        }))
      } else {
        this.setState(prevState => ({
          seconds: prevState.seconds + 1,
        }))
      }
    }, 200)
  }

  onClickStop = () => {
    const {minutes, seconds} = this.state
    clearInterval(this.timerId)
    console.log('stop clicked')
  }

  onClickReset = () => {
    const {minutes} = this.state
    this.setState({minutes: 0, seconds: 0})
    console.log(minutes)
  }

  getTheTime = value =>
    value.toString().length <= 1 ? <h1>0{value}</h1> : <h1>{value}</h1>

  render() {
    const {seconds, minutes} = this.state
    console.log(minutes, seconds)

    return (
      <div className="main-container">
        <div className="sub-container">
          <div className="header">
            <h1>Stopwatch</h1>
          </div>
          <div className="stopwatch-card">
            <div className="stopwatch-timer-header">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
              />
              <p className="timer">Timer</p>
            </div>
            <div className="timer-container">
              <h1>{this.getTheTime(minutes)}</h1>
              <p className="colon">:</p>
              <h1>{this.getTheTime(seconds)}</h1>
            </div>
            <div className="button-container">
              <button
                className="start"
                type="button"
                onClick={this.onClickStart}
              >
                Start
              </button>
              <button className="stop" type="button" onClick={this.onClickStop}>
                Stop
              </button>
              <button
                className="reset"
                type="button"
                onClick={this.onClickReset}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
