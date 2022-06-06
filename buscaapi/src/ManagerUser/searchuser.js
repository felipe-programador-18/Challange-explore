import React,{useState} from 'react'


const SeachBar = (props) => {
  const [search, setsearch] =  useState("Mr")
  const {Onsearch} = props
   
  const GetSearch = (evt) => {
      setsearch(evt.target.value)
      if(evt.target.value === 0){
          Onsearch(undefined)
      }
  }  

  const ClickSearch = () => {
     Onsearch(search)
  }
   


    return( <div className='text-center'>
        <input  className='text-center bg-dark m-2' type='text' placeholder='Search' onChange={GetSearch} />
        <button className='d-block m-auto ' onClick={ClickSearch}>Search</button>
    </div>
     )
}


export default SeachBar