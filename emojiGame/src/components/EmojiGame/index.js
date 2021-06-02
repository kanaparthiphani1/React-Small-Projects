/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'
import './index.css'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  constructor(props) {
    super(props)
    this.state = {selectedItems: [], presScore: 0, topScore: 0, gameOver: false}
  }

  onItemSelected = name => {
    const {emojisList} = this.props
    const arrLen = emojisList.length
    const {selectedItems, presScore} = this.state
    const itemBool = selectedItems.includes(name)
    if (itemBool) {
      this.setState({gameOver: true})
    } else {
      const items = selectedItems
      items.push(name)
      const updatedScore = presScore + 1

      console.log(updatedScore)
      if (updatedScore === arrLen) {
        console.log('HYYY')
        this.setState({
          selectedItems: [],
          presScore: updatedScore,
          gameOver: true,
        })
      } else {
        this.setState({
          selectedItems: items,
          presScore: updatedScore,
          gameOver: false,
        })
      }
    }
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  onClickPlayAgain = () => {
    const {presScore, topScore} = this.state
    if (presScore >= topScore) {
      this.setState({
        selectedItems: [],
        presScore: 0,
        topScore: presScore,
        gameOver: false,
      })
    } else {
      this.setState({
        selectedItems: [],
        presScore: 0,
        topScore,
        gameOver: false,
      })
    }
  }

  render() {
    const updatedEmojiList = this.shuffledEmojisList()
    const {presScore, gameOver, topScore} = this.state
    const ele = (
      <div className="outer-cont">
        <NavBar presScore={presScore} topScore={topScore} />
        <div className="lower-cont">
          {!gameOver && (
            <div className="inner-lower-cont">
              {updatedEmojiList.map(eachItem => (
                <EmojiCard
                  emojiItem={eachItem}
                  onItemClicked={this.onItemSelected}
                />
              ))}
            </div>
          )}
          {gameOver && (
            <WinOrLoseCard
              score={presScore}
              topScore={topScore}
              onClickPlayAgain={this.onClickPlayAgain}
            />
          )}
        </div>
      </div>
    )
    return ele
  }
}

export default EmojiGame
