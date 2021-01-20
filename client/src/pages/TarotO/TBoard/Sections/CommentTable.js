import React, { useEffect, useState } from "react";
import { Button } from "antd";
import Axios from "axios";
import { Comment, Tooltip, Avatar } from "antd";

function CommentTable(props) {
  const [Tboards, setTboards] = useState([]);

  useEffect(() => {
    Axios.post("/api/tboard/gettboard").then((response) => {
      if (response.data.success) {
        console.log("response.data", response.data);
        setTboards(response.data.tboardInfo);
      } else {
        alert("댓글을 가져오는데 실패했습니다.");
      }
    });
  }, []);

  const table = (props) =>
    Tboards.map((tboardInfo, index) => (
      <tr key={index}>
        <td style={{ width: "980px" }}>{tboardInfo.comment}</td>
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
