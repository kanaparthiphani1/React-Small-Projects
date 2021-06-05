import './index.css'
import BlogList from '../BlogList'

const Home = () => (
  <div className="home-container">
    <div className="top-cont">
      <img
        src="https://assets.ccbp.in/frontend/react-js/profile-img.png"
        className="avatar"
        alt="avatar"
      />
      <h1 className="top-head">Wade Warren</h1>
      <p className="top-para">Software Developer at UK</p>
    </div>
    <BlogList />
  </div>
)

export default Home
