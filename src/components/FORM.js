import { useState } from "react"
import { createRepo } from "../function/fetchApi"

const FORM = ({onClose}) =>{
    const[name, setName] = useState("")
    const [description, setDescription] = useState("")
    const[formError, setFormError] = useState("")
    const[result, setResult] = useState("")
    const[error, setError] = useState("")

    const HandleSubmit = (e) => {
        console.log("Hurray")
        alert("baddo")

        e.preventDefault()
        if(name === "" || description === ""){
            setFormError("All fields must be filled")
        }
        else{
            createRepo(name, description, setResult, setError);
            setName("");
            setDescription("");
            setFormError("");
            onClose();
        }
    }

    return(
        <div>
            <form>
                <h3>Create a Repository</h3>
                {
                    formError && <p>{formError}</p>
                }
                {
                    error && <p>{error}</p>
                }
                {
                    result && <p>{result}</p>
                }
                <p> <span>{name}</span>
                    <label>Repo Name:</label><br/><br/>
                    <input type="text" value={name}
                    onChange={(e) => setName(e.target.value) }/>
                </p>
                <p>
                    <label>Description:</label><br/><br/>
                    <input type="text" value={description}
                    onChange={(e) => setDescription(e.target.value) }/>
                </p>
                <p>
                    <input type="button" value="submit" onClick={HandleSubmit}/>
                </p>
            </form>
        </div>
    )
}

export default FORM