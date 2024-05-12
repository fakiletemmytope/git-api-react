import { useParams } from "react-router"
import REPODETAILS from "../components/REPODETAILS"

export const RepoDetails = () =>{

    const parameter = useParams().repoName
    return(
        <REPODETAILS parameter={parameter}/>
    )
}