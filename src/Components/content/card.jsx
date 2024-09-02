import React from 'react'
import "./card.css"
import Image from "../../assets/images1.jpg"

const card = (props) => {
    // console.log("anita",props?.modelCardName)

    // const uniqueCarModel = [...new Set(props?.carData?.make)]
    // console.log("unique",uniqueCarModel);

  return (
    <div className='main_card'>
        <div className='card_details'>
            <div className='top'>
                <img src={Image}/>
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