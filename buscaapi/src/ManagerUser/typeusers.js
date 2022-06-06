import React from 'react'
import PagiLoaded from './Pagination'
// users here yet import!!!


const TypeUsers = (props) =>{
   const {people, page, loading, setpage, totaly } = props;  
   console.log('totaly page here', totaly)

   const OnleftHandling = () =>{
       if(page> 0){
        setpage(page-1)
       }
    }
    
   const OnrightHandling = () =>{
       if(page+1 !== totaly){
          setpage(page+1) 
       }
   }

  return( <div>

      <div>
          <h1>Pagination Testing!!</h1>
          <PagiLoaded 
          page={page+1}
          totaly={totaly}
          leftHandClick={OnleftHandling}
          rightHandClick={OnrightHandling}
          />
      </div>
            
            {loading}

  </div>)  
}