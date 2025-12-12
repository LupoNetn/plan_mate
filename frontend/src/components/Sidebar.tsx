import { PlusIcon } from "lucide-react"
import { NavLink } from "react-router"
import { getNavLinks } from "../constants/constants"

// const NAV_Links = [
//     {title:'Dashboard',path:'/workspace/${id}', icon: LayoutDashboard},
//     {title:'My projects',path:'/my-tasks', icon: CheckSquare},
//     {title:'Team Members',path:'/assigned-to-me', icon: Users},
//     {title:'Settings',path:'/inbox', icon: Inbox},
//     {title:'Analytics',path:'/analytics', icon: BarChart3},
// ]

const Sidebar = ({id}:{id: string}) => {
  const NAV_Links = getNavLinks(id)
  console.log(id)
  return (
    <>
     <div>
        <aside className="bg-gray-200 hidden md:block h-screen md:40 lg:w-64 px-6 py-6 fixed left-0 border-r border-gray-200 overflow-y-auto">
            <p className="text-gray-500 text-sm font-bold mb-6 px-3">Main Menu</p>
            <nav className="space-y-2">
              {NAV_Links.map((link, idx) => {
                const Icon = link.icon
                return (
                  <NavLink 
                    to={link.path} 
                    key={idx}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group ${
                        isActive
                          ? 'bg-white text-indigo-600 font-bold shadow-xl'
                          : 'text-gray-700 hover:bg-white hover:shadow-sm'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <Icon size={20} className={isActive ? 'text-indigo-600' : 'text-gray-600 group-hover:text-indigo-600'} />
                        <span className="text-sm font-medium">{link.title}</span>
                      </>
                    )}
                  </NavLink>
                )
              })}
            </nav>
            <hr className="text-gray-400 m-2"/>

            <div className="mt-4">
                <div className="flex justify-between items-center text-gray-800">
                    <p>Workspace</p>
                   <button>
                    <PlusIcon size={28} className="text-gray-600 hover:text-gray-900"/>
                   </button>
                </div>
            </div>
        </aside>

        {/* Mobile bottom navigation */}
        <div className="md:hidden">
          <nav className="fixed bottom-0 left-0 right-0 bg-gray-200 border-t border-gray-200 px-2 py-2 z-40">
            <div className="flex items-center justify-between gap-2 bg-transparent px-2">
              {NAV_Links.map((link, idx) => {
                const Icon = link.icon
                return (
                  <NavLink
                    to={link.path}
                    key={idx}
                    className={({ isActive }) =>
                      `flex-1 flex flex-col items-center gap-1 px-2 py-2 transition-all duration-150 rounded-lg text-xs ${
                        isActive
                          ? 'bg-white text-indigo-600 font-bold shadow-md'
                          : 'text-gray-600 hover:bg-white hover:shadow-sm'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <Icon size={20} className={isActive ? 'text-indigo-600' : 'text-gray-600'} />
                      </>
                    )}
                  </NavLink>
                )
              })}
            </div>
          </nav>
          {/* Add bottom safe area spacer to avoid content behind nav
          <div className="h-20 w-full" /> */}
        </div>
     </div>
    </>
  )
}

export default Sidebar
