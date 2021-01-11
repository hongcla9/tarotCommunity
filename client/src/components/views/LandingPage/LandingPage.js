import React,{useEffect} from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'
function LandingPage(props) {
    useEffect(() => {
        axios.get('/api/hello')
            .then(response => { console.log(response) })
    }, [])
    const onClickHandler = () => {
    axios.get(`/api/users/logout`)
        .then(response => {
        if(response.data.success) {
            props.history.push("/login")
         console.log(response.data)
        }else {
            alert('로그아웃하는데 실패했습니다.')
        }
    })
    }
        return (
        <div style={{
            display:'flex', justifyContent:'center', alignItems:'center',
            width: '100%', height : '100vh'
        }}>
         
        </div>

       
    )
}

export default withRouter(LandingPage)
