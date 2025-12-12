
import { Outlet, useParams } from 'react-router'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { Navigate } from 'react-router'
import { useEffect, useState } from 'react'
import { useAuthStore } from '../stores/authStore'
import { validateUser } from '../services/authService'
import { Loader2 } from 'lucide-react'
import useWorkspace from '../hooks/useWorkspace'
import useWorkspaceStore from '../stores/workspaceStore'

const AppLayout = () => {
  const setUser = useAuthStore((state) => state.setUser)
  const user = useAuthStore((state) => state.user)
  const currentSpace = useWorkspaceStore((state) => state.currentWorkspace)
  const [loading,setLoading] = useState(true)
  const {id} = useParams()
  const {fetchSpace,data} = useWorkspace()
  console.log(id)
  console.log(data)
  console.log('current',currentSpace)

 useEffect(() => {
  const checkUser = async () => {
    try {
      const user = await validateUser()
      setUser(user.user)
      fetchSpace(id!)
    } catch {
      // invalid/expired token
      useAuthStore.getState().clearAuth()
    } finally {
      setLoading(false)
    }
  }
  checkUser()
}, [])

if (loading) return (
  <div className="flex items-center justify-center min-h-screen">
    <Loader2 className='animate-spin'/>
  </div>
)
if (!user) return <Navigate to="/auth/login" />

  return (
    <>
     <section>
        <header>
          <Navbar />
        </header>
        <main className='flex flex-col mt-20'>
           <div className=''>
            <Sidebar id={id!}/>
             {<div className='ml-90'>${data?.name}</div>}
           </div>
           <div className='md:ml-45 lg:ml-65 md:px-6 md:py-6 px-3 max-sm:mb-30'>
            <Outlet />
           </div>
        </main>
     </section>
    </>
  )
}

export default AppLayout
