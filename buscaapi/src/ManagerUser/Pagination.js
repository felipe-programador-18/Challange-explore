import React from 'react'

const PagiLoaded = (props) => {
    const {page, leftHandClick, rightHandClick} = props
    console.log('testing here ', page)
    return(<> 
    <div>
        <button></button>
          <div> {page} </div>
        <button></button>
    </div>
              
    </>)
}

export default PagiLoaded