
import { Outlet } from 'react-router'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { Navigate } from 'react-router'

const AppLayout = () => {
  const accessToken = localStorage.getItem("accessToken");
  if (!accessToken) {
    return <Navigate to="/auth/login" />;
  }
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
