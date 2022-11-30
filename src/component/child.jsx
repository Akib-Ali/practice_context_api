import { useContext } from "react"
import { AppContext, AppProvider } from "./appprovider"


export const Child=()=>{
    
const getinformation =  useContext(AppContext)

console.log(getinformation)




    return (

        <div>
            <h1>Child Component</h1>
              <li>
                <ul>{`Name : ${getinformation.name}`}</ul>
                <ul>{`Position : ${getinformation.position}`}</ul>
                <ul>{`Age : ${getinformation.age}`}</ul>
              </li>

        </div>
    )
}