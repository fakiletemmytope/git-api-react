import { useNavigate } from "react-router"

export const REPOS = ({name, url, id, created_at, updated_at}) => {
     
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

   
    
    return(
        <>
            <h2 onClick={
                () =>{
                    navigate(`repo/${name}`)
                }
            }>{name}</h2>
            <p>ID: <span className="repo-id">{id}</span></p>
            {/* <p>Created: <span className="created">{created.date}</span> Time: <span className="created">{created.time}</span> </p>
            <p>Updated: <span className="created">{updated.date}</span> Time: <span className="created">{updated.time}</span> </p> */}
        </>
    )
}