import React, { useState } from 'react'
import "./SideBar.css"
import DashboardPage from '../../../features/dashboard/DashboardPage';

import MainLogo from "../../../../public/MainLogo.png";
import HomeIcon from"../../../../public/homeIcon.svg";
import TransactionsIcon from "../../../../public/transactionIcon.svg";
import ProjectsIcon from "../../../../public/projectsIcon.svg";
import InsightsIcon from "../../../../public/insightsIcon.svg";
import ReportsIcon from "../../../../public/reportsIcon.svg";
import SettingsIcon from "../../../../public/settingsIcon.svg";
import LogOutIcon from "../../../../public/logOutIcon.svg";
function SideBar() {
/*States */
const [selected,setSelected]=useState("Dashboard")


  return (
    <>
    <div className="dashboard">
    
<div className="leftBar">
  <div className="navItem">
    <img src={MainLogo} className='mainLogo'/>
    <span className='mainSpan'>Nexus</span>
  </div>
    <div className="navItem">
        <img src={HomeIcon} className='itemLogo'/>
    <span className={"itemSpan "+(selected==="Dashboard"? "active":"")}
    onClick={()=>{setSelected("Dashboard")}}
    id='Dashboard'>Dashboard</span>
    </div>
      <div className="navItem">
        <img src={TransactionsIcon} className='itemLogo'/>
    <span className={"itemSpan "+(selected==="Transactions"? "active":"")}
    onClick={()=>{setSelected("Transactions")}} >Transactions</span>
      </div>
        <div className="navItem">
           <img src={ProjectsIcon} className='itemLogo'/>
    <span className={"itemSpan "+(selected==="Projects"? "active":"")}
    onClick={()=>{setSelected("Projects")}}>Projects</span>
        </div>
          <div className="navItem">
            <img src={InsightsIcon} className='itemLogo'/>
    <span className={"itemSpan "+(selected==="Insights"? "active":"")}
    onClick={()=>{setSelected("Insights")}}>Insights</span>
          </div>
            <div className="navItem">
               <img src={ReportsIcon} className='itemLogo'/>
    <span className={"itemSpan "+(selected==="Reports"? "active":"")}
    onClick={()=>{setSelected("Reports")}}>Reports</span>
            </div>
<div className="bottomNavWhole">
<div className="navItemBottom">
               <img src={SettingsIcon} className='itemLogo'/>
    <span className={"itemSpan "+(selected==="Settings"? "active":"")}
    onClick={()=>{setSelected("Settings")}}>Settings</span>
            </div>
<div className="navItemBottom">
               <img src={LogOutIcon} className='itemLogo'/>
    <span className={"itemSpan "+(selected==="LogOut"? "active":"")}
    onClick={()=>{setSelected("LogOut")}}>Log out</span>
            </div> 
 

</div>


</div>
  



    
    

<div className="mainContent">

{selected=="Dashboard" && <DashboardPage/>}

</div>
</div>
    </>
  )
}

export default SideBar