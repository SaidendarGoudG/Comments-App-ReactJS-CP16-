// Write your code here
import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {CommentDetails, toggleIsLiked, onDeleteComment} = props
  const {id, name, comment, date, isLiked, initialClassName} = CommentDetails

  const initial = name ? name[0].toUpperCase() : ''

  const deleteImgUrl =
    'https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png'

  const likeImgUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const textLikeColor = isLiked ? 'like-text active' : 'like-text'

  const onClickDel = () => {
    onDeleteComment(id)
  }

  const onClickLike = () => {
    toggleIsLiked(id)
  }

  return (
    <li>
      <div className="comments-item-container">
        <div className={initialClassName}>
          <p>{initial}</p>
        </div>
        <div>
          <h1 className="user-name">
            {name} <span className="time">{formatDistanceToNow(date)}</span>
          </h1>
          <p>{comment}</p>
        </div>
      </div>
      <div className="like-del-container">
        <div className="like-image-container">
          <img className="like-image" src={likeImgUrl} alt="like" />
          <button
            className="button-transparent"
            type="button"
            onClick={onClickLike}
          >
            <p className={textLikeColor}>Like</p>
          </button>
        </div>
        <button
          className="button-transparent del-image-container"
          type="button"
          data-testid="delete"
          onClick={onClickDel}
        >
          <img className="del-image" src={deleteImgUrl} alt="delete" />
        </button>
      </div>
      <hr className="line" />
    </li>
  )
}

export default CommentItem
