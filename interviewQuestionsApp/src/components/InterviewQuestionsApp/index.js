// Write you Code here
import {Component} from 'react'
import Filters from '../Filters'
import InterviewQuestions from '../InterviewQuestion'
import './index.css'

class InterviewQuestionsApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      levData: 'ALL',
      catData: 'ALL',
    }
  }

  changeLevel = level => {
    this.setState({levData: level})
  }

  changeCat = catgry => {
    this.setState({catData: catgry})
  }

  questionExp = () => {
    const {questionsData} = this.props
    const {levData, catData} = this.state
    const ele = questionsData.map(eachItem => {
      let ele1 = null
      if (levData === 'ALL' && catData !== 'ALL') {
        ele1 =
          eachItem.language === catData ? (
            <InterviewQuestions questionItem={eachItem} />
          ) : null
      }
      if (levData === 'ALL' && catData === 'ALL') {
        ele1 = <InterviewQuestions questionItem={eachItem} />
      }
      if (catData === 'ALL' && levData !== 'ALL') {
        ele1 =
          eachItem.difficultyLevel === levData ? (
            <InterviewQuestions questionItem={eachItem} />
          ) : null
      }
      if (catData !== 'ALL' && levData !== 'ALL') {
        ele1 =
          eachItem.language === catData &&
          eachItem.difficultyLevel === levData ? (
            <InterviewQuestions questionItem={eachItem} />
          ) : null
      }
      return ele1
    })

    return ele
  }

  render() {
    const {levelsData, categoryData} = this.props

    const ele = (
      <div className="inter-out-cont">
        <div className="filters-cont">
          <Filters categoryData={categoryData} changeCat={this.changeCat} />
          <Filters levelsData={levelsData} changeLevel={this.changeLevel} />
        </div>
        <div className="questions-cont">{this.questionExp()}</div>
      </div>
    )

    return ele
  }
}

export default InterviewQuestionsApp
