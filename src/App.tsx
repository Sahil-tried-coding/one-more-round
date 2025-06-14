import { BrowserRouter as Router, Route , Routes } from "react-router-dom"
import PublicLayout from "./layout/PublicLayout"
import HomePage from "./routes/HomePage"
import AuthLayout from "./layout/AuthLayout"
import SignUpPage from "./routes/sign-up"
import SignInPage from "./routes/sign-in"
import ProtectedLayout from "./layout/ProtectedLayout"
import MainLayout from "./layout/MainLayout"
import Dashboard from "./routes/Dashboard"
import Generate from "./components/Generate"
import CreateEditPage from "./components/create-edit-page"


const App = () => {
  return (
    <Router>
      <Routes>
        {/* public routes */}
        <Route element={<PublicLayout/>}>
        
        
        <Route index element={<HomePage/>}/>
        </Route>

        {/* authenticated routes */}
        <Route element={<AuthLayout/>}>
        
        
        <Route path="/signin/*" element={<SignInPage/>}/>
        <Route path="/signup/*" element={<SignUpPage/>}/>
        </Route>

        {/* protected route */}
        <Route element={<ProtectedLayout><MainLayout/></ProtectedLayout>}>
 
        <Route path='/generate' element={<Generate/>}>
          <Route index element={<Dashboard/>}></Route>
          <Route path=":interviewId" element={<CreateEditPage/>}></Route>
          {/* <Route path="/create" element={<CreateEditPage/>}></Route> */}
        </Route>
        </Route>



      </Routes>
    </Router>
  )
}

export default App