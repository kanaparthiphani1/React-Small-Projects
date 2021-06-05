// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'
import BlogItem from '../BlogItem'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class BlogList extends Component {
  constructor(props) {
    super(props)
    this.state = {blogList: [], isLoading: true}
  }

  componentDidMount = () => {
    this.loadBlogList()
  }

  loadBlogList = async () => {
    const resp = await fetch('https://apis.ccbp.in/blogs')
    const respJ = await resp.json()
    const updatedResp = respJ.map(eachItem => ({
      id: eachItem.id,
      title: eachItem.title,
      topic: eachItem.topic,
      imageUrl: eachItem.image_url,
      avatarUrl: eachItem.avatar_url,
      author: eachItem.author,
    }))

    this.setState({blogList: updatedResp, isLoading: false})
  }

  render() {
    const {blogList, isLoading} = this.state

    const ele = (
      <div className="blog-list-cont">
        {isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          blogList.map(eachItem => <BlogItem blogItem={eachItem} />)
        )}
      </div>
    )

    return ele
  }
}

export default BlogList
