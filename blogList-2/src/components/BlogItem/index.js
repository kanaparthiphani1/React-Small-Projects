// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {listItem, listLen} = props
  const ele = (
    <>
      <div className="blog-item-out">
        <div className="blog-item-top">
          <h1 className="blog-head">{listItem.title}</h1>
          <p className="blog-date">{listItem.publishedDate}</p>
        </div>
        <p className="blog-para">{listItem.description}</p>
      </div>
      {listItem.id !== listLen && <hr />}
    </>
  )

  return ele
}

export default BlogItem
