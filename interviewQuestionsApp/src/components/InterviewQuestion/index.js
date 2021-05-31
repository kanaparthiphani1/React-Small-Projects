// Write you Code here
import {Component} from 'react'
import './index.css'

class InterviewQuestion extends Component {
  constructor(props) {
    super(props)
    this.state = {showAnswer: false}
  }

  onBtnClick = () => {
    this.setState(prevState => ({
      showAnswer: !prevState.showAnswer,
    }))
  }

  buttonText = () => {
    const {showAnswer} = this.state
    return showAnswer === true ? 'Hide' : 'Show'
  }

  imageUrl = () => {
    const {showAnswer} = this.state
    return showAnswer === true
      ? 'https://assets.ccbp.in/frontend/react-js/up-arrow.png'
      : 'https://assets.ccbp.in/frontend/react-js/down-arrow.png'
  }

  levelClass = () => {
    const {questionItem} = this.props
    let resClass = 'level-para '
    if (questionItem.difficultyLevel === 'EASY') {
      resClass += 'easy'
    } else if (questionItem.difficultyLevel === 'MEDIUM') {
      resClass += 'medium'
    } else {
      resClass += 'hard'
    }
    return resClass
  }

  catgClass = () => {
    const {questionItem} = this.props
    let resClass = 'cat-para '
    if (questionItem.language === 'HTML') {
      resClass += 'html'
    } else if (questionItem.language === 'CSS') {
      resClass += 'css'
    } else {
      resClass += 'js'
    }
    return resClass
  }

  render() {
    const {questionItem} = this.props
    const {showAnswer} = this.state

    const ele = (
      <div className="question-inner">
        <div className="level-cat-cont">
          <p className={this.levelClass()}>{questionItem.difficultyLevel}</p>
          <p className={this.catgClass()}>{questionItem.language}</p>
        </div>
        <h1 className="question">{questionItem.questionText}</h1>
        <div
          className="button-cont"
          onClick={this.onBtnClick}
          role="button"
          tabIndex={0}
        >
          <h1 className="butn-text">{this.buttonText()}</h1>
          <img src={this.imageUrl()} className="down-arr" alt="arr" />
        </div>
        {showAnswer && <p className="answer-para">{questionItem.answerText}</p>}
      </div>
    )

    return ele
  }
}

export default InterviewQuestion
