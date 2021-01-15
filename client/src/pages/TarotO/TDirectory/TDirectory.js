import React, { useEffect ,useState } from 'react'
import axios from "axios";
import Meta from 'antd/lib/card/Meta';
import { Col, Card, Row } from 'antd';
import ImageSlider from './Sections/ImageSlider'

function TDirectory(props) {
    const [Products, setProducts] = useState([])
    const [Skip, setSkip] = useState(0)
    const [Limit, setLimit] = useState(8)
const [PostSize, setPostSize] = useState(0)
    
    useEffect(() => {
        let body = {
             skip:Skip,
            limit:Limit}
        getProducts(body)
    },[])
    const getProducts = (body) => {

        axios.post('/api/product/products',body)
        .then(response => {
            if (response.data.success) {
                if(body.loadMore){
                    setProducts([...Products,...response.data.productInfo])
                }
                setPostSize(response.data.postSize)
     setProducts(response.data.productInfo)
            } else {
                alert("상품들을 가져오는데 실패했습니다.")
            }
        })
    }
    const loadMoreHandler = () =>{
         let skip = Skip + Limit 
                      //0 + 8 
                      // 8 + 8 
         let body = {
            skip:Skip,
            limit:Limit,
            loadMore:true 
        }

        getProducts(body)
        setSkip(skip)
    }
const renderCards = Products.map((productInfo,index)=>{
    console.log('productInfo',productInfo)
    return <Col lg={6} md={8} xs={24} key={index}>
    <Card
    cover={<a href={`/product/${productInfo._id}`} ><ImageSlider images={productInfo.images} /></a>}>
        <Meta
        title={productInfo.title}
        description={productInfo.description}/>
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
            {PostSize >= Limit && 
            <div style={{ display:'flex', justifyContent :'center'}}>
           
            </div> 
            }
            <div style={{ display:'flex', justifyContent :'center'}}>
            <a href="/product/upload">add</a>
            <button onClick={loadMoreHandler}>더보기</button>
       
        </div>
        </div>
    )
}

export default TDirectory
