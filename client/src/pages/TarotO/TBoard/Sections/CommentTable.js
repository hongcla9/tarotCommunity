import React, { useEffect, useState } from "react";
import Axios from "axios";

const ShowTable = ({ commentInfo }) => {
  console.log(commentInfo);
  // comment 부분 출력되는 테이블
  return (
    <>
      <tr>
        <td style={{ width: "980px" }}>{commentInfo.comment}</td>
      </tr>
    </>
  );
};

function CommentTable(props) {
  const [comment, setComment] = useState([]);
  const [isloading, setIsloading] = useState(false);

  useEffect(() => {
    Axios.post("/api/tboard/commentInfo").then((response) => {
      if (response.data) {
        const { commentInfo } = response.data;
        setComment(commentInfo);
        setIsloading(true);
      } else {
        alert("글을 가져오는데 실패했습니다.");
      }
    });
  }, []);

  // const showTable = comment.map((commentInfo, index) => {
  //   return (
  //     <tr key={index}>
  //       <td style={{ width: "980px" }}></td>
  //     </tr>
  //   );
  // });

  return (
    // <Comment style={{ width: "980px" }
    <>
      {isloading ? (
        <>
          <h1>댓글 리스트</h1>
          <table style={{ width: "100%" }}>
            <thead>
              <tr>
                {comment.length > 0 &&
                  comment.map((commentInfo, index) => (
                    <ShowTable key={index} commentInfo={commentInfo} />
                  ))}
              </tr>
            </thead>
          </table>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </>
    // </Comment>
  );
}

export default CommentTable;
