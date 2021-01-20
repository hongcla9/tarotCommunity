import React, { useEffect, useState } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import ImageSlider from "../utils/ImageSlider";
import "./LandingPage.css";
function LandingPage() {
  const [Tboards, setTboards] = useState([]);
  const [Pages, setPages] = useState({});
  const [CurrentPage, setCurrentPage] = useState(1);
  // const [Page, setPage] = useState(0);

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
      <tr key={index}>
        <td style={{ border: "none", width: "110px" }}>
          {tboardInfo.continents}
        </td>
        <td style={{ border: "none" }}>
          <a href={`/tarotboard/${tboardInfo._id}`}>{tboardInfo.title}</a>
        </td>
        <td style={{ border: "none" }}>{tboardInfo.createdAt}</td>
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
      <ImageSlider />
      <form>
        <div style={{ width: "50%", height: "30%" }}>
          <table style={{ border: "none" }}>
            <thead>
              <h3>타로 정보/공유</h3>
              <tr style={{ border: "none" }}></tr>
            </thead>
            <tbody className="Tboard" style={{ border: "none" }}>
              {table()}
            </tbody>
          </table>
          <div class="pagination">{makePagination()}</div>
        </div>
      </form>
    </div>
  );
}

export default withRouter(LandingPage);
