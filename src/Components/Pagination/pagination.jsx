import {React,useState} from 'react'

const pagination = (props) => {
  const [currentPage,setCurrentPage] = useState(1);
  const recordsPerPage =6;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = props?.carData?.slice(firstIndex,lastIndex);
  const nPage = Math.ceil(props?.carData?.length/recordsPerPage);
  console.log("npage",nPage)
  const numbers = nPage && [...Array(nPage+1).keys()].slice(1);
  console.log("numbers",numbers)
  return (
    <div>
      <nav>
        <ul>
          <li className='page-items'>
            <a href='#' className='page-link'>Prev</a>
          </li>
          {
            nPage && numbers?.map((n,i) =>{
              {console.log("nnnnn",n)}
              return<>
              <li key={i}>
              {console.log("mmmmm",n)}
              <a href='#' className='page-link'>{n}</a>
              </li>
              </>
              
          })
          }
          
          
          <li className='page-items'>
            <a href='#' className='page-link'>Next</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default pagination