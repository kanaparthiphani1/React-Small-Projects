// Write your code here
import './index.css'

const TabItem = props => {
  const onTabSelect = () => {
    const {tabChnage, itemValue} = props
    tabChnage(itemValue.tabId)
  }

  const {itemValue, isActice} = props
  const activeFontStyle = isActice === true ? 'activeFontStyle' : ''
  const activeBorderStyle = isActice === true ? 'activeBorderStyle' : ''

  const ele = (
    <div className="tabItem" onClick={onTabSelect} role="button" tabIndex={0}>
      <p className={`tabField ${activeFontStyle}`}>{itemValue.displayText}</p>
      <hr className={`horLine ${activeBorderStyle}`} />
    </div>
  )
  return ele
}

export default TabItem
