import  React, { useState, useEffect } from 'react';
import { FieltSear, GetData } from './ApiRandon/allmanage';
import './App.css';
import { ManageProvide } from './ManageContext/Context';
import NavbarUser from './ManagerUser/navbaruser';
import SeachBar from './ManagerUser/searchuser';


const UserFavorite = 'favorites'

function App() {
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


 useEffect(() => {
  fetchingApi()
 },[page])

 useEffect(() =>{
 loadHandlingPag()
 }, [])
  

  
  
  return (
    <div className="App">
    <NavbarUser/> 
    <SeachBar/>     
    </div>
  
 );
}

export default App;
