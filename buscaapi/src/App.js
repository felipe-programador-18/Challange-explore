import  React, { useState, useEffect } from 'react';
import { FieltSear, GetData } from './ApiRandon/allmanage';
import './App.css';
import { ManageProvide } from './ManageContext/Context';
import NavbarUser from './ManagerUser/navbaruser';
import SeachBar from './ManagerUser/searchuser';
import TypeUsers from './ManagerUser/typeusers';
import Modal from 'react-modal';


const UserFavorite = 'users'
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};


function App() {
  
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }




  const peopleForPage = 25
  const [people, setpeople] = useState([])
  const [page, setpage] = useState(0)
  const [totaly, settotaly] = useState(0)
  const [loading, setloading] = useState(false)
  const [found , setfound] = useState(false)
  const[userinter, setuserinter] = useState([])
  
 const fetchingApi = async () => {
    try {
      setloading(true)
      setfound(false)
      const data = await FieltSear(peopleForPage, peopleForPage*page)
      console.log('have some here ?',data)
      setpeople(data.results)
      setloading(false)
      settotaly(Math.ceil(data.results / peopleForPage))
    } catch (error) {
      console.log('error here fetching', error)
    }
 }
 
 const loadHandlingPag = async (results) => {
   if(!results){
    return fetchingApi()
   }
   setloading(true)
   setfound(false)
   const result = await GetData(results)
   if(!result){
     setfound(true)
   }else{
     setpeople([result])
     setpage(0)
     settotaly(0)
   }
    setloading(false)
 }

 const careUpdate = (name) => {
    const carepeople = [...userinter] 
    const peopleIndex = userinter.indexOf(name)
    if(peopleIndex >= 0){
       carepeople.splice(peopleIndex,1)
    }else{
      carepeople.push(name)
    }
    window.localStorage.setItem(UserFavorite, JSON.stringify(carepeople))
    setuserinter(carepeople)
 }

 const LoadUser = () =>{
   const saveUser = JSON.parse(window.localStorage.getItem(UserFavorite))  || []
   setuserinter(saveUser)
 }


 useEffect(() => {
  fetchingApi()
 },[page])

 useEffect(() =>{
 loadHandlingPag()
 }, [])
  

  
  
  return ( <ManageProvide  value={{allusers:userinter, updatingpeople:careUpdate }} >
    <div className="App">
    <NavbarUser/> 
    
    <SeachBar Onsearch={LoadUser} />
      {found ? (<p> error of search!!</p>) :
     (<TypeUsers people={people}
     loading={loading} 
     page={page}
     totaly={totaly}
     setpage={setpage}
     />
      )}

<div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
    </div>
 
    </div>
  </ManageProvide>
 );
}

export default App;
