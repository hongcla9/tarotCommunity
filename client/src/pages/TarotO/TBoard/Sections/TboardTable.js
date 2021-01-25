import React, { useState, useEffect } from "react";
import { Button } from "antd";
import "./TboardTable.css";
import Axios from "axios";
import CommentTable from "./CommentTable";
import WriteComment from "./WriteComment";
function TboardTable(props) {
  Axios.post("/api/tboard/gettboard").then((response) => {
    if (response.data.success) {
      console.log("response.data", response.data);
      alert("업로드에 성공 했습니다.");
    } else {
      alert("업로드에 실패 했습니다.");
    }
  });
}

return (
  <form>
    <h2>정보/공유</h2>
    <table width="100">
      <tr>
        <td className="con">{props.detail.continents}</td>
        <td className="title">{props.detail.title}</td>
        <td className="createat">{props.detail.createdAt}</td>
      </tr>
      <tr className="des" style={{ paddingTop: "50px" }}>
        {props.detail.description}
      </tr>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Button href={"/tarotboard/update/" + props.detail["_id"]}>수정</Button>
      <Button href="/tarotdictionary">목록으로</Button>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <WriteComment />
      <CommentTable />
    </table>
  </form>
);

export default TboardTable;
