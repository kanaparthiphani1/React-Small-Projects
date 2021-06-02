// Write your code here.
import {Component} from 'react'
import './index.css'

class WinOrLoseCard extends Component {
  onPlayAgain = () => {
    const {onClickPlayAgain} = this.props
    onClickPlayAgain()
  }

  showGameStatus = () => {
    const {score} = this.props
    if (score === 12) {
      return 'Won'
    }
    return 'Lose'
  }

  showImg = () => {
    const {score} = this.props
    if (score === 12) {
      return 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    }
    return 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  }

  render() {
    const {score} = this.props
    const ele = (
      <div className="winOrLose-cont">
        <div className="scores-cont">
          <h1 className="game-status">You {this.showGameStatus()}</h1>
          <h1 className="bestScore">Best Score</h1>
          <p className="marks">{score}/12</p>
          <button className="custBtn" type="button" onClick={this.onPlayAgain}>
            Play Again
          </button>
        </div>
        <img src={this.showImg()} alt="wongame" className="wongameimg" />
      </div>
    )
    return ele
  }
}

export default WinOrLoseCard
