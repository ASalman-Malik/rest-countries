import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom";
import axios from 'axios'
import About from './About';

const Country = (props) => {
    const params = useParams();
    const[data, setData] = useState([])
    useEffect(()=>{
        axios.get(`https://restcountries.com/v3.1/name/${params.slug}`).then((res)=>{
setData(res.data)
        })
    },[])
  return (
    <div>Country
        <About data={data}/>
        <Link to="/" >Home</Link>
    </div>
  )
}

export default Country