import React, { useEffect, useState } from 'react'
import './App.css'
import Headers from './Components/header/header.jsx'
import Body from './Components/body.jsx'
import Pagination from "./Components/Pagination/pagination.jsx"

function App() {
  const [carData,setCarData] = useState();
  const [CarItem, setCarItem] = useState([]);
  const [modelName,setModelName] = useState([]);
  const [carPrice,setCarPrice] = useState([])
  const [year,setYear] = useState([]);
  const modelVar=[]
  const nameVar=[]
  const yearVar=[]
  const price =[]
  const url = 'https://freetestapi.com/api/v1/cars';



useEffect(()=>{
  const fetchCarData = async () => {
    try {
   
      const response = await fetch(url);
      const result = await response.json();
      console.log("result",result);
      
      result && setCarData(result);
      }
    catch (error) {
      console.error(error);
    }
  };
  fetchCarData();
  },[]);

  console.log("san",carData);

useEffect(()=>{
  carData?.map((item) => {
    modelVar.push(item.model)
    nameVar.push(item.make);
    yearVar.push(item.year);
    price.push(item.price)
    // console.log("namevar",nameVar);
  })
  console.log("model",modelVar);
  // console.log(nameVar);
  nameVar && setCarItem(nameVar);
  modelVar && setModelName(modelVar);
  yearVar && setYear(yearVar);
  price && setCarPrice(price)
},[carData])
console.log("cari",CarItem)
  return (
    <>
      <Headers/>
      <div className='diff'></div>
      {/* {console.log(nameVar)} */}
      {CarItem && modelName && year && carPrice && <Body carData={carData}/>  }
      {/* <Pagination carData={carData}/> */}
    </>
  )
}

export default App;
