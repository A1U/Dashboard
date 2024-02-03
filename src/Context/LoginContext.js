import { Children, createContext, useContext, useState } from "react";


 const UserContextProvider = createContext(null)
 export const useUserInfo=()=>useContext(UserContextProvider)

export const UserContext=({children})=>{
    const [userInfo,setUserInfo]=useState(null)


    return(
        <UserContextProvider.Provider value={{userInfo,setUserInfo}}>
            {children}
        </UserContextProvider.Provider>
    )


}
export default UserContext;