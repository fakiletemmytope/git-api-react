import { useState } from "react"
import { updateRepo } from "../function/fetchApi"


const UPDATEFORM = ({onClose, reponame}) =>{
    //const[name, setName] = useState("")
    const [description, setDescription] = useState("")
    const[formError, setFormError] = useState("")
    const[result, setResult] = useState("")
    const[error, setError] = useState("")
    //setName(reponame) 
    
    const HandleSubmit = async (e) => { 
        //console.log(`this ${reponame}`)
        e.preventDefault()
        if(description === ""){
            setFormError("All fields must be filled")
        }
        else{
            console.log(`${reponame}, ${description}`)
            updateRepo(reponame, description, setResult, setError);
            //setName("");
            setDescription("");
            setFormError("");
            onClose();
        }
    }

    return(
        <div>
            <form>
                <h3>Update {reponame}</h3>
                {
                    formError && <p>{formError}</p>
                }
                {
                    error && <p>{error}</p>
                }
                {
                    result && <p>{result}</p>
                }
                <p> 
                    <label>Repository Name</label><br/><br/>
                    <input type="text" value={reponame} disabled/>
                </p>
                <p>
                    <label>Description:</label><br/><br/>
                    <input type="text" value={description}
                    onChange={(e) => setDescription(e.target.value) }/>
                </p>
                <p>
                    <input className="button" type="button" value="submit" onClick={HandleSubmit}/> 
                    <button  className="button" onClick={onClose}>Close</button>
                </p>
            </form>
        </div>
    )
}

export default UPDATEFORM