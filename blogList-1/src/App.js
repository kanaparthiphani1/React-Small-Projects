import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Header from './components/Header'
import About from './components/About'
import Contact from './components/Contact'
import NotFound from './components/NotFound'
import './App.css'

const App = () => (
  <>
    <div className="outer-cont">
      <div className="inner-cont">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  </>
)

export default App
