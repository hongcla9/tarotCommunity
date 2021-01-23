import React, { useEffect, useState } from "react";
import { Button } from "antd";
import axios from "axios";
import "./Sections/TarotBoard.css";

function TarotBoard() {
  const [Tboards, setTboards] = useState([]);
  const [Pages, setPages] = useState({});
  const [CurrentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchArray = (query) => {
      const page = query === 0 ? query * 1 + 1 : query;

      axios.post(`/api/tboard/gettboard?page=${page}`).then((response) => {
        if (response.data.success) {
          console.log("response.data", response.data);
          setTboards(response.data.tboardInfo);
          setPages(response.data.paging.pages);
        } else {
          alert("상품들을 가져오는데 실패했습니다.");
        }
      });
    };

    fetchArray(CurrentPage);
  }, [CurrentPage]);

  const table = (props) =>
    Tboards.map((tboardInfo, index) => (
      <tr key={index} style={{ height: "20px", color: "gray" }}>
        <td>{tboardInfo.continents}</td>
        <td>
          <a href={`/tarotboard/${tboardInfo._id}`}>{tboardInfo.title}</a>
        </td>
        <td>{tboardInfo.createdAt}</td>
      </tr>
    ));

  const makePagination = () =>
    [...Array(Pages)].map((x, page) => (
      <span
        class={CurrentPage * 1 === page + 1 ? "page active" : "page"}
        onClick={(event) => setCurrentPage(event.target.innerText)}
      >
        {page + 1}
      </span>
    ));

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>말머리</th>
            <th>글제목</th>
            <th>글쓴날짜</th>
          </tr>
        </thead>
        <tbody style={{ height: "10px" }}>{table()}</tbody>
        <Button>
          <a href="/tarotboard/upload">글쓰기</a>
        </Button>
      </table>

      <div class="pagination">{makePagination()}</div>
    </div>
  );
}

export default TarotBoard;
