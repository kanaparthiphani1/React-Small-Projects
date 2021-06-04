// Write your JS code here
import './index.css'
import BlogItem from '../BlogItem'

const BlogList = props => {
  const {listItems, listLen} = props
  const ele = listItems.map(eachItem => (
    <BlogItem listItem={eachItem} listLen={listLen} />
  ))
  return ele
}

export default BlogList
