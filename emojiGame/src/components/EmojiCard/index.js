// Write your code here.
import {Component} from 'react'
import './index.css'

class EmojiCard extends Component {
  onItemSelected = () => {
    const {emojiItem, onItemClicked} = this.props
    onItemClicked(emojiItem.emojiName)
  }

  render() {
    const {emojiItem} = this.props
    const ele = (
      <div
        className="emoji-box"
        onClick={this.onItemSelected}
        role="button"
        tabIndex={0}
      >
        <img src={emojiItem.emojiUrl} alt="pic" className="emoji-pic" />
      </div>
    )
    return ele
  }
}

export default EmojiCard
