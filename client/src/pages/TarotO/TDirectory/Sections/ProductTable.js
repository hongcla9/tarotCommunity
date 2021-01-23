import React, { useState } from "react";
import { Button, Descriptions } from "antd";
import "./ProductTable.css";
function ProductTable(props) {
  {
    /*const [Comment, setComment] = useState("")

    const CommentChangeHandler = (event) => {
        setComment(event.currentTarget.value)
    }*/
  }

  return (
    <div>
      <table>
        <td style={{ fontSize: "20px", fontWeight: "bold" }}>
          {props.detail.title}
        </td>
        <br></br>
        <br></br>
        <br></br>
        <td style={{ textAlign: "center" }}>{props.detail.description}</td>
      </table>

      <br />
      <br />
      <br />
    </div>
  );
}

export default ProductTable;
