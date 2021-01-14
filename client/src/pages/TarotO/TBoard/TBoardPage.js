import React,{useState} from 'react'
import SearchFeature from './Sections/SearchFeature'
function TBoard() {
    const [SearchTerm, setSearchTerm] = useState("")
    
    const updateSearchTerm=(newSearchTerm)=>{
     setSearchTerm(newSearchTerm)
    }
    return (
        <div>
            <div style={{display:'flex', justifyContent:'flex-end',marginBottom:'30px'}}>
            <SearchFeature
            refreshFunction={updateSearchTerm}/>
            </div>
       
        </div>
    )
}

export default TBoard