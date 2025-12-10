
import { Outlet } from 'react-router'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { Navigate } from 'react-router'
import { useEffect, useState } from 'react'
import { useAuthStore } from '../stores/authStore'
import { validateUser } from '../services/authService'
import { Loader2 } from 'lucide-react'

const AppLayout = () => {
  const setUser = useAuthStore((state) => state.setUser)
  const user = useAuthStore((state) => state.user)
  const accessToken = localStorage.getItem("accessToken");
  const [loading,setLoading] = useState(true)
 
 useEffect(() => {
  const checkUser = async () => {
    try {
      const data = await validateUser()
      setUser(data.user)
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
            <Sidebar />
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
