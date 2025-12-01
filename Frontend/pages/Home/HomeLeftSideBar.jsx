import React from 'react'
import {Link} from 'react-router-dom'

function HomeSideBar() {
  return (
     <>
     <div className="bg-orange-500 h-screen w-[20vw] flex items-center justify-center flex-col">
        <Link to="/"  >Home</Link>
        <Link to="/Complete">Complete</Link>
         <Link to="/Pending">Pending</Link>
     </div>
     </>
  )
}

export default HomeSideBar
