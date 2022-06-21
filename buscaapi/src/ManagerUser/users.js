import React,{useContext} from 'react'
import Modal from 'react-modal';
import AllManage from '../ManageContext/Context'
import CreateModal from './Modal';


const User = (props) => {
    const {allusers, updatingpeople} = useContext(AllManage)
    const {results} =props;
    const letter = allusers.includes(results.name) ?  "📜" : "📃" 
    
    const handUsersFav = () => {
      updatingpeople(results.name)
    }

    return (<div className='container' >
        
  <table class="table">
  <thead>
      <tr>
      <th scope='col'>People</th>
      <th scope="col">Nome</th>
      <th scope="col">Email</th>
      <th scope="col">Genero</th>
      <th scope='col'>Dt Nasc</th>
      <th scope='col'>Tel</th>
      
    </tr>
  </thead>
  <tbody> 
    <tr className='table-dark'>
      <th scope="row"> <img id='image-size'src={results.picture.thumbnail} /></th>
      <td>{ `${results.name.first} ${results.name.last}` }  </td>
      <td>{results.email} </td>
      <td>{results.gender}</td>
      <td>{results.dob.date}</td>
      <td>{results.cell}</td>
      <td> {results.location.city} </td>
      <td>{results.nat} </td>
      <td> {results.id.name} </td>
    </tr>
  </tbody>
</table>
     <CreateModal/>
          <button onClick={handUsersFav} >{letter}</button>
       
    </div>)

}

export default User