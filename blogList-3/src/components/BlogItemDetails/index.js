// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class BlogItemDetails extends Component {
  state = {
    detail: {
      id: null,
      title: null,
      topic: null,
      imageUrl: null,
      avatarUrl: null,
      author: null,
      content: null,
    },
    isLoading: true,
  }

  componentDidMount = () => {
    this.loadBlogItemDetail()
  }

  loadBlogItemDetail = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const resp = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const respJ = await resp.json()

    const updatedResp = {
      id: respJ.id,
      title: respJ.title,
      topic: respJ.topic,
      imageUrl: respJ.image_url,
      avatarUrl: respJ.avatar_url,
      author: respJ.author,
      content: respJ.content,
    }

    this.setState({
      detail: updatedResp,
      isLoading: false,
    })
  }

  render() {
    const {detail, isLoading} = this.state
    console.log(detail)

    const ele = (
      <div className="blogDetail-cont">
        {isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          <>
            <h1 className="detail-head">{detail.title}</h1>
            <div className="author-cont">
              <img src={detail.avatarUrl} className="avatarImg" alt="avatar" />
              <h1 className="author-head1">{detail.author}</h1>
            </div>
            <img src={detail.imageUrl} className="detailImg" alt="detailImg" />
            <p className="detailPara">{detail.content}</p>
          </>
        )}
      </div>
    )
    return ele
  }
}

export default BlogItemDetails
