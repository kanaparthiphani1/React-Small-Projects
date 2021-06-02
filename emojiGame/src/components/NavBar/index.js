// Write your code here.
import {Component} from 'react'
import './index.css'

class NavBar extends Component {
  render() {
    const {presScore, topScore} = this.props
    const ele = (
      <div className="navbar">
        <div className="play-logo">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            className="logo"
            alt="pic"
          />
          <h1 className="play-text">Emoji Game</h1>
        </div>
        <div className="score-cont">
          <h1 className="pres-score">Score : {presScore}</h1>
          <h1 className="top-score">Top Score : {topScore}</h1>
        </div>
      </div>
    )
    return ele
  }
}

export default NavBar
