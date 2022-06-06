import React, {useContext} from 'react'
import AllManage from '../ManageContext/Context'
const NavbarUser = () => {
 const {allusers} = useContext(AllManage)    
  
  return(<>
  <nav>
       <h1 className='bg-primary'>List Users</h1> 
    <div>
       <h1>Company</h1>
    </div>
  </nav> 
    </>)
}


export default NavbarUser