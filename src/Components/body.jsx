import React, { useEffect, useState } from "react";
import Card from "./content/card";
import "./body.css";
import Pagination from "./Pagination/pagination";
import Images from "../data.json"

const body = (props) => {
  console.log("ppp", props);
  console.log("pp", props?.carData?.length);
  const [images,setImages] = useState("")
  setImages(Images)
  // const Data = props.length;
  // console.log("data",Data);
  // console.log(props.modelName)
  // console.log("body model",modelVar)
  // const [selectedCategory,setSelectedCategory] = useState("");
  //  selectedCategory && console.log("boduset",selectedCategory
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 6;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  console.log("page", props?.carData);
  const records = props?.carData?.slice(firstIndex, lastIndex);
  console.log("rec", records);

  const [dropSelectedCategory, setDropSelectedCategory] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  console.log("abcde", dropSelectedCategory);
  // const [clearAll,setClearAll] = useState("");

  const handlerCategoryChange = (e) => {
    setDropSelectedCategory(e.target.value);
  };
  const handlerSelectedModel = (e) => {
    setSelectedModel(e.target.value);
  };
  const arr = [];
  
  useEffect(()=>{
    <Card modelCardName={props?.carData} />
  },[images])

  return (
    <div>
      <div className="actual_body">
        <div>
          <div className="dropdown_main">
            <div className="dropdown_section">
              <p className="dropdown_header">Select Car Make</p>
              <select
                className="dropdown_input"
                value={dropSelectedCategory}
                onChange={handlerCategoryChange}
              >
                <option value="">Select</option>
                {props?.carData?.map((item, index) => {
                  return (
                    !arr.includes(item?.make) && (
                      <>
                        <option key={index} value={item?.make}>
                          {item?.make}
                        </option>
                        {arr.push(item?.make)}
                      </>
                    )
                  );
                })}
              </select>
            </div>
            <div className="dropdown_section">
              <p className="dropdown_header">Select Model</p>
              <select
                className="dropdown_input"
                onChange={handlerSelectedModel}
              >
                <option value="">Select</option>

                {dropSelectedCategory &&
                  props?.carData?.map((item, index) => {
                    return (
                      item.make === dropSelectedCategory && (
                        <option key={index} value={item.model}>
                          {item.model}
                        </option>
                      )
                    );
                  })}
              </select>
            </div>
            <div className="dropdown_section">
              <p className="dropdown_header">Short By</p>
              <select className="dropdown_input">
                <option>Select</option>
                <option>Price</option>
              </select>
            </div>
            <div className="dropdown_section">
              <p className="dropdown_header">Search By Name</p>
              <input
                type="text"
                placeholder="Search by name..."
                className="dropdown_input"
              />
            </div>
            <div className="button_section">
              <button
                className="button"
                onClick={() => {
                  setDropSelectedCategory("");
                }}
              >
                Clear
              </button>
            </div>
          </div>
        </div>
        <div className="main_body_right">
          <div className="body_right_header">
            <div>All Car List</div>
            <div>Total 30 results</div>
          </div>
          <div className="card_store">
            {dropSelectedCategory && selectedModel
              ? records?.map((item, index) => {
                  if (item.make == dropSelectedCategory) {
                    if (item.model === selectedModel) {
                      return <Card modelCardName={item} />;
                    }
                  }
                })
              : dropSelectedCategory
              ? records?.map((item, index) => {
                  if (item.make == dropSelectedCategory) {
                    return <Card modelCardName={item} />;
                  }
                })
              : records?.map((item, index) => <Card modelCardName={item} />)}
          </div>
        </div>
      </div>
      <div className="pagination_container">
        <Pagination totalPosts={props?.carData?.length} postPerPage={recordsPerPage} setCurrentPage={setCurrentPage} />
      </div>
    </div>
  );
};

export default body;
