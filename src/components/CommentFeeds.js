import React from "react";
import AddComment from "./AddComment";

class CommentFeeds extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      comment: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleCreate = () => {
    const newComment = {
      comment: this.state.comment
    };
    this.state.comment.length > 0 &&
      this.setState({
        comments: [...this.state.comments, newComment],
        comment: ""
      });
  };

  render() {
    return (
      <div>
        <div className="likes">
          <p className="likes-p">좋아요 20개</p>
          <div className="text">
            <p>
              <a href="">#wework</a>
            </p>
          </div>
          <div>
            <AddComment data={this.state.comments} />
          </div>
          <div className="comment">
            <input
              type="text"
              className="comment-input"
              placeholder="댓글 달기"
              onChange={this.handleChange}
              name="comment"
              value={this.state.comment}
            />
            <button id="comment-post" onClick={this.handleCreate}>
              게시
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CommentFeeds;
