import React,{useState} from 'react'
import { Descriptions} from 'antd';
function ProductTable(props) {
 
    return (
        <div>
    <Descriptions title="정보/공유" bordered>
    <Descriptions.Item label="number">{props.detail.writer}</Descriptions.Item>
    <Descriptions.Item label="말머리">{props.detail.continents}</Descriptions.Item>
    <Descriptions.Item label="title">{props.detail.views}</Descriptions.Item>
    <Descriptions.Item label="description">{props.detail.description}</Descriptions.Item>
    </Descriptions>
        </div>
    )
}

export default ProductTable
