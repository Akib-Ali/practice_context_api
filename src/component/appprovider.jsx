import { createContext } from "react"
const AppContext = createContext()


const AppProvider=({children})=>{

 



    const userInformation ={

        name:"Akib Ali",
        age: "24 year",
        position : "Software Engineer"
    }





    return(

        <div>

         <AppContext.Provider value={userInformation}>
           {children}
         </AppContext.Provider>

        </div>
    )
}


export {AppContext,AppProvider}