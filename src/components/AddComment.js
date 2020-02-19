import React from "react";

class AddComment extends React.Component {
  render() {
    const addcomment = this.props.data.map((data, key) => {
      return (
        <div key={key}>
          <span>ccy:</span>
          <span>{data.comment}</span>
        </div>
      );
    });
    return <div className="comment">{addcomment}</div>;
  }
}

export default AddComment;
