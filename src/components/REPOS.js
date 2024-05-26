import { useNavigate } from "react-router"

export const REPOS = ({name, id, modal_function,  description}) => {
     
    const navigate = useNavigate()
    //const dateTimeString = created_at;
    
    // const convertDateTime = (dateTimeString) =>{
    //     //const dateTime = dateTimeString;
    //     const dateTime = new Date(dateTimeString);
    //     const date = dateTime.toLocaleDateString(); // Get the date part in local format
    //     const time = dateTime.toLocaleTimeString(); // Get the time part in local format 
    //     return {date, time}
    // }

    // const created = convertDateTime(created_at)
    // const updated = convertDateTime(updated_at)

   //setname(name)

   const handleClick = () =>{
        modal_function(name)
   }
    
    return(
        <>
            <h2 onClick={
                () =>{
                    navigate(`repo/${name}`)
                }
            }>{name}</h2>{
                description? <span>{description}</span>:<span></span>
            }
            <p>ID: <span className="repo-id">{id}</span></p>
            <p>
                <button className="button" onClick={handleClick}>Update</button> <button className="button">Delete</button>
            </p>
        </>
    )
}