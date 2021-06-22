// Write your code here
import './index.css'

const AppItem = props => {
  const {itemValue} = props
  const ele = (
    <div className="appItem-outer">
      <img src={itemValue.imageUrl} className="appImg" alt="img2" />
      <h1 className="apphead">{itemValue.appName}</h1>
    </div>
  )
  return ele
}

export default AppItem
