import React, { useEffect ,useState } from 'react'
import {Button} from 'antd';
import axios from "axios";
import "./Sections/TarotBoard.css";

function TarotBoard(props) {
    const [Tboards, setTboards] = useState([])

    useEffect(() => {
        axios.post('/api/tboard/gettboard')
        .then(response => {
            if (response.data.success) {
     console.log('response.data',response.data)
     setTboards(response.data.tboardInfo)
            } else {
                alert("상품들을 가져오는데 실패했습니다.")
            }
        })
    },[])

    const table = () => (
        Tboards.map((tboardInfo,index) => (
            <tr key={index}>
            <td>
                {tboardInfo.continents}
            </td>
            <td>
                {tboardInfo.title}
            </td>
            <td>
                {tboardInfo.views}
            </td>
        </tr>
    
        ))
        )
    
     
    return (
        <div>
            <table>
                <thead>
                    
                    <tr>
                        
                        <th>말머리</th>
                        <th>글제목</th>
                        <th>조회수</th>
                    </tr>
                    
                  
                    
                </thead>
                <tbody>
                {table()}
                    </tbody> 
                    <Button><a href='/tarotboard/upload'>글쓰기</a></Button>
            </table>
        </div>
    )
    }
    
    export default TarotBoard