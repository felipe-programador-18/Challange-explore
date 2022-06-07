import React from 'react'

const PagiLoaded = (props) => {
    const {page, leftHandClick, rightHandClick} = props
    console.log('testing here ', page)
    return(<> 
    <div>
        <button onClick={leftHandClick}  ></button>
          <div> {page} </div>
        <button onClick={rightHandClick} ></button>
    </div>
              
    </>)
}

export default PagiLoaded