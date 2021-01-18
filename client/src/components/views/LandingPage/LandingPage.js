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
          <td style={{border:'none', width:'110px'}}>
          {tboardInfo.continents}
          </td>
          <td style={{border:'none'}}>
          <a href={`/tarotboard/${tboardInfo._id}`}>{tboardInfo.title}</a>
          </td>
          <td style={{border:'none'}}>
              {tboardInfo.createdAt}
          </td>
      </tr>
  
      ))
      )
  

   return (
    <div>
    <ImageSlider /> 
     <form>
       <div style={{width:'50%', height:'30%' }}>
       
       <table style={{border:'none'}}>
       
           <thead>
           <h3>타로 정보/공유</h3>
             <tr style={{border:'none'}}>
                              
             </tr>
           </thead>
           <tbody className="Tboard" style={{border:'none'}} >
           {table()}
               </tbody> 
       </table>
       </div>
     </form>
  </div> 
  
   )
   
}



export default withRouter(LandingPage)
