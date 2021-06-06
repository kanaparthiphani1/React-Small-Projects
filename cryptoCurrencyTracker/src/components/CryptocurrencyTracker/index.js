// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrenciesList from '../CryptocurrenciesList'
import './index.css'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class CryptocurrencyTracker extends Component {
  state = {cryptoDetails: [], isLoading: true}

  componentDidMount = () => {
    this.getCryptoDetails()
  }

  getCryptoDetails = async () => {
    try {
      const res = await fetch('#USED_PRE_BUILT_API')
      const jsonRes = await res.json()
      this.setState({cryptoDetails: jsonRes, isLoading: false})
    } catch (e) {
      console.log('Error')
    }
  }

  render() {
    const {cryptoDetails, isLoading} = this.state
    const ele = (
      <div className="outer-cont">
        {isLoading ? (
          <div testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <>
            <h1 className="head">Cryptocurrency Tracker</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              className="crytoImg"
              alt="img"
            />
            <div className="coin-out-cont">
              <div className="coin-haed-cont">
                <h1 className="coin-type">Coin Type</h1>
                <div className="cur-typ-cont">
                  <h1 className="curr-typ usd">USD</h1>
                  <h1 className="curr-typ">EURO</h1>
                </div>
              </div>
              <div className="coins-details-cont">
                <CryptocurrenciesList detailsList={cryptoDetails} />
              </div>
            </div>
          </>
        )}
      </div>
    )
    return ele
  }
}

export default CryptocurrencyTracker
