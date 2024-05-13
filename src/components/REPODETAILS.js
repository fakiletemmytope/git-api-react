import { useState, useEffect } from "react"
import { fetchDetails } from "../function/fetchApi"
import { REPO } from "./REPO"

const REPODETAILS = ({parameter}) =>{
   const [result, setResult]   = useState("")
   const [error, setCatError]   = useState("")


    useEffect(()=>{
    fetchDetails(setResult, setCatError, parameter)
    
    }, [setResult, parameter])

    // console.log(result)

    //console.log(error)

  return(
    <div class="container">
      <h1>My GitHub Repositories</h1>
        {
            result &&
            <>
                <REPO name={result.name} id={result.id} created_at={result.created_at}updated_at={result.updated_at}/>
                <button>Update</button> <button>Delete</button>
            </>
            
        }
      
        {
            error &&
            <p>{error}</p>
        } 

    </div>
   
  )
}

export default REPODETAILS