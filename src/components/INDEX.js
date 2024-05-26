import { useEffect, useState } from 'react';
import fetcher from '../function/fetchApi';
import { fetchRepositories } from '../function/fetchApi';
import { REPOS } from './REPOS';
import MODAL from './MODAL';
import FORM from './FORM';
import NAV from './NAV';
import UPDATEMODAL from './UPDATEMODAL';
import UPDATEFORM from './UPDATEFORM';

const INDEX = () =>{
    const[result, setResult] = useState("")
    const[error, setCatError] = useState("")
    const[page, setPage] = useState(1)
    const[open, setOpen] = useState(false)
    const[openUM, setOpenUM] = useState(false)
    const[updateName, setUpdateName] = useState("")
    const[repoNumber, setRepoNumber] = useState(0)
  
    useEffect(()=>{
      const getNumberOfRepos = async ()=>{
        const numberOfRepo = await fetchRepositories()
        setRepoNumber(numberOfRepo)
        fetcher(setResult, setCatError, page) 
      }
      getNumberOfRepos()         
    }, [page])
  
    const previousPage = () =>{
      if(page > 1){
          setPage(page - 1)
      }
      else{
        setPage(1)
      }
    }

    const nextPage = () =>{
      if(page < repoNumber){
          setPage(page + 1)
      }
      else{
        setPage(repoNumber)
      }
    }

    const handleClose = () => {
      setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleCloseUM = () => {
      setOpenUM(false);
    };

    const handleOpenUM = (arg) => {
        console.log(arg)
        setUpdateName(arg)
        setOpenUM(true);
    };

    
 
  
    return(
      <div class="container">
        <NAV/>
        <h1>My GitHub Repositories</h1>
        {
            result && 
            result.map(
               (repo) => {
                  const{id, name, html_url, created_at, updated_at, description} = repo
                  return(
                    <div key={id}>
                        <REPOS name={name} url={html_url} id={id} description={description}ncreated_at={created_at}updated_at={updated_at} arg={name} modal_function ={handleOpenUM}/>
                        <hr/>
                    </div>
                    
                  )
               }
            )
        }
        
        <button className="button" onClick={previousPage}>Previous</button> <button className="button" onClick={nextPage}>Next</button>
        <button className="button green" onClick={handleOpen}>Create</button>
        {
          error && <p>{error}</p>
        }

        <MODAL isOpen={open} onClose={handleClose}>
                <FORM onClose={handleClose}/>
        </MODAL>
        <UPDATEMODAL isOpenUM={openUM} reponame={updateName} onClose={handleCloseUM}>
           <UPDATEFORM reponame={updateName} onClose={handleCloseUM} />
        </UPDATEMODAL>
      </div>
     
    )
}

export default INDEX