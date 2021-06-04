import './index.css'
import BlogList from '../BlogList'

const blogsData = [
  {
    id: 1,
    title: 'My first post',
    description: 'A high quality solution beautifully designed for startups',
    publishedDate: 'Aug 2nd',
  },
  {
    id: 2,
    title: 'My second post',
    description:
      'A high quality solution beautifully designed for startups and Bussiness schools',
    publishedDate: 'Mar 1st',
  },
  {
    id: 3,
    title: 'My third post',
    description: 'A high quality solution beautifully designed for startups',
    publishedDate: 'Jan 2nd',
  },
  {
    id: 4,
    title: 'My fourth post',
    description:
      'A high quality solution beautifully designed for startups and Bussiness schools. ',
    publishedDate: 'Dec 24th',
  },
  {
    id: 5,
    title: 'My fifth post',
    description: 'A high quality solution beautifully designed for startups',
    publishedDate: 'Nov 10th',
  },
]
const Home = () => {
  const arrLen = blogsData.length
  const ele = (
    <div className="home-container">
      <div className="top-cont">
        <img
          src="https://assets.ccbp.in/frontend/react-js/profile-img.png"
          className="avatar"
          alt="avatar"
        />
        <h1 className="top-head">Wade Warren</h1>
        <p className="role">Software Developer at UK</p>
      </div>
      <div className="blog-list-outer">
        <BlogList listItems={blogsData} listLen={arrLen} />
      </div>
    </div>
  )
  return ele
}

export default Home
