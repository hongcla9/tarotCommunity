import React, { useEffect, useState } from "react";
import Axios from "axios";

function CommentTable(props) {
  const [Comment, setComment] = useState("");

  useEffect(() => {
    Axios.post("/api/tboard/commentInfo").then((response) => {
      if (response.data.success) {
        console.log("response.data", response.data);
        setComment(response.data.commentInfo);
      } else {
        alert("글을 가져오는데 실패했습니다.");
      }
    });
  }, []);

  const table = (props) =>
    Comment.map((commentInfo, index) => (
      <tr key={index}>
        <td style={{ width: "980px" }}>{commentInfo.comment}</td>
      </tr>
    ));

  return (
    <Comment style={{ width: "980px" }}>
      <h1>댓글 리스트</h1>
      <table style={{ width: "100%" }}>
        <thead>
          <tr>
            <tbody>{table()}</tbody>
          </tr>
        </thead>
      </table>
    </Comment>
  );
}

export default CommentTable;
