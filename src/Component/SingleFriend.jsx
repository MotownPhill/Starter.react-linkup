import React from "react";

let SingleFriend = (props) => {
  const oneFriend = props.friend;

  const onFriendClickedFull = function () {
    props.delete(oneFriend);
  };

  const onFriendClicked = function () {
    props.edit(oneFriend);
  };

  return (
    <div className="card col-md-3">
      <img
        src={oneFriend.primaryImage && oneFriend.primaryImage.imageUrl}
        style={{ width: 200, height: 200, borderRadius: 200 / 2 }}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{oneFriend.title}</h5>
        <p className="card-text">{oneFriend.summary}</p>
        <button
          type="button"
          className="btn btn-primary"
          onClick={onFriendClicked}
          data-friend-id={oneFriend.id}
        >
          Edit
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={onFriendClickedFull}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default React.memo(SingleFriend);
