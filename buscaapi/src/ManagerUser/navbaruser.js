import React, {useContext} from 'react'
import AllManage from '../ManageContext/Context'
const NavbarUser = () => {
 const {allusers} = useContext(AllManage)    
  
  return(<>
  <nav>
       <h1 className='bg-primary'>List Users</h1> 
    <div className='container bg-danger'>
       <h3>Company</h3>
       {allusers}  📃
    </div>
  </nav> 
  </>
    )
}


export default NavbarUser