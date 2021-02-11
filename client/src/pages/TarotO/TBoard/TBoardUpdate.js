import React, { useState, useEffect } from "react";
import { Typography, Button, Form, Input } from "antd";
import TBoardFileUpload from "./TBoardFileUpload";
import Axios from "axios";
const { TextArea } = Input;

const Continents = [
  { key: 1, value: "Africa" },
  { key: 2, value: "Europe" },
  { key: 3, value: "Asia" },
  { key: 4, value: "North America" },
  { key: 5, value: "South America" },
  { key: 6, value: "Australia" },
  { key: 7, value: "Antarctica" },
];

function TBoardUpdate(props) {
  const tboardInfoId = props.match.params.tboardInfoId;
  const [Tboards, setTboards] = useState({});
  useEffect(() => {
    Axios.get(`/api/tboard/tboard_by_id?id=${tboardInfoId}&type=single`).then(
      (response) => {
        if (response.data.success) {
          console.log("response.data", response.data);
          const info = response.data.tboardInfo[0];
          setTboards(response.data.tboardInfo[0]);
          setTitle(info.title);
          setDescription(info.description);
          setContinent(info.continents);
          setImages(info.images);
        } else {
          alert("상세 정보 가져오기를 실패했습니다");
        }
      }
    );
  }, []);

  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [Continent, setContinent] = useState(1);
  const [Images, setImages] = useState([]);

  const titleChangeHandler = (event) => {
    setTitle(event.currentTarget.value);
  };

  const descriptionChangeHandler = (event) => {
    setDescription(event.currentTarget.value);
  };

  const continentChangeHandler = (event) => {
    setContinent(event.currentTarget.value);
  };

  const updateImages = (newImages) => {
    setImages(newImages);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    //서버에 채운 값들을 request로 보낸다.

    const body = {
      //로그인 된 사람의 ID
      id: tboardInfoId,
      writer: props.user.userData._id,
      title: Title,
      description: Description,
      images: Images,
      continent: Continent,
    };

    if (!Title || !Description || !Continent || Images.length === 0) {
      return alert(" 모든 값을 넣어주셔야 합니다.");
    }

    Axios.post("/api/tboard/update", body).then((response) => {
      if (response.data.success) {
        alert("상품 업로드에 성공 했습니다.");
        props.history.push("/tarotboard");
      } else {
        alert("상품 업로드에 실패 했습니다.");
      }
    });
  };

  return (
    <div style={{ maxWidth: "700px", margin: "2rem auto" }}>
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h2>글쓰기</h2>
      </div>

      <Form onSubmit={submitHandler}>
        {/* DropZone */}
        <TBoardFileUpload refreshFunction={updateImages} />

        <br />
        <br />
        <label>제목</label>
        <Input onChange={titleChangeHandler} value={Title} />
        <br />
        <br />
        <label>설명</label>
        <TextArea onChange={descriptionChangeHandler} value={Description} />
        <br />
        <br />
        <select onChange={continentChangeHandler} value={Continent}>
          {Continents.map((item) => (
            <option key={item.key} value={item.key}>
              {" "}
              {item.value}
            </option>
          ))}
        </select>
        <br />
        <br />
        <Button type="submit" onClick={submitHandler}>
          확인
        </Button>
      </Form>
    </div>
  );
}

export default TBoardUpdate;
