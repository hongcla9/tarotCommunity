import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductTable from "../Sections/ProductTable";
import ProductImage from "../Sections/ProductImage";
import { Col, Row } from "antd";
function WandDetailPage(props) {
  const wandInfoId = props.match.params.wandInfoId;
  const [wand, setwand] = useState({});
  useEffect(() => {
    axios
      .get(`/api/wand/wands_by_id?id=${wandInfoId}&type=single`)
      .then((response) => {
        if (response.data.success) {
          console.log("response.data", response.data);
          setwand(response.data.wandInfo[0]);
        } else {
          alert("상세 정보 가져오기를 실패했습니다");
        }
      });
  }, []);
  return (
    <div style={{ width: "100%", padding: "3rem 4rem" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1>{wand.title}</h1>
      </div>

      <br />
      <Row gutter={[16, 16]}>
        <Col lg={12} sm={24}>
          {/* ProductImage */}
          <ProductImage detail={wand} />
        </Col>
        <Col lg={12} sm={24}>
          {/* ProductInfo */}
          <ProductTable detail={wand} />
        </Col>
      </Row>
    </div>
  );
}

export default WandDetailPage;
