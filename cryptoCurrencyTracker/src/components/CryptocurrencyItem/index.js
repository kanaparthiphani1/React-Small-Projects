// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {crytpItem} = props
  const ele = (
    <div className="cryptoCont">
      <div className="crytoLogo">
        <img src={crytpItem.currency_logo} className="curLogo" alt="logo" />
        <h1 className="currencyNAme fontSize">{crytpItem.currency_name}</h1>
      </div>
      <div className="currency-dt-cont">
        <p className="cur fontSize ">{crytpItem.usd_value}</p>
        <p className="cur fontSize ">{crytpItem.euro_value}</p>
      </div>
    </div>
  )
  return ele
}

export default CryptocurrencyItem
