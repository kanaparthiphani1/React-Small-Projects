// Write your JS code here
import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class BlogItem extends Component {
  render() {
    const {blogItem} = this.props
    const {id} = blogItem

    const ele = (
      <Link to={`blogs/${id}`} className="blogItemLink">
        <div className="blog-item-out">
          <img src={blogItem.imageUrl} className="blogImg" alt="blogImg" />
          <div className="blog-summary-cont">
            <p className="topic">{blogItem.topic}</p>
            <h1 className="title">{blogItem.title}</h1>
            <div className="author-cont">
              <img
                src={blogItem.avatarUrl}
                className="avatarImg"
                alt="avatar"
              />
              <h1 className="author-head">{blogItem.author}</h1>
            </div>
          </div>
        </div>
      </Link>
    )

    return ele
  }
}

export default BlogItem
