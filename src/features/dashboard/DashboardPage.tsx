import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Calendar from "../../features/dashboard/components/calender";
import "../../styles/DashboardPage.css";
import Sidebar from "../../components/ui/layout/Sidebar";
import Search from "../../components/ui/ui/search";
import ProfileIcon from "../../../public/profileIcon.svg";
function DashboardPage() {
  const [welcome,setWelcome]=useState("Mahmoud")
  return (
    <>
    
    <Search/>
    <img src={ProfileIcon} className='ProfileIcon'/>

<div className="wholePage">
<h1 className='welcomeH1'>Good morning, {welcome}</h1><span className='welcomeSpan'>Here is what's happening with your business today.</span>
<div className="row1Lastcolumn"><Calendar/></div>

</div>


    </>
  )
}

export default DashboardPage