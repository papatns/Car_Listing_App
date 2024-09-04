import {React,useState} from 'react'
import "./pagination.css"
const pagination = ({totalPosts,postPerPage,setCurrentPage}) => {
  console.log("posts",totalPosts)
  let pages =[];
  // const [bgColor , setBgColor] = useState("");
  const [nextButton,setNextButton] = useState("");
  const [prev,setPrev] = useState("");

  for(let i=1; i<=Math.ceil(totalPosts/postPerPage); i++){
    pages.push(i)
  }
  const handleClick=((page)=>{
       setCurrentPage(page);
      //  setBgColor("yellow")
  })

 const handleNext=(pages)=>{
     setNextButton(pages+1)
 }
 const handlePrev=(pages)=>{
  setPrev(pages+1)
}
  console.log("tri",pages)
  return (
    <div className='button_container'>
      <button className='pagination_button' onClick={()=>handlePrev(pages)}>Prev</button>
      {
        pages.map((page,index)=>{
          return <button key={index} onClick={()=>handleClick(page)} className='pagination_button number'>{page}</button>
        })
      }
      <button className='pagination_button' onClick={()=>handleNext}>Next</button>
    </div>
  )
}

export default pagination