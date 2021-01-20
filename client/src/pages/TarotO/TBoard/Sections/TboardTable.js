import React, { useState } from "react";
import { Button } from "antd";
import "./TboardTable.css";
import Axios from "axios";
function TboardTable(props) {
  const [Comment, setComment] = useState("");

  const CommentChangeHandler = (event) => {
    setComment(event.currentTarget.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();

    const body = {
      comment: Comment,
    };
    Axios.post("/api/tboard/comment", body).then((response) => {
      if (response.data.success) {
        console.log("response.data", response.data);
        alert("업로드에 성공 했습니다.");
      } else {
        alert("업로드에 실패 했습니다.");
      }
    });
  };
  return (
    <form>
      <h2>정보/공유</h2>
      <table width="100">
        <tr>
          <td className="con">{props.detail.continents}</td>
          <td className="title">{props.detail.title}</td>
          <td className="createat">{props.detail.createdAt}</td>
        </tr>
        <tr className="des">{props.detail.description}</tr>
        <br />
        <br />
        <br />
        <p>댓글쓰기</p>
        <div onSubmit={submitHandler}>
          <textarea onChange={CommentChangeHandler} value={Comment}></textarea>
          <Button type="submit" onClick={submitHandler}>
            등록
          </Button>
        </div>
        <br />
        <br />
        <br />
        <Button href={"/tarotboard/update/" + props.detail['_id']}>수정</Button>
        <Button href="/tarotdictionary">목록으로</Button>
      </table>
    </form>
  );
}

export default TboardTable;
