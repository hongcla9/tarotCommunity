import React, { useState, useEffect } from "react";
import { Button, Form } from "antd";
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
  const saveComment = (e) => {
    e.preventDefault();
    Axios.post("/api/tboard/comment", body).then((response) => {
      if (response.data.success) {
        alert("업로드에 성공 했습니다.");
      } else {
        alert("글을 업로드하는데 실패했습니다.");
      }
    });

    return (
      <table className="commentTable" onSubmit={submitHandler}>
        <h1>댓글쓰기</h1>
        <div className="text">
          <textarea onChange={CommentChangeHandler} value={Comment}></textarea>
          <Button type="submit" onClick={saveComment}>
            등록
          </Button>
        </div>
      </table>
    );
  };
}
export default WriteComment;
