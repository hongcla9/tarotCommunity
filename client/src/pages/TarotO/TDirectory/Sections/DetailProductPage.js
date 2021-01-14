import React,{useEffect,useState} from 'react'
import axios from 'axios';
import ProductImage from './ProductImage';
import ProductTable from './ProductTable';
import {Row,Col} from 'antd';
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
    })
    return (
        <form div style={{width:'100', padding:'3rem 4rem'}}>
            <div style={{display:'flex',justifyContent:'center'}}>
                <h1>{Product.title}</h1>
                 </div>
                 <br/>
                 <Row gutter={[16,16]}>
                    <Col lg={24} sm={24}>
                    <ProductImage detail={Product}/>
                    </Col>
                   
                    <Col lg={24} sm={24}>
                    <ProductTable detail={Product}/>
                    </Col>
                    
                 </Row>
            
            
        
        </form>
    )
}

export default DetailProductPage
