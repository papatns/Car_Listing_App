import React from 'react'
import "./card.css"
import Image from "../../assets/images1.jpg"
import Images from "../../data.json"

const card = (props) => {
    // console.log("anita",props?.modelCardName)

    // const uniqueCarModel = [...new Set(props?.carData?.make)]
    // console.log("unique",uniqueCarModel);
    console.log("iiii",Images)

  return (
    <div className='main_card'>
        <div className='card_details'>
            <div className='top'>
                {Images?.map((value,index)=>{
                   {console.log("vvvv",value.url)}
                    <img src={value.url} alt={index}/>
                    
                })}
                {/* <img src={Images}/> */}
            </div>
            <div className='bottom'>
                <div className='all_details'>
                    {/* {props?.modelCardName?.map((item,index)=>{ */}
                        {/* console.log("item",item) */}
                    <a href='#' className='car_model'>{props?.modelCardName?.make}</a>
                    {/* })} */}
                    <div className='divide'></div>
                    <div  className='details'>
                        <div className='car_year'>{props?.modelCardName?.year}</div>
                        <div>{props?.modelCardName?.model}</div>
                        <div>{props?.modelCardName?.color}</div>
                    </div>
                    <div className='Selling_price'>Selling Price</div>
                    <div className='car_price'>{props?.modelCardName?.price}</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default card