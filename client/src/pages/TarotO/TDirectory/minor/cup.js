import React, { useEffect, useState } from "react";
import axios from "axios";
import Meta from "antd/lib/card/Meta";
import { Col, Card, Row } from "antd";
import ImageSlider from "../ImageSlider";
import TdirecImageSlider from "../Sections/TdirecImageSlider";
function TDirectory(props) {
  const [Products, setProducts] = useState([]);
  const [Skip, setSkip] = useState(0);
  const [Limit, setLimit] = useState(8);
  const [PostSize, setPostSize] = useState(0);

  useEffect(() => {
    let body = {
      skip: Skip,
      limit: Limit,
    };
    getProducts(body);
  }, []);
  const getProducts = (body) => {
    axios.post("/api/product/products", body).then((response) => {
      if (response.data.success) {
        if (body.loadMore) {
          setProducts([...Products, ...response.data.productInfo]);
        }
        setPostSize(response.data.postSize);
        setProducts(response.data.productInfo);
      } else {
        alert("상품들을 가져오는데 실패했습니다.");
      }
    });
  };
  const loadMoreHandler = () => {
    let skip = Skip + Limit;
    //0 + 8
    // 8 + 8
    let body = {
      skip: Skip,
      limit: Limit,
      loadMore: true,
    };

    getProducts(body);
    setSkip(skip);
  };
  const renderCards = Products.map((productInfo, index) => {
    console.log("productInfo", productInfo);
    return (
      <Col lg={6} md={8} xs={24} key={index}>
        <Card
          cover={
            <a href={`/product/${productInfo._id}`}>
              <ImageSlider images={productInfo.images} />
            </a>
          }
        >
          <Meta
            title={productInfo.title}
            description={productInfo.description}
          />
        </Card>
      </Col>
    );
  });

  return (
    <div style={{ width: "75%", margin: "3rem auto" }}>
      <TdirecImageSlider />
      <div style={{ textAlign: "center" }}>
        <h2>타로 백과사전</h2>
        <p>
          주요 Arcana 타로 카드의 의미 주요 Arcana 타로 카드는 삶의 교훈, 업장의
          영향 및 깨달음을 향한 영혼의 여정에 영향을 미치는 큰 원형 테마를
          나타냅니다. 주요 Arcana 카드의 의미는 깊고 복잡합니다 – 아름다운
          방식으로! 이 타로 카드는 인간 의식의 구조를 진정으로 표현하고 시대를
          거쳐 내려온 삶의 교훈의 열쇠를 담고 있습니다. 트럼프 카드라고도 알려진
          Major Arcana 카드에는 번호가 매겨진 21 장의 카드와 번호가 매겨지지
          않은 1 장의 카드 (Fool)가 포함됩니다. The Fool은 Major Arcana의
          주인공이며 각 카드를 통해 여행을하며 새로운 교사를 만나고 새로운 삶의
          교훈을 배우고 결국에는 World 카드로 그의 여정을 완료합니다. 이것은
          Fool 's Journey로 알려져 있으며 Major Arcana 타로 카드 의미의 스토리
          라인을 이해하는 데 도움이되는 방법입니다. 타로 읽기에서 Major Arcana
          카드는 무엇을 의미합니까? 타로 독서에서 Major Arcana 카드를 보면 현재
          경험하고있는 삶의 교훈과 주제에 대해 성찰하라는 부름을 받고 있습니다.
          Major Arcana 카드는 종종 전체 타로 읽기에 대한 장면을 설정하며 다른
          카드는 핵심 Arcana 의미와 관련이 있습니다. 타로 독서가 대부분 아르카나
          타로 카드 일 때 그것은 무엇을 의미합니까? 타로 읽기가 주로 주요 Arcana
          카드로 구성되어 있으면 장기적인 영향을 미칠 수있는 인생을 바꾸는
          이벤트를 경험하게됩니다. 영적, 개인적 탐구에서 더 발전하기
          위해주의해야 할 중요한 교훈이 있습니다. 그러나 주요 Arcana 타로 카드의
          대부분이 뒤집힌 경우 이러한 중요한 삶의 교훈에 충분한주의를 기울이지
          않고 있으며 앞으로 나아 가기 전에 먼저 교훈을 마스터해야한다는 신호일
          수 있습니다.
        </p>
      </div>
      <Row gutter={[16, 16]}>{renderCards}</Row>
      {PostSize >= Limit && (
        <div style={{ display: "flex", justifyContent: "center" }}></div>
      )}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <a href="/product/upload">add</a>
        <button onClick={loadMoreHandler}>더보기</button>
      </div>
    </div>
  );
}

export default TDirectory;
