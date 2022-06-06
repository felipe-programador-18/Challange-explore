import React from 'react'

// think about manage way
const AllManage= React.createContext({
     allusers:[],
     updatingpeople: (id) => null 
})

export const ManageProvide = AllManage.Provider
export default AllManage