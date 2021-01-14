import React, { useEffect ,useState } from 'react'
import axios from "axios";
import "./TDirectory.css";

function TDirectory(props) {
    const [Products, setProducts] = useState([])
    



        axios.post('/api/product/products')
        .then(response => {
            if (response.data.success) {
            console.log('response.data',response.data)
            } else {
                alert("상품들을 가져오는데 실패했습니다.")
            }
        })
    
const table = () => (
    Products.map((productInfo,index) => (
        <tr key={index}>
        <td>
            {productInfo.writer}
        </td>
        <td>
            {productInfo.title}
        </td>
        <td>
            {productInfo.view}
        </td>
        <td>
        <button>
                Remove 
        </button>
        </td>
    </tr>
    ))
    )

return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>continents</th>
                    <th>title</th>
                    <th>description</th>
                    <th>Remove</th>
                </tr>
            </thead>
            <tbody>
                    {table()}
                </tbody>
        </table>
    </div>
)
}

export default TDirectory
