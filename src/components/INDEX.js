import { useEffect, useState } from 'react';
import fetcher from '../function/fetchApi';
import { REPOS } from './REPOS';
import MODAL from './MODAL';
import FORM from './FORM';

const INDEX = () =>{
    const[result, setResult] = useState("")
    const[error, setCatError] = useState("")
    const[page, setPage] = useState(1)
    const[open, setOpen] = useState(false)
  
    useEffect(()=>{
      fetcher(setResult, setCatError, page)
      
    }, [setResult, page])
  
    const previousPage = () =>{
      if(page > 1){
          setPage(page - 1)
      }
      else{
        setPage(1)
      }
    }

    const nextPage = () =>{
      if(page < 16){
          setPage(page + 1)
      }
      else{
        setPage(16)
      }
    }

    const handleClose = () => {
      setOpen(false);
  };

  const handleOpen = () => {
      setOpen(true);
  };
 
  
    return(
      <div class="container">
        <h1>My GitHub Repositories</h1>
        {
            result && 
            result.map(
               (repo) => {
                  const{id, name, html_url, created_at, updated_at} = repo
                  return(
                    <div key={id}>
                        <REPOS name={name} url={html_url} id={id} created_at={created_at}updated_at={updated_at}/>
                    </div>
                    
                  )
               }
            )
        }
        
        <button className="button" onClick={previousPage}>Previous</button> <button className="button" onClick={nextPage}>Next</button>
        <button className="button green"onClick={handleOpen}>Create</button>
        <button></button>
        {
          error && <p>{error}</p>
        }

        <MODAL isOpen={open} onClose={handleClose}>
                <FORM onClose={handleClose}/>
        </MODAL>
      </div>
     
    )
}

export default INDEX