import React,{useEffect,useState} from 'react'
import axios from 'axios';
import TboardTable from './TboardTable';
function DetailTboardPage(props) {
    const tboardInfoId = props.match.params.tboardInfoId
    const [Tboards, setTboards] = useState({})
    useEffect(()=>{
        axios.get(`/api/tboard/tboard_by_id?id=${tboardInfoId}&type=single`)
        .then(response => {
            if(response.data.success) {  
                    console.log('response.data',response.data)
                    setTboards(response.data.tboardInfo[0])
            }else {
                alert('상세 정보 가져오기를 실패했습니다')
            }
        })
    },[])
    return (
        <form>
            <div>
                    <TboardTable detail={Tboards}/>
            </div>
        </form>
    )
}

export default DetailTboardPage
