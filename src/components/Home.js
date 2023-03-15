import axios from 'axios'
import React, { useEffect, useState } from 'react'
import About from './About'

const Home = () => {
    const[data,setData] = useState([])
    const[data1, setData1] = useState([])
    const [searchInput, setSearchInput] = useState("");
    useEffect(()=>{
        axios.get(`https://restcountries.com/v3.1/all`).then((res)=>{
setData(res.data)
setData1(res.data)
        })
    },[])
    const handleChangeInput = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
          setData(
          data1.filter((x) =>
            x?.name?.common
              ?.toLowerCase()
              ?.includes(e?.target?.value?.toLowerCase())
          )
        );
      };
    
  return (
   <>
    <div>Home</div>
    <input type='text' value={searchInput} onChange={handleChangeInput}/>
    <About data={data}/></>
  )
}

export default Home