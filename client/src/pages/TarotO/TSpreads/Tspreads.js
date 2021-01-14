import React, { useEffect ,useState } from 'react'
import axios from "axios";
import Meta from 'antd/lib/card/Meta';
import { Col, Card, Row } from 'antd';

function Tspreads(props) {
    const [Spreads, setSpreads] = useState([])

    useEffect(() => {
        axios.post('/api/spreads/spreads')
        .then(response => {
            if (response.data.success) {
     console.log(response.data)
     setSpreads(response.data.spreadInfo)
            } else {
                alert("상품들을 가져오는데 실패했습니다.")
            }
        })
    },[])
const renderCards = Spreads.map((spreadInfo,index)=>{
    console.log('spreadInfo',spreadInfo)
    return <Col lg={6} md={8} xs={24} key={index}>
    <Card
    cover={<img src={`http://localhost:5000/${spreadInfo.images[0]}`} />}>
        <Meta
        title={spreadInfo.title}
        description={spreadInfo.description}/>
    </Card>
    </Col>
}) 
    return (
        
        <div style={{width:'75%', margin:'3rem auto'}}>
            <div style={{textAlign: 'center'}}>
                <h2>타로 백과사전</h2>
            </div>
<Row gutter={[16,16]}>
{renderCards}
</Row>
       
       

        <div style={{ justifyContent :'center'}}>
        <a href="/spreads/upload">add</a>
        </div>
        </div>
    )
}

export default Tspreads
