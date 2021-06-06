// Write your JS code here
import './index.css'
import CryptocurrencyItem from '../CryptocurrencyItem'

const CryptocurrenciesList = props => {
  const {detailsList} = props
  const ele = (
    <div className="cryptoDetail-list-cont">
      {detailsList.map(eachObj => (
        <CryptocurrencyItem crytpItem={eachObj} />
      ))}
    </div>
  )
  return ele
}

export default CryptocurrenciesList
