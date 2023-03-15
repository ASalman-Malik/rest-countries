import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = (props) => {
    const navigate = useNavigate();
    console.log("Props",props)
    const handleClick = (name) => {
       navigate(`/country/${name}`)
    }
  return (
    <div className='container' style={{display:'flex', flexWrap:'wrap', justifyContent:'center'}}>
        {props.data.map((item,index)=>(
           <div style={{border:'1px solid green', width:'350px',margin:'10px',cursor:'pointer'}}  onClick={()=>handleClick(item.name.common)}>
            <img src={item.flags.png} alt={item.name.common}/>
             <p>Name : {item.name.common}</p>
             <p>Population : {item.population}</p>
             <p>Currency : {item.continents}</p>
           </div>
        ))}
    </div>
  )
}

export default About