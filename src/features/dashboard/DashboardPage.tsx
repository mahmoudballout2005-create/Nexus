import React from 'react'
import "./DashboardPage.css"
import MainLogo from "../../../public/MainLogo.png";
import HomeIcon from"../../../public/homeIcon.svg";
import TransactionsIcon from "../../../public/transactionIcon.svg";
import ProjectsIcon from "../../../public/projectsIcon.svg";
import InsightsIcon from "../../../public/insightsIcon.svg";
import ReportsIcon from "../../../public/reportsIcon.svg";
import SettingsIcon from "../../../public/settingsIcon.svg";
import LogOutIcon from "../../../public/logOutIcon.svg";
function DashboardPage() {
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
    <span className='itemSpan'>Dashboard</span>
    </div>
      <div className="navItem">
        <img src={TransactionsIcon} className='itemLogo'/>
    <span className='itemSpan'>Transactions</span>
      </div>
        <div className="navItem">
           <img src={ProjectsIcon} className='itemLogo'/>
    <span className='itemSpan'>Projects</span>
        </div>
          <div className="navItem">
            <img src={InsightsIcon} className='itemLogo'/>
    <span className='itemSpan'>Insights</span>
          </div>
            <div className="navItem">
               <img src={ReportsIcon} className='itemLogo'/>
    <span className='itemSpan'>Reports</span>
            </div>
<div className="bottomNavWhole">
<div className="navItemBottom">
               <img src={SettingsIcon} className='itemLogo'/>
    <span className='itemSpan'>Settings</span>
            </div>
<div className="navItemBottom">
               <img src={LogOutIcon} className='itemLogo'/>
    <span className='itemSpan'>Log out</span>
            </div> 


</div>


</div>
  <div className="NavBar"></div>
<div className="mainContent"></div>



    </div>
    
    </>
  )
}

export default DashboardPage