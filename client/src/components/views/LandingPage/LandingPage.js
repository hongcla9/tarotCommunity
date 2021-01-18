import React,{useEffect, useState} from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'
import ImageSlider from '../utils/ImageSlider';
import './LandingPage.css'
function LandingPage() {
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

  const table = (props) => (
      Tboards.map((tboardInfo,index) => (
          <tr key={index}>
          <td>
          {tboardInfo.continents}
          </td>
          <td>
          <a href={`/tarotboard/${tboardInfo._id}`}>{tboardInfo.title}</a>
          </td>
          <td>
              {tboardInfo.views}
          </td>
      </tr>
  
      ))
      )
  

   return (
       <div>
         <ImageSlider /> 
          <form>
            <div style={{width:'50%', height:'50%'}}> 
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {table()}
                    </tbody> 
            </table>
        </div>
          </form>
       </div> 

     


   )
   
}



export default withRouter(LandingPage)
