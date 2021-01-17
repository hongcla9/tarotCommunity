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
    },[])
    return (
        <form>
            <div>
                    <ProductTable detail={Product}/>
            </div>
        </form>
    )
}

export default DetailProductPage
