import { useState, useEffect } from "react"
import { deleteRepo, fetchDetails } from "../function/fetchApi"
import { REPO } from "./REPO"
import TESTMODAL from "./TESTMODAL"


const REPODETAILS = ({parameter}) =>{
   const [result, setResult]   = useState("")
   const [error, setCatError]   = useState("")
   const [open , setopen] = useState(false)
   
    useEffect(()=>{
      fetchDetails(setResult, setCatError, parameter)    
    }, [setResult, parameter])

    const openModal = () => {
        setopen(true)
    }

    const closeModal = () => {
      setopen(false)
    }

    const HandleDelete = async (e) =>{
      await deleteRepo(result.name)
    }
  return(
    <div class="container">
      <h1>My GitHub Repositories</h1>
        {
            result &&
            <>
                <REPO name={result.name} id={result.id} description={result.description} created_at={result.created_at}updated_at={result.updated_at}/>
                <p>
                  <button className="button"  onClick={openModal}>Update</button> <button className="button" onClick={HandleDelete} reponame={result.name}>Delete</button>
                </p>
            </>
            
        }
      
        {
            error &&
            <p>{error}</p>
        } 
        <TESTMODAL open={open} close={closeModal} name={result.name} />
      

    </div>
   
  )
}

export default REPODETAILS