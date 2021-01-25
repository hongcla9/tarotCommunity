import React, { useState, useEffect } from "react";
import Axios from "axios";

function WriteComment(props) {
  const [Comment, setComment] = useState("");

  const CommentChangeHandler = (event) => {
    setComment(event.currentTarget.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
  };
  const body = {
    comment: Comment,
  };
  useEffect(() => {
    Axios.post("/api/tboard/comment", body).then((response) => {
      if (response.data.success) {
        console.log("response.data", response.data);
        setComment(response.data.commentInfo);
      } else {
        alert("글을 가져오는데 실패했습니다.");
      }
    });
  }, []);

  return (
    <form>
      <p>댓글쓰기</p>
      <div onSubmit={submitHandler}>
        <textarea
          className="noresize"
          onChange={CommentChangeHandler}
          value={Comment}
        ></textarea>
      </div>
    </form>
  );
}

export default WriteComment;
