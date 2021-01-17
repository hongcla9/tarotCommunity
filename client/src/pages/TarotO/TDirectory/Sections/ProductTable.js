import React,{useState} from 'react'
import { Button} from 'antd';
import './ProductTable.css';
function ProductTable(props) {


    const [Comment, setComment] = useState("")

    const CommentChangeHandler = (event) => {
        setComment(event.currentTarget.value)
    }

    return (
        <form>
            <h2>정보/공유</h2>
    <table width="100">
     
        <tr>
            <td className="con">{props.detail.continents}</td>
            <td className="title">{props.detail.title}</td>
            <td className="createat">{props.detail.createdAt}</td>
        </tr>
            <tr className="des">{props.detail.description}</tr>
            <br/>
            <br/>
            <br/>
            <p>댓글쓰기</p>
            <textarea class="noresize" onChange={CommentChangeHandler} value={Comment} ></textarea><Button>등록</Button>  
            <br/>
            <br/>
            <br/>
            <Button href="/product/update">수정</Button>
            <Button href="/tarotdictionary">목록으로</Button>
          
    </table>
    </form>
    )
}

export default ProductTable




