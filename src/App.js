import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Index } from "./pages/index";
import { RepoDetails } from "./pages/repo";
import "./App.css"


function App() {
  return(
    <BrowserRouter>
        <Routes>
          <Route index element={<Index />} />
          <Route path="repo/:repoName" element={<RepoDetails/>} />
        </Routes>
    </BrowserRouter>
  )
  
  
  
}

export default App;
