import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import RevenueOverview from "../../components/ui/charts/ChartCard";
import Calendar from "../../features/dashboard/components/calender";
import "../../styles/DashboardPage.css";
import Sidebar from "../../components/ui/layout/Sidebar";
import Search from "../../components/ui/ui/search";
import ProfileIcon from "../../../public/profileIcon.svg";
function DashboardPage() {
  const [welcome, setWelcome] = useState("Mahmoud");
  return (
    <>
      <Search />
      <img src={ProfileIcon} className="ProfileIcon" />

      <div className="wholePage">
        <h1 className="welcomeH1">Good morning, {welcome}</h1>
        <span className="welcomeSpan">
          Here is what's happening with your business today.
        </span>
        <div className="row1Lastcolumn">
          <Calendar />
        </div>

        <div className="wholeTotalBoxes">
          <div className="totalRevnue"><h4>Total Revnue</h4><span className="profileTitle ">$0,000</span><span className="spanNegative">⬇ 0.2%</span></div>
          <div className="totalExpenses"><h4>Total Expenses</h4><span className="profileTitle ">$0,000</span><span className="spanPositive">⬆ 12%</span></div>
          <div className="netProfit"><h4>netProfit</h4><span className="profileTitle ">$0,000</span><span className="spanNegative">⬇ 14%</span></div>
          <div className="growthRate"><h4>growthRate</h4><span className="profileTitle ">$0,000</span><span className="spanPositive">⬆ 16%</span></div>
        </div>
        <RevenueOverview />
      </div>
    </>
  );
}

export default DashboardPage;
