const BASE_URL = 'https://api.github.com/'
const OWNER = process.env.REACT_APP_OWNER
const TOKEN = process.env.REACT_APP_TOKEN
const VERSION = process.env.REACT_APP_VERSION
export const fetchDetails = (setResult, setCatError,repoName) =>{
  fetch(`${BASE_URL}repos/${OWNER}/${repoName}`,
        {
            headers:{
                Accept: "application/vnd.github+json",
                'X-GitHub-Api-Version': VERSION,
                Authorization: `Bearer ${TOKEN}`
            }
        }
    )
    .then(res => {
    
        if(!res.ok){
          throw new Error('Network Responese was no OK')
        }
       return res.json()

    })
    .then(data =>{
      setResult(data)
    })
    .catch((err) => {
      setCatError(err.message)
    })
}


const fetcher = (setResult, setCatError, page) =>{
    
    fetch(`${BASE_URL}users/${OWNER}/repos?per_page=5&page=${page}`,
        {
            headers:{
                Accept: "application/vnd.github+json",
                'X-GitHub-Api-Version': VERSION,
                Authorization: `Bearer ${TOKEN} `

            }
        }
    )
    .then(res => {
      // debugger
        if(!res.ok){
          throw new Error('Network Responese was no OK')
        }
        // console.log(res)
       return res.json()

    })
    .then(data =>{
      console.log(data)
      setResult(data)
    })
    .catch((err) => {
      // console.log(err.message)
      setCatError(err.message)
    })
}
export default fetcher

export const createRepo = async (repoName, description, setResult, setCatError) => {
  const repo = {
      "name": repoName,
      "description": description,
      "homepage": "https://github.com",
      "private": false,
      "is_template": true
  };

  try {
      const response = await fetch(`${BASE_URL}user/repos`, {
          method: 'POST',
          headers: {
              'Accept': 'application/vnd.github+json',
              'X-GitHub-Api-Version': VERSION,
               Authorization: `Bearer ${TOKEN}`,
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(repo)
      });

      if (!response.ok) {
          throw new Error('Network response was not OK');
      }

      const data = await response.json();
      setResult(data);
      console.log(data);
  } catch (error) {
      console.error(error.message);
      setCatError(error.message);
  }
};


