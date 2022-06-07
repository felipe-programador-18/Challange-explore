import React,{useState} from 'react'



const SeachBar = (props) => {

  const [search, setsearch] =  useState("")
  const {Onsearch} = props;
  const anotertest = Object.keys(search).map((one) => one)
  //const verify = anotertest.filter()
  //console.log('testing here',verify)
  //console.log('test', search)
  //const teste = search.toLowerCase()
  //const treat = teste.filter((call) => call.toLowerCase().includes(teste))  
  

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

        {/*<ul>
            {treat.map((call) => (
                <li key={call} >{call}</li>
            ))}
            </ul>*/}
        <button className='d-block m-auto ' onClick={ClickSearch}>Search</button>
    </div>
     )
}


export default SeachBar