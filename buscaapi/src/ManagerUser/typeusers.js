import React from 'react'
import PagiLoaded from './Pagination'
import User from './users';


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
          <PagiLoaded 
          page={page+1}
          totaly={totaly}
          leftHandClick={OnleftHandling}
          rightHandClick={OnrightHandling}
          />
      </div>
      {loading ? (<>Loading ....  </>)  :    
            ( <>          
              { people && people.map((results, index) => {
               return ( <User key={index} results={results} />
               )
              })
              }
             </>
              )
            } 



  </div>)  
}


export default TypeUsers