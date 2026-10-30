import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import RevenueOverview from "../../components/ui/charts/RevenueChart";
import Calendar from "../../features/dashboard/components/calender";
import "../../styles/DashboardPage.css";
import Sidebar from "../../components/ui/layout/Sidebar";
import Search from "../../components/ui/ui/search";
import ProfileIcon from "../../../public/profileIcon.svg";
import OverviewCard from "../../components/ui/charts/OverviewCard";


function DashboardPage() {
 
  const hour = new Date().getHours();

const welcome =
  hour < 12 ? "Good Morning" :
  hour < 18 ? "Good Afternoon" :
  "Good Evening";
  interface OverviewCardProps {
  title: string;
  amount: number;
  percentage: number;
  positive: boolean;
}

const OverviewData: OverviewCardProps[] = [
  {
    title: "Total Revenue",
    amount: 5000,
    percentage: 12,
    positive: true
  },
  {
    title: "Total Expenses",
    amount: 2000,
    percentage: 5,
    positive: false
  },
  {
    title: "Net Profit",
    amount: 3000,
    percentage: 14,
    positive: true
  },
  {
    title: "Growth Rate",
    amount: 16,
    percentage: 16,
    positive: true
  }
];
  return (
    <>
      <Search />
      <img src={ProfileIcon} className="ProfileIcon" />

      <div className="wholePage">
        <h1 className="welcomeH1">{welcome} Mahmoud</h1>
        <span className="welcomeSpan">
          Here is what's happening with your business today.
        </span>
        <div className="row1Lastcolumn">
          <Calendar />
        </div>

      <div className="wholeTotalBoxes">
  {OverviewData.map((item, index) => (
    <OverviewCard key={index} {...item} />
  ))}
</div>
        <RevenueOverview />
      </div>
    </>
  );
}

export default DashboardPage;
