import React,{useEffect,useState} from 'react'
import axios from 'axios';
import ProductTable from './ProductTable';
import ProductImage from './ProductImage';
import { Col, Row} from 'antd'
function DetailProductPage(props) {
    const productInfoId = props.match.params.productInfoId
    const [Product, setProduct] = useState({})
    useEffect(()=>{
        axios.get(`/api/product/products_by_id?id=${productInfoId}&type=single`)
        .then(response => {
            if(response.data.success) {
                    console.log('response.data',response.data)
                    setProduct(response.data.productInfo[0])
            }else {
                alert('상세 정보 가져오기를 실패했습니다')
            }
        })
    },[])
    return (
        <div style={{ width: '100%', padding: '3rem 4rem' }}>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <h1>{Product.title}</h1>
            </div>

            <br />
            <Row gutter={[16, 16]} >
                <Col lg={12} sm={24}>
                    {/* ProductImage */}
                    <ProductImage detail={Product} />
                </Col>
                <Col lg={12} sm={24}>
                    {/* ProductInfo */}
                    <ProductTable detail={Product} />
                </Col>
            </Row>
        </div>
    )
}

export default DetailProductPage
