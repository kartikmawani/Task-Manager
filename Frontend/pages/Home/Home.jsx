import React from 'react'
 
import HomeBar from './HomeBar.jsx';
import HomeBody from './HomeBody.jsx';
import HomeLeftSideBar from './HomeLeftSideBar.jsx';
 import HomeRightSideBar from './HomeRightSideBar.jsx'
 
const Home=()=>{
    return(
        <>
        <HomeBar/>
        <HomeBody/>
        <HomeLeftSideBar/>
        <HomeRightSideBar/>
      
        </>
    )
}
 
 export default Home;