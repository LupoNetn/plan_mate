import {BrowserRouter,Routes,Route} from 'react-router'
import AppLayout from './components/AppLayout'
import Dashboard from './pages/Dashboard'
import MyTasks from './pages/MyTasks'
import Inbox from './pages/Inbox'
import Analytics from './pages/Analytics'
import AssignedToMe from './pages/AssignedToMe'
import AuthLayout from './components/auth/AuthLayout'
import Signup from './components/auth/Signup'
import Login from './components/auth/Login'
import ScrollToTop from './components/ScrollToTop'
import { Toaster } from "react-hot-toast";
import CreateWorkspace from './pages/CreateWorkspace'

const App = () => {
  return (
   <>
    <BrowserRouter>
     <Toaster 
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: { 
            background: "#333", 
            color: "#fff" 
          },
        }}
      />
      <ScrollToTop />
      <Routes>
        <Route path='/auth' element={<AuthLayout />}>
         <Route index element={<Signup />}/>
         <Route path='login' element={<Login />} />
        </Route>

        <Route path='/'>
          <Route path='/create-workspace' element={<CreateWorkspace />}/>
          <Route path='/workspace/:id' element={<AppLayout />}>
            <Route index element={<Dashboard />}/>
          </Route>
        </Route>
        {/* <Route path='/workspace/:workspaceId' element={<AppLayout />}>
          {/* <Route path='/my-tasks' element={<MyTasks />} />
          <Route path='/inbox' element={<Inbox />}/>
          <Route path='/analytics' element={<Analytics />}/>
          <Route path='/assigned-to-me' element={<AssignedToMe />} /> */}
        
      </Routes>
    </BrowserRouter>
   </>
  )
}

export default App
