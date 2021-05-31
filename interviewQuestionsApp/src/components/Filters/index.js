// Write you Code here
import {Component} from 'react'
import './index.css'

class Filters extends Component {
  getLevel = displayData => {
    const ele = displayData.map(eachItem => (
      <option value={eachItem.level}>{eachItem.level}</option>
    ))

    return ele
  }

  getLangugae = displayData => {
    const ele = displayData.map(eachItem => (
      <option value={eachItem.language}>{eachItem.language}</option>
    ))

    return ele
  }

  onLangugaeChange = event => {
    const {changeCat} = this.props
    changeCat(event.target.value)
  }

  onLevelChanged = event => {
    const {changeLevel} = this.props
    changeLevel(event.target.value)
  }

  render() {
    const {categoryData = [], levelsData = []} = this.props

    const ele = (
      <div className="fil-cont">
        {categoryData.length !== 0 && <h1 className="fil-head">LANGUAGE</h1>}
        {levelsData.length !== 0 && (
          <h1 className="fil-head">DIFFICULTY LEVEL</h1>
        )}
        {categoryData.length !== 0 && (
          <select className="filter-tag" onChange={this.onLangugaeChange}>
            {this.getLangugae(categoryData)}
          </select>
        )}
        {levelsData.length !== 0 && (
          <select className="filter-tag" onChange={this.onLevelChanged}>
            {this.getLevel(levelsData)}
          </select>
        )}
      </div>
    )

    return ele
  }
}

export default Filters
