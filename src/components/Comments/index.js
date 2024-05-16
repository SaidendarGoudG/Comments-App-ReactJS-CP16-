import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'

import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

const commentsImgUrl =
  'https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png'

class Comments extends Component {
  state = {commentsList: [], name: '', comment: ''}

  onDeleteComment = id => {
    const {commentsList} = this.state

    this.setState({
      commentsList: commentsList.filter(comment => id !== comment.id),
    })
  }

  toggleIsLiked = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  onAddComment = event => {
    event.preventDefault()
    const {name, comment} = this.state

    const initialBackgroundColorClassName = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`

    const newComment = {
      id: uuidv4(),
      name,
      comment,
      date: new Date(),
      isLiked: false,
      initialClassName: initialBackgroundColorClassName,
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      comment: '',
    }))
  }

  onChangeInput = event => {
    this.setState({name: event.target.value})
  }

  onChangeTeaxtarea = event => {
    this.setState({comment: event.target.value})
  }

  render() {
    const {commentsList, name, comment} = this.state

    return (
      <div className="app-container">
        <div className="comment-container">
          <h1 className="heading">Comments</h1>
          <div className="comment-image-container">
            <img
              className="comments-image"
              src={commentsImgUrl}
              alt="comments"
            />
            <form onSubmit={this.onAddComment}>
              <p className="sub-heading">
                Say Something about 4.0 Technologies
              </p>
              <input
                type="text"
                value={name}
                className="input"
                placeholder="Your Name"
                onChange={this.onChangeInput}
              />
              <br />
              <textarea
                id="comment"
                name="comment"
                rows="10"
                cols="50"
                value={comment}
                className="textarea-input"
                placeholder="Your Comment"
                onChange={this.onChangeTeaxtarea}
              />
              <br />
              <button className="button" type="submit">
                Add Comment
              </button>
            </form>
          </div>
        </div>
        <hr className="line" />
        <ul className="comments-list-container">
          <li className="list-item">
            <span className="comments-count">{commentsList.length}</span>{' '}
            Comments
          </li>
          {commentsList.map(eachCommentItem => (
            <CommentItem
              key={eachCommentItem.id}
              CommentDetails={eachCommentItem}
              toggleIsLiked={this.toggleIsLiked}
              onDeleteComment={this.onDeleteComment}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
