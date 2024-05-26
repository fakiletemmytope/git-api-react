const BASE_URL = 'https://api.github.com/'
const OWNER = process.env.REACT_APP_OWNER
const TOKEN = process.env.REACT_APP_TOKEN
const VERSION = process.env.REACT_APP_VERSION

//For getting the details of a repositry
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
      console.log(data)
    })
    .catch((err) => {
      setCatError(err.message)
    })
}

//use to get all the users repositries
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
      //console.log(data)
      setResult(data)
    })
    .catch((err) => {
      // console.log(err.message)
      setCatError(err.message)
    })
}
export default fetcher

//For creating a repo
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
      setResult(data)
      
  } catch (error) {
      //console.error(error.message);
      setCatError(error.message);
  }
};

//for getting the total number of a user's repositries
export const fetchRepositories = async () => {
  let pageNumber = 1;
  let totalRepositories = 0
  await fetch(`${BASE_URL}users/${OWNER}/repos?per_page=100&page=${pageNumber}`, 
      {
          headers:{
              Accept: "application/vnd.github+json",
              'X-GitHub-Api-Version': VERSION,
              Authorization: `Bearer ${TOKEN}`
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
  .then(data => {
      const repos = data;
      //console.log(repos);
      totalRepositories += repos.length;

      if (repos.length <= 100) {
          //console.log(`Total number of repositories in your GitHub account: ${totalRepositories}`);
          return totalRepositories
      } else {
          fetchRepositories(pageNumber + 1); // Fetch the next page
      }
  })
  .catch(error => {
      console.error(error);
  });
  
  //await setRepoNumber(totalRepositories)
  return totalRepositories

}

//for updating a repo
export const updateRepo = async(repoName, description, setResult, setCatError) =>{
  const repo = {
    "name": repoName,
    "description": description,
    "homepage": "https://github.com",
    "private": false,
    "is_template": true
};

try {
    const response = await fetch(`${BASE_URL}repos/${OWNER}/${repoName}`, {
        method: 'PATCH',
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
    //console.log(data);
} catch (error) {
    //console.error(error.message);
    setCatError(error.message);
}

}

export const deleteRepo = async (reponame) =>{
    
    try {
        const response = await fetch(`${BASE_URL}repos/${OWNER}/${reponame}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/vnd.github+json',
                'X-GitHub-Api-Version': VERSION,
                 Authorization: `Bearer ${TOKEN}`,
                'Content-Type': 'application/json'
            },
            
        });
    
        if (!response.ok) {
            throw new Error('Network response was not OK');
        }
    
        //const data = await response.json();
        //setResult(data);
        
    } catch (error) {
        //setCatError(error.message);
    }

}


