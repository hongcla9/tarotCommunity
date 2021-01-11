import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import {
  Typography,
  Form,
  Input,
  Button,
  Select,
} from 'antd';

const {Textarea} = Input;

const Continents = [
    { key: 1, value: "Africa" },
    { key: 2, value: "Europe" },
    { key: 3, value: "Asia" }
]

function Upload() {
const [Title, setTitle] = useState("")
const [Discription, setDiscription] = useState("")
const [ContinentValue, setContinentValue] = useState(1)
const [Images, setImages] = useState([])

    const titleChangeHandler = (event) => {
        setTitle(event.currentTarget.value)
    }
    const discriptionChangeHandler = (event) => {
        setDiscription(event.currentTarget.value)
            }
     const ContinentsSelectChange = (event) => {
        setContinentValue(event.currentTarget.value)
            }
        

    return (
       <div style={{ maxWidth:'700px', margin:'2rem auto'}}>
        <div style={{ textAlign:'center', marginBottom:'2rem'}}>
            <h2>글쓰기</h2>
            </div>
            <Form>
                {/* DROP ZONE*/}
                <br/>
                <br/>
                <Select onChange={ContinentsSelectChange} value={ContinentValue}>
                    {Continents.map(item => (
                        <option key={item.key} value={item.key}>{item.value} </option>
                    ))}
                </Select>
                <Label>제목을 입력하세요.</Label>
                <input onChange={titleChangeHandler} value={Title}/>
                <br/>
                <br/>
                <Label>내용을 입력하세요.</Label>
                <Textarea onChange={discriptionChangeHandler} value={Discription}/>
                <br/>
                <br/>
                <Button>
                    확인
                </Button>
            </Form>
            </div>
    )
}

export default Upload
