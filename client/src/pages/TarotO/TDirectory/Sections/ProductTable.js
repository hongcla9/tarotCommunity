import React,{useState} from 'react'
import { Button,Descriptions} from 'antd';
import './ProductTable.css';
function ProductTable(props) {

    {/*const [Comment, setComment] = useState("")

    const CommentChangeHandler = (event) => {
        setComment(event.currentTarget.value)
    }*/}

    return (
        <div>
        <Descriptions title="Product Info">
            <Descriptions.Item label="mal">{props.detail.continent}</Descriptions.Item>
            <Descriptions.Item label="title">{props.detail.title}</Descriptions.Item>
            <Descriptions.Item label="View">{props.detail.views}</Descriptions.Item>
            <Descriptions.Item label="Description">{props.detail.description}</Descriptions.Item>
        </Descriptions>

        <br />
        <br />
        <br />
     

    </div>
 
    )
}

export default ProductTable




